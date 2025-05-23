import image1 from "../assets/Example-image/arrow-image.png";
import image2 from "../assets/Example-image/mens-image.png";
import image3 from "../assets/Example-image/leaf-image.png";
import image4 from "../assets/Example-image/veg-image.png";
import image5 from "../assets/Example-image/profit-image.png";
import image6 from "../assets/Example-image/geti-image.png";
import image7 from "../assets/Example-image/coin-image.png";
import image8 from "../assets/Example-image/leaf2-image.png";
import image9 from "../assets/Example-image/nft-image.png";

const Example = () => {
  return (
    <div>
      <section className=" w-[90%] m-auto my-[160px] ">
        <h2 className="text-[50px] font-bold text-[#00AE47] border-b-4 border-[#84D1A6] pb-[10px] ">
          Example
        </h2>

        <div>
          <p className="text-[#00ae47] flex items-center justify-center gap-3 text-[20px] mt-[3%]">
            1 Greenhouse = <strong className="font-bold">100 NFT</strong>{" "}
            <img className="w-12" src={image1} alt="Arrwo image" />{" "}
            <strong className="font-bold">100 USD</strong> Price
          </p>

          <div className=" mt-[3%]">
            <div className="flex items-center justify-center">
              <img src={image2} alt="mens image" className="h-[160px]" />
              <div>
                <p className="text-center text-green-600 text-lg">Buy</p>
                <img className="h-[40px]" src={image1} alt="arrow image" />
              </div>
              <img src={image3} alt="Leaf-image" className="h-[160px]" />
              <div>
                <p className="text-center text-green-600 text-lg">Generate</p>
                <img className="h-[40px]" src={image1} alt="arrow image" />
              </div>
              <img className="h-[160px]" src={image4} alt="vegetable image" />
            </div>
          </div>

          <div className=" flex justify-center mt-[3%] ">
            <div>
              <img className="h-[160px]" src={image5} alt="profit arrow" />
            </div>
            <div className="mt-[4%]">
              <img className="h-[160px]" src={image7} alt="coin image" />
            </div>
            <div>
              <img className="h-[160px]" src={image6} alt="get arrow" />
            </div>
          </div>
        </div>

        <div className="mt-[10%] flex justify-center ">
          <div className="w-[50%] h-[420px] flex flex-col justify-center items-center bg-[#DCDCDC] gap-4">
            <img className="h-[100px]" src={image8} alt="leaf image" />
            <h2 className="text-[#00ae47] text-[30px]">
              Buy NFT to help <br />
              the environment <br /> and get passive <br />
              income
            </h2>
          </div>

          <div className="w-[50%] h-[420px] flex flex-col justify-center items-center bg-[#00AE47] gap-4">
            <img className="h-[100px]" src={image9} alt="leaf image" />
            <h2 className="text-[#fff] text-[30px]">
              Buy NFT to help <br />
              the environment <br /> and get passive <br />
              income
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Example;
