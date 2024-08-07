const AddNotesForm = () => {
  let submitForm = () => {
    console.log("Form submitted");
  };
  return (
    <form className="flex flex-col h-full gap-y-8 w-[40%] px-12 pb-12 pt-20 bg-white shadow-lg rounded-xl">
      <input
        type="text"
        name="title"
        id="title"
        className="px-4 py-5 text-sm transition-all duration-500 ease-in-out border-2 border-gray-400 outline-none rounded-xl placeholder:text-gray-400 font-radios focus:placeholder:text-green-500 focus:placeholder:-translate-y-4 placeholder:transition-transform placeholder:transition-color placeholder:duration-500 focus:border-green-500"
        placeholder="Add notes title"
      />

      <input
        type="text"
        name="tag"
        id="tag"
        className="px-4 py-5 text-sm transition-all duration-500 ease-in-out border-2 border-gray-400 outline-none rounded-xl placeholder:text-gray-400 font-radios focus:placeholder:text-green-500 focus:placeholder:-translate-y-4 placeholder:transition-transform placeholder:transition-color placeholder:duration-500 focus:border-green-500"
        placeholder="Add notes tag"
      />
      <textarea
        name="description"
        id="description"
        className="h-auto px-4 py-5 text-sm transition-all duration-500 ease-in-out border-2 border-gray-400 outline-none rounded-xl placeholder:text-gray-400 font-radios focus:placeholder:text-green-500 focus:placeholder:-translate-y-4 placeholder:transition-transform placeholder:transition-color placeholder:duration-500 focus:border-green-500"
        placeholder="Add notes description"
      ></textarea>
      <button
        type="button"
        className="px-10 py-3 mx-auto text-lg text-white transition-all duration-300 bg-green-500 rounded-lg shadow-lg font-radios w-max hover:bg-green-700"
        onClick={submitForm}
      >
        Add Notes
      </button>
    </form>
  );
};

export default AddNotesForm;
