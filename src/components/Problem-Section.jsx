import problemImage from "../assets/Problem-section-images/problem-image.png";

const Problem = () => {
  return (
    <div>
      <section className=" w-[90%] m-auto my-[160px] h-[450px]">
        <h2 className="text-[50px] font-bold text-[#00AE47] border-b-4 border-[#84D1A6] pb-[10px] ">
          Problem
        </h2>
        <div className="flex w-full items-center mt-[10px] justify-center gap-5">
          <div className="w-[60%] flex items-center justify-center leading-[40px] ">
            <p className="text-[26px]">
              Major current environmental issues may include climate change,
              pollution, environmental degradation, and resource depletion. The
              conservation movement lobbies for protection of endangered species
              and protection of any ecologically valuable natural areas,
              genetically modified foods and global warming.
            </p>
          </div>

          <div className="w-[30%]  flex justify-center items center">
            <img className="h-[233p] w-[233px]" src={problemImage} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Problem;
