import { assets } from "@/assets/assets"
import Image from "next/image"

export const Footer=()=>{
    return(
        <div className="mt-20">
            <div className="text-center">
             
            
             <div className="mx-auto w-max flex items-center gap-2">
                <Image src={assets.mail_icon} alt="" className="w-6"/>
                subhash56190@gmail.com
             </div>
             </div>

            <div className="text-center sm:flex justify-between items-center  border-t border-gray-400
            mx-[10%] mt-12 py-6" >
             <p className="text-sm text-gray-500">
              © 2025 subhash. All rights reserved.
             </p>
             <ul className="flex items-center gap-6" >
                <li>
                    <a href="https://github.com/subhashhunter">
                    Github
                    </a>
                </li>
                <li >
                    <a href="https://www.linkedin.com/in/subhash-kumar-973b53293/">
                    Linkedin
                    </a>
                </li>
             </ul>
            </div>
        </div>
    )
}