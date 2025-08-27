import { workData } from "@/assets/assets"

export const Project=()=>{
    return(
        <div className="w-full py-10 scroll-mt-20 px-[12%]">
            <h4 className="text-center mb-2 text-lg">
                My portfolio
            </h4>
            <h2 className="text-5xl text-center">
                My projects
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-12">
                Welcome to my full stack portfolio! Explore a collection of projects
                showcasing my expertise in full-stack devlopment
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5">
      {workData.map((work, index) => (
      <div key={index} className="project-card bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
        <img
          src={work.bgImage}
          alt={work.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="text-xl font-bold mt-2">{work.title}</h3>
        <p className="text-gray-600 mb-2">{work.description}</p>

        <a
          href={work.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline font-medium"
        >
          🔗 View Project
        </a>
      </div>
    ))}

</div>
        </div>
    )
}