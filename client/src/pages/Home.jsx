import { MdAdd } from "react-icons/md";
import NavBar from "../components/NavBar.jsx";
import NoteCard from "../components/NoteCard.jsx";
import AddEditNote from "./AddEditNote.jsx";
import { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const closeModal = () => {
    setOpenAddEditModal({
      isShown: false,
      type: "add",
      data: null,
    });
  };

  return (
    <>
      {/* Navbar */}
      <NavBar />

      <div className="container mx-auto">
        {/* NoteCard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-6">
          <NoteCard
            title="Build a Full Stack Notes App using MERN"
            date="24 Apr 2025"
            content="Build a Full Stack Notes App using MERN"
            tags="#meeting"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Prepare for Presentation"
            date="25 Apr 2025"
            content="Finalize the slides and review content for the upcoming presentation."
            tags="#work"
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
          <NoteCard
            title="Grocery Shopping"
            date="26 Apr 2025"
            content="Don't forget to buy milk, bread, eggs, and coffee for the week."
            tags="#personal"
            isPinned={false}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        className="fixed bottom-10 right-10 w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-700 shadow-lg transition-all duration-300"
        onClick={() =>
          setOpenAddEditModal({
            isShown: true,
            type: "add",
            data: null,
          })
        }
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      {/* Modal */}
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={closeModal} // Clicking outside closes modal
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
          },
          content: {
            border: "none",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            maxWidth: "500px", // Prevents it from being too wide
            width: "90%", // Makes it responsive
            height: "auto",
            maxHeight: "75vh",
            margin: "auto",
            borderRadius: "12px",
            position: "relative",
            padding: "20px",
            overflow: "auto",
          },
        }}
        contentLabel="Add or Edit Note"
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-gray-800 transition-all"
          onClick={closeModal} // Now clicking this button closes the modal properly
        >
          ✖
        </button>

        {/* Add/Edit Note Component */}
        <AddEditNote
          type={openAddEditModal.type}
          data={openAddEditModal.data}
          onClose={()=>{
            setOpenAddEditModal({
              isShown: false,
              type: "add",
              data: null,
            });
          }}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
};

export default Home;