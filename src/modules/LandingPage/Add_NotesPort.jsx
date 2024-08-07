import image1 from "../../images/workplace-green-desk-with-office-tools.jpg";
import AddNotesForm from "../FormsComp/AddNotesForm";
import AllNotes from "../NotesComp/AllNotes";
const Add_NotesPort = () => {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-auto pt-16 bg-center bg-cover gap-y-8"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`,
      }}
    >
      <h1 className="p-4 text-xl text-center text-white bg-green-500 shadow-lg w-max rounded-xl font-radios">
        Add-Notes Form
      </h1>
      <AddNotesForm />
      <h1 className="px-8 py-4 text-2xl text-center text-white bg-green-500 shadow-lg w-max rounded-xl font-radios">
        All Notes
      </h1>
      <AllNotes />
    </div>
  );
};

export default Add_NotesPort;
