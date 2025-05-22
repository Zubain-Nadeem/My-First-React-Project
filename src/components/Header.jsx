
const Header = () => {
  return (
    <div>
      <header className="w-full bg-[#008D38] fixed top-0 ">
        <div className="flex items-center w-[90%] m-auto justify-between h-[64px] text-white">
        <h1 className=" text-2xl font-bold">Green Protocol</h1>
        
            <ul className="flex gap-5 text-lg ">
                <li><a href="#">Problem</a></li>
                <li><a href="#">Solution</a></li>
                <li><a href="#">Business Model</a></li>
                <li><a href="#">Profit Distribution</a></li>
            </ul>
    
        </div>
      </header>
    </div>
  )
}

export default Header

