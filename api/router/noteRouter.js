import express from 'express'
import { AddNote, DeleteNote, EditNote, GetAllNote, UpdateNotePinned } from '../controller/noteController.js';
import { authenticateToken } from '../utils/authenticateToken.js';

const Router = express.Router();

Router.get("/get-all-notes",authenticateToken,GetAllNote);
Router.post("/add-note",authenticateToken,AddNote);
Router.put("/edit-note/:noteId",authenticateToken,EditNote);
Router.put("/update-note-pinned/:noteId",authenticateToken,UpdateNotePinned);
Router.delete("/delete-note/:noteId",authenticateToken,DeleteNote);

export default Router;