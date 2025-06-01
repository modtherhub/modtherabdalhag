import { ReactTyped } from "react-typed";
import Info from '/home/modther/Project/modtherabdalhag/src/components/Info.jsx'

function Card (){
    return(
    <div className="relative max-w-md mx-auto bg-[#0F1414] w-full lg:max-w-140 sm:max-w-120 border-[#063e3d] border-2 rounded-xl shadow-md  z-10 pointer-events-auto no-custom-cursor">
        {/* Tab Notch */}
        <div className="font-serif absolute -top-8 left-4 px-4 py-1 bg-[#3c4141] rounded-t-md  text-[#E2DFD2] border border-gray-500 border-b-0">
          Info.js
        </div>

        {/* Card Container */}
        <div className="border border-[#063e3d] rounded-lg shadow-md">
        
            <div className="p-4 break-words">
                <div className="flex justify-end items-center space-x-4 p-5 ">
                    <div className="w-3 h-3 bg-red-500 rounded-full   hover:scale-150 transition"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full hover:scale-150 transition"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full  hover:scale-150 transition"></div>
                </div>
        
                <Info/>
            
        
            </div>
        </div>

      {/* Bottom Right Tab Notch */}
        <div className="absolute right-4 px-2 py-1 pt-2 bg-green-500/60  rounded-b-md text-sm text-green-400 border-1 border-green-400 border-t-0"
        >
            <p className="flex items-center space-x-1">
                <span className="relative flex ">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-200 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-semibold text-sm">Available</span>
            </p>
        </div>
    </div>
    )
}
export default Card