import Note from "../model/Note.js";

export const AddNote = async (req, res, next) => {
    const { title, content, tags = [] } = req.body;
    const user = req.user;

    if (!title || !content) {
        return res.status(400).json({ success: false, message: 'Title and content are required' });
    }

    try {
        const note = new Note({
            title,
            content,
            tags,
            userId: user._id
        });

        await note.save(); // Save to the database

        return res.status(201).json({
            success: true,
            message: "Note created successfully",
            note
        });

    } catch (error) {
        next(error);
    }
};


export const EditNote = async (req, res, next) => {
    const noteId = req.params.noteId;
    const { title, content, tags, isPinned } = req.body;
    const user = req.user;

    if (!title && !content && !tags) {
        return res.status(400).json({
            success: false,
            message: "No changes provided!",
        });
    }

    try {
        const note = await Note.findOne({ _id: noteId, userId: user._id });

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found",
            });
        }

        if (title) note.title = title;
        if (content) note.content = content;
        if (tags) note.tags = tags;
        if (isPinned) note.isPinned = isPinned;

        await note.save();

        return res.status(200).json({
            success: true,
            message: "Note updated successfully",
            note,
        });

    } catch (error) {
        next(error);
    }
};


export const GetAllNote = async (req, res, next) => {
    const user = req.user;

    try {
        const notes = await Note.find({ userId: user._id }).sort({ isPinned: -1 });

        return res.status(200).json({
            success: true,
            notes,
            message: "All notes fetched successfully",
        });

    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
};


export const DeleteNote = async (req, res, next) => {
    const noteId = req.params.noteId;
    const user = req.user;

    try {
        const note = await Note.findOneAndDelete({ _id: noteId, userId: user._id });

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found or you don't have permission to delete it",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Note deleted successfully",
        });

    } catch (error) {
        next(error);
    }
};


export const UpdateNotePinned = async (req, res, next) => {
    const noteId = req.params.noteId;
    const { isPinned } = req.body;
    const user = req.user;

    try {
        const note = await Note.findOne({ _id: noteId, userId: user._id });

        if (!note) {
            return res.status(404).json({
                success: false,
                message: "Note not found",
            });
        }

        if (isPinned) note.isPinned = isPinned;

        await note.save();

        return res.status(200).json({
            success: true,
            message: "Note updated successfully",
            note,
        });

    } catch (error) {
        next(error);
    }
}