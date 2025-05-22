import busImage1 from "../assets/Business-Model-images/image-1.png";
import busImage2 from "../assets/Business-Model-images/image-2.png";
import busImage3 from "../assets/Business-Model-images/image-3.png";
import busImage4 from "../assets/Business-Model-images/image-4.png";
import busImage5 from "../assets/Business-Model-images/image-5.png";

export default function BusinessModel() {
  return (
    <div>
      <section className=" w-[90%] m-auto my-[160px] ">
        <h2 className="text-[50px] font-bold text-[#00AE47] border-b-4 border-[#84D1A6] pb-[10px] ">
          BusinessModel
        </h2>
        <p className="text-green-600 mt-6 text-2xl text-center">
          Crowdy-funding ownership of{" "}
        </p>

        <div className=" flex items-center justify-center gap-20 ">
          <div className="text-center flex flex-col gap-4 items-center">
            <img
              className="w-[200px] h-[200px]"
              src={busImage1}
              alt="Business image"
            />
            <p className="text-green-700 text-xl ">
              Fruits and Vegetable <br />
              Sale Out
            </p>
          </div>
          <div className="text-center flex flex-col gap-4 items-center">
            <img
              className="w-[200px] h-[200px]"
              src={busImage2}
              alt="Business image"
            />
            <p className="text-green-700 text-xl">
              Electrical Distribution
              <br />
              Profit
            </p>
          </div>
          <div className="text-center flex flex-col gap-4 items-center">
            <img
              className="w-[200px] h-[200px]"
              src={busImage3}
              alt="Business image"
            />
            <p className="text-green-700 text-xl">Plastic Recycling </p>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-center gap-20 ">
          <div className="text-center flex flex-col gap-4 items-center">
            <img
              className="w-[200px] h-[200px]"
              src={busImage4}
              alt="Business image"
            />
            <p className="text-green-700 text-xl ">
              Electrical Mobility <br />
              Rental
            </p>
          </div>
          <div className="text-center flex flex-col gap-4 items-center">
            <img
              className="w-[200px] h-[200px]"
              src={busImage5}
              alt="Business image"
            />
            <p className="text-green-700 text-xl">Mosquito System</p>
          </div>
        </div>
      </section>
    </div>
  );
}
