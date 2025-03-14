import React, { useState } from "react";
import TagInput from "../components/Input/TagInput";

const AddEditNote = ({noteData, type, onClose}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  const addNewNote = async() => {}


  const editNote = async() => {}

  const handleAddNote = () => {
    if(!title){
      setError("Please enter the title")
      return;
    }


    if(!content){
      setError("Please enter the content")
      return;
    }

    setError("");

    if(type === "edit"){
      editNote()
    }
    else{
      addNewNote()
    }
  }


  return (
    <div className="overflow-hidden max-h-[calc(100vh-100px)] relative">
      <div className="flex flex-col gap-3">
        <label className="text-xs text-slate-400">TITLE</label>
        <input
          type="text"
          className="text-slate-950 text-2xl outline-none"
          placeholder="Go to Home at 5"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <label className="text-xs text-slate-400">Content</label>
        <textarea
          id="content-input"
          className="text-slate-950 text-sm outline-none rounded bg-slate-50 p-3 border border-slate-300"
          placeholder="Enter your content here..."
          rows={6}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="mt-3">
        <label htmlFor="tags-input" className="text-xs text-slate-400">
          Tags
        </label>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      <button className="cursor-pointer font-medium mt-5 p-3 bg-blue-500 text-white rounded w-full hover:bg-blue-600" onClick
      ={handleAddNote}>
        ADD
      </button>
    </div>
  );
};

export default AddEditNote;
