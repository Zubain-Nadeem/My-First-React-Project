import image1 from "../assets/Hero-Section-images/hero-image-1.png";
import image2 from "../assets/Hero-Section-images/hero-image-2.png";
import image3 from "../assets/Hero-Section-images/hero-image-3.png";
import dotimage from "../assets/Hero-Section-images/dot-image.png";

const Footer = () => {
  return (

      <div className="bg-[#00ae47]">
        <section className="h-[88vh] gap-6 flex justify-center items-center hero-container">
            <div>
                <div className="flex items-center">
                    <img className="h-[160px] border border-[#00ae47]" src={image1} alt="Hero Image 1" id="hero-images"/>
                    <img className="w-20 dashes" src={dotimage} alt="dashes" />
                    <img className="h-[160px] border border-[#00ae47]" src={image2} alt="Hero Image 2" id="hero-images"/>
                    <img className="w-20 dashes" src={dotimage} alt="dashes" />
                    <img className="h-[160px] border border-[#00ae47]" src={image3 } alt="Hero Image 3" id="hero-images"/>
                </div>
                <h2 className="text-center text-[50px] font-bold text-white mb-[70px] mt-[70px] hero-heading">Thank You</h2>
            </div>
        </section>
    </div>
   
  )
}

export default Footer
