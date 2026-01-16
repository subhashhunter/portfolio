import { assets, infoList } from "@/assets/assets"
import Image from "next/image"

export const About=()=>{
    return(
        <div id='about' className="px-[12%] py-12 w-full scroll-mt-20">
            <h4 className="text-center mb-2 text-lg">Introduction</h4>
            <h2 className="text-center text-5xl">About me</h2>
            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                {/* <div className="w-64 rounded-3xl sm:w-80 max-w-none">
                    <Image src={""} alt="user"className="w-full rounded-full"/>
                </div> */}
                <div>
                   <p>
                        👋 Hi! I'm Subhash — a self-driven full-stack developer with a focus on React, Next.js, Tailwind CSS, Node.js, and PostgreSQL.
                        <br /><br />
                        🚀 I’ve built several real-world apps, including a Paytm clone and a mystery-message application.
                        <br /><br />
                        🛠️ I’m constantly sharpening my skills and currently diving deeper into TypeScript, Prisma, and scalable backend architectures.
                        <br /><br />
                        🤖 I'm also exploring the world of Generative AI to stay ahead in modern tech trends.
                        </p>
                       <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {infoList.map(({ icon, title, description }, index) => (
                            <li  key={index} className="mb-4 border-[0.5px] border-gray-500 rounded-xl p-6 mt-5">
                            <Image src={icon} alt={title} className="mt-3 w-7 my-4"/>
                            <h3 className="font-semibold my-4 text-gray-700">{title}</h3>
                            <p className="text-gray-600 text-sm">{description}</p>
                            </li>
                        ))}
                        </ul>
                </div>
            </div>
        </div>
    )
}