import image1 from "../../images/high-angle-sticky-notes-with-colored-pencils.jpg";
import image2 from "../../images/top-view-desk-top-with-notebook-scissors.jpg";
const AllNotes = () => {
  return (
    <div className="flex flex-col gap-y-6 justify-center items-center w-[80%]">
      <div className="flex flex-row gap-x-4 p-6 w-[90%] bg-white shadow-lg rounded-lg">
        <img
          src={image1}
          alt="..."
          className="object-cover w-[30%] shadow-lg rounded-xl"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl text-green-500 font-radios ">
              Morning Routine
            </h1>
            <h1 className="px-4 py-2 text-[14px] text-white bg-green-500 rounded-lg font-radios">
              Tag:
              <span className="ml-1 text-sm text-white font-radios">
                Important
              </span>
            </h1>
          </div>
          <p className="text-sm font-radios">
            Start your morning with a refreshing glass of water to hydrate your
            body. Spend a few minutes stretching or doing yoga to wake up your
            muscles and improve circulation. Enjoy a nutritious breakfast that
            includes a mix of protein, healthy fats, and whole grains. Take some
            time to plan your day, setting clear goals and priorities. Finally,
            engage in a mindfulness practice, such as meditation or journaling,
            to set a positive tone for the day ahead.
          </p>
          <div className="flex flex-row gap-x-3">
            <button className="px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-lg hover:bg-red-700">
              Delete
            </button>
            <button className="px-4 py-2 text-white transition-all duration-300 ease-in-out bg-green-500 rounded-lg hover:bg-green-700">
              Update
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-x-4 p-6 w-[90%] bg-white shadow-lg rounded-lg">
        <img
          src={image2}
          alt="..."
          className="object-cover w-[30%] shadow-lg rounded-xl"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row justify-between ">
            <h1 className="text-xl text-green-500 font-radios ">
              Evening Routine
            </h1>
            <h1 className="px-s4 py-2 text-[14px] text-white bg-green-500 rounded-lg font-radios">
              Tag:
              <span className="ml-1 text-sm text-white font-radios">
                Personal
              </span>
            </h1>
          </div>
          <p className="text-sm font-radios">
            Start your Evening with a refreshing glass of water to hydrate your
            body. Spend a few minutes stretching or doing yoga to wake up your
            muscles and improve circulation. Enjoy a nutritious breakfast that
            includes a mix of protein, healthy fats, and whole grains. Take some
            time to plan your day, setting clear goals and priorities. Finally,
            engage in a mindfulness practice, such as meditation or journaling,
            to set a positive tone for the day ahead.
          </p>
          <div className="flex flex-row gap-x-3">
            <button className="px-4 py-2 text-white transition-all duration-300 ease-in-out bg-red-600 rounded-lg hover:bg-red-700 font-radios">
              Delete
            </button>
            <button className="px-4 py-2 text-white transition-all duration-300 ease-in-out bg-green-500 rounded-lg hover:bg-green-700 font-radios">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotes;
