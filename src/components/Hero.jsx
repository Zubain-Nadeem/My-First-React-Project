import image1 from "../assets/Hero-Section-images/hero-image-1.png";
import image2 from "../assets/Hero-Section-images/hero-image-2.png";
import image3 from "../assets/Hero-Section-images/hero-image-3.png";
import dotimage from "../assets/Hero-Section-images/dot-image.png";

const Hero = () => {
  return (
    <div>
      <section className="h-[88vh] w-full bg-[#00AE47] flex justify-center items-center ">
        <div>
          <h2 className=" mb-[70px] text-[50px] text-center font-bold text-white">
            Green Protocol
          </h2>
          <div className="flex items-center gap-5">
            <img
              className="rounded-[100px] shadow-[0_0_10px_#007000] h-[160px] w-[160px]"
              src={image1}
              alt=""
            />
            <img className="w-[100px]" src={dotimage} alt="" />
            <img  className="rounded-[100px] shadow-[0_0_10px_#007000] h-[160px] w-[160px]" src={image2} alt="" />
            <img className="w-[100px]" src={dotimage} alt="" />
            <img className="rounded-[100px] shadow-[0_0_10px_#007000] h-[160px] w-[160px]" src={image3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
