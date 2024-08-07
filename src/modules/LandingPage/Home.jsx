import { useNavigate } from "react-router";
import image1 from "../../images/top-view-abstract-innovation-assortment.jpg";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen -mt-5 text-white bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image1})`,
      }}
    >
      <header className="p-2 text-center hero">
        <div className="hero-content">
          <h1 className="mb-4 text-4xl font-bold text-white hero-title md:text-5xl lg:text-6xl">
            WELCOME TO NOTERA NOTES
          </h1>
          <p className="mb-6 text-lg hero-text md:text-xl lg:text-4xl">
            Lets Create Some Notes together
          </p>
          <div className="flex flex-row items-center justify-center hero-buttons gap-x-6">
            <button
              type="button"
              onClick={() => navigate("/addNote")}
              className=" mt-4 w-[40%] smd:w-[20%] hover:before:bg-red rounded-md relative h-[50px] overflow-hidden bg-green-500 px-3 text-white shadow-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-green-500 hover:shadow-fade-black hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10 text-lg text-radios">
                Add Notess
              </span>
            </button>
            <button
              type="button"
              onClick={""}
              className=" mt-4 w-[40%] smd:w-[20%] hover:before:bg-red rounded-md relative h-[50px] overflow-hidden bg-green-500 px-3 text-white shadow-lg transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white before:transition-all before:duration-500 hover:text-green-500 hover:shadow-fade-black hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10 text-lg text-radios">
                Contact Us
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
