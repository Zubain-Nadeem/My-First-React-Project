import Sol2Image1 from "../assets/Solution-two-images/image-1.png"
import Sol2Image2 from "../assets/Solution-two-images/image-2.png"
import Sol2Image3 from "../assets/Solution-two-images/image-3.png"
import Sol2Image4 from "../assets/Solution-two-images/image-4.png"
import Sol2Image5 from "../assets/Solution-two-images/image-5.png"
import Sol2Image6 from "../assets/Solution-two-images/image-6.png"
import Sol2Image7 from "../assets/Solution-two-images/image-7.png"
import Sol2Image8 from "../assets/Solution-two-images/image-8.png"
import Sol2Image9 from "../assets/Solution-two-images/image-9.png"
import Sol2Image10 from "../assets/Solution-two-images/image-10.png"

const Solution= () => {
  return (
    <div>
        <section className="w-[86%] mt-[3%] m-auto flex flex-col items center justify-center">
            <div className="border-5 border-green-600 w-[95%] p-1 mt-[1%] flex justify-center gap-1 m-auto">
                 <img className="w-[50%]" src={Sol2Image1} alt="image9" />
            <img className="w-[50%]" src={Sol2Image2} alt="image10" />
            </div>

           <div className="border-5 border-green-600 w-[95%] p-1 mt-[1%] flex justify-center gap-1 m-auto">
                 <img className="w-[50%]" src={Sol2Image3} alt="image9" />
            <img className="w-[50%]" src={Sol2Image4} alt="image10" />
            </div>

            <div className="border-5 border-green-600 w-[95%] p-1 mt-[1%] flex justify-center gap-1 m-auto">
                 <img className="w-[50%]" src={Sol2Image5} alt="image9" />
            <img className="w-[50%]" src={Sol2Image6} alt="image10" />
            </div>

            <div className="border-5 border-green-600 w-[95%] p-1 mt-[1%] flex justify-center gap-1 m-auto">
                 <img className="w-[50%]" src={Sol2Image7} alt="image9" />
            <img className="w-[50%]" src={Sol2Image8} alt="image10" />
            </div>

        <div className="border-5 border-green-600 w-[95%] p-1 mt-[1%] flex justify-center gap-1 m-auto">
                 <img className="w-[50%]" src={Sol2Image9} alt="image9" />
            <img className="w-[50%]" src={Sol2Image10} alt="image10" />
            </div>
        </section>
    </div>
  )
}

export default Solution
