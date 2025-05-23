import Image1 from "../assets/Profit-image/image1.png"
import Image2 from "../assets/Profit-image/image-2.png"
import Image3 from "../assets/Profit-image/image-3.png"

const Profit = () => {
  return (
    <div>
   <section className=" w-[90%] m-auto my-[160px] h-[450px]">
        <h2 className="text-[50px] font-bold text-[#00AE47] border-b-4 border-[#84D1A6] pb-[10px] ">
          Profit Distribution
        </h2>

        <div className=" mt-[3%] flex justify-center items-center">
             <div className="flex flex-col justify-center items-center gap-4 w-[25%] h-[350px] bg-[#009F32]">
                <img className="h-[140px]" src={Image1} alt=" men image" />
                <p className=" text-[#fff] text-2xl">Owner</p>
                <p className="font-bold text-[#fff] text-2xl">70%</p>
                </div>   

                <div className="flex flex-col justify-center items-center gap-4 w-[25%] h-[350px] bg-[#00BF54]">
                <img className="h-[140px]" src={Image2} alt=" company image" />
                <p className=" text-[#fff] text-2xl">Company</p>
                <p className="font-bold text-[#fff] text-2xl">25%</p>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 w-[25%] h-[350px] bg-[#009F32]">
                <img className="h-[140px]" src={Image3} alt=" Charity image" />
                <p className=" text-[#fff] text-2xl">Charity</p>
                <p className="font-bold text-[#fff] text-2xl">5%</p>
                </div>
        </div>
    </section>
    </div>
  )
}

export default Profit
