import Image from "next/image"
import {assets} from "@/assets/assets"
export const Header=()=>{
    return(
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center
        gap-4">
            <div>
                <Image src={assets.profile_img} alt="" className="rounded-full w-32"/>
                
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-2 ">Hi! i am subhash  <Image src={assets.hand_icon} alt=""/></h3>
            <h1 className="text 3xl sm:text-6xl lg:text-[66px]">full stack web devloper</h1>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"  className="px-10 py-3 border rounded-full">Contact Me <Image src={assets.right_arrow_white} alt="" className="w-4"/></a>
                 <a href="/subhash_resume.pdf" download
                  className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                  >my resume <Image src={assets.download_icon} alt="" className="w-4"/></a>
            </div>
        </div>
    )
}