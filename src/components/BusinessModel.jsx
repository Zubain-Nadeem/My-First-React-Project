import busImage1 from "../assets/Business-Model-images/image-1.png";
import busImage2 from "../assets/Business-Model-images/image-2.png";
import busImage3 from "../assets/Business-Model-images/image-3.png";
import busImage4 from "../assets/Business-Model-images/image-4.png";
import busImage5 from "../assets/Business-Model-images/image-5.png";
import busImage6 from "../assets/Business-Model-images/image-6.png";
import busImage7 from "../assets/Business-Model-images/image-7.png";
import busImage8 from "../assets/Business-Model-images/image-8.png";
import busImage9 from "../assets/Business-Model-images/image-9.png";
import busImage10 from "../assets/Business-Model-images/image-10.png";
import busImage11 from "../assets/Business-Model-images/image-11.png";

export default function BusinessModel() {
  return (
    <div>
      <section className=" w-[90%] m-auto my-[160px] ">
        <h2 className="text-[50px] font-bold text-[#00AE47] border-b-4 border-[#84D1A6] pb-[10px] ">
          BusinessModel
        </h2>
        <p className="text-green-600 mt-6 text-[24px] text-center">
          Crowdy-funding ownership of{" "}
        </p>

        <div className=" flex items-center justify-center gap-20 mt-2 ">
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

        <div className=" mt-[150px]">
          <p className="text-center text-[24px] text-green-600">
            Buy (as <span className="font-bold">NFT</span> ) and get the profit
          </p>

          <div className=" flex items-center justify-center gap-20 mt-[6%] ">
            <div className="text-center flex flex-col gap-4 items-center">
              <h2 className="font-bold text-[22px] text-green-600">Trash</h2>
              <img
                className="w-[200px] h-[200px]"
                src={busImage6}
                alt="Business image"
              />
              <p className="text-green-700 text-xl ">when recycled</p>
            </div>
            <div className="text-center flex flex-col gap-4 items-center">
              <h2 className="font-bold text-[22px] text-green-600">
                Green House
              </h2>
              <img
                className="w-[200px] h-[200px]"
                src={busImage7}
                alt="Business image"
              />
              <p className="text-green-700 text-xl">
                Fruits, vegetable and
                <br />
                energy sale
              </p>
            </div>
            <div className="text-center flex flex-col gap-4 items-center">
              <h2 className="font-bold text-[22px] text-green-600">
                Solar Station
              </h2>
              <img
                className="w-[200px] h-[200px]"
                src={busImage8}
                alt="Business image"
              />
              <p className="text-green-700 text-xl">
                When used for <br/> Charging
              </p>
            </div>
          </div>

            
          <div className=" flex items-center justify-center gap-20 mt-[6%] ">
            <div className="text-center flex flex-col gap-4 items-center">
              <h2 className="font-bold text-[22px] text-green-600">Electrical Mobility</h2>
              <img
                className="w-[200px] h-[200px]"
                src={busImage9}
                alt="Business image"
              />
              <p className="text-green-700 text-xl ">on the rental</p>

            </div>
            <div className="text-center flex flex-col gap-4 items-center">
              <h2 className="font-bold text-[22px] text-green-600">
                Green Energy</h2>
              <img
                className="w-[200px] h-[200px]"
                src={busImage10}
                alt="Business image"
              />
              <p className="text-green-700 text-xl">
                energy sale  </p>
            </div>
            <div className="text-center flex flex-col gap-4 items-center">
              <h2 className="font-bold text-[22px] text-green-600">
                Mosquito System
              </h2>
              <img
                className="w-[200px] h-[200px]"
                src={busImage11}
                alt="Business image"
              />
              <p className="text-green-700 text-xl">
               Refill products sale
              </p>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
