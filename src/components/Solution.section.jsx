import SolImage1 from "../assets/Solution-section-images/image-1.png";
import SolImage2 from "../assets/Solution-section-images/image-2.png";
import SolImage3 from "../assets/Solution-section-images/image-3.png";
import SolImage4 from "../assets/Solution-section-images/image-4.png";
import SolImage5 from "../assets/Solution-section-images/image-5.png";
import SolImage6 from "../assets/Solution-section-images/image-6.png";
import SolImage7 from "../assets/Solution-section-images/image-7.png";
import SolImage8 from "../assets/Solution-section-images/image-8.png";

const Solution = () => {
  return (
    <div>
      <section className=" w-[90%] m-auto">
        <h2 className="text-[50px] font-bold text-[#00AE47] border-b-4 border-[#84D1A6] pb-[10px] ">
          Solution
        </h2>
        <div className=" w-[95%] m-auto flex mt-[3%]">

          <div className=" w-[25%] h-[350px] bg-[#009F32] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage1}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Green <br /> Energy{" "}
            </p>
          </div>

          <div className=" w-[25%] h-[350px] bg-[#00BF54] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage2}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Automated <br /> agricolture{" "}
            </p>
          </div>

          <div className=" w-[25%] h-[350px] bg-[#009F32] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage3}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Depuration
              <br /> rain water
            </p>
          </div>

          <div className="w-[25%] h-[350px] bg-[#00BF54] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage4}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Mosquito
              <br /> Prevention
            </p>
          </div>
        </div>

        <div className=" w-[95%] m-auto flex">

          <div className=" w-[25%] h-[350px] bg-[#00BF54] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage5}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Green <br /> Energy{" "}
            </p>
          </div>

          <div className=" w-[25%] h-[350px] bg-[#009F32] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage6}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Automated <br /> agricolture{" "}
            </p>
          </div>

          <div className=" w-[25%] h-[350px] bg-[#00BF54] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage7}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Depuration
              <br /> rain water
            </p>
          </div>

          <div className="w-[25%] h-[350px] bg-[#009F32] flex justify-center items-center flex-col gap-6">
            <img
              src={SolImage8}
              alt="solution image 1"
              className="w-[140px] h-[140px]"
            />
            <p className="text-2xl text-white font-bold">
              Mosquito
              <br /> Prevention
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
