'use client'
import { useState } from "react";

export const Contact=()=>{
    const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85d7ac40-49ea-43da-a666-7efe53c1f5e3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
        const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
        <div id='contact' className="w-full py-10 scroll-mt-20 px-[12%] 
        bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]">
            <h4 className="text-center mb-2 text-lg">
                Contact with me
            </h4>
            <h2 className="text-5xl text-center">
                Get in touch
            </h2>
            <p className="text-center max-w-3xl mx-auto mt-5 mb-12">
                I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out using the form below — I'd love to connect!
            </p>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-auto gap-6 mt-6 mb-10">
                    <input type="text" placeholder="enter your name" className="
                    flex-1 p-3 border-[0.5px] outline-none border-gray-400 rounded-md bg-white" name="name" />
                    <input type="text" placeholder="enter your email" 
                    className="
                    flex-1 p-3 border-[0.5px] outline-none border-gray-400 rounded-md bg-white" name="email" />
                </div>
                    <textarea rows={6} placeholder="enter your message" name="message"
                    className="
                    w-full p-4 border-[0.5px] outline-none border-gray-400 rounded-md bg-white mb-6" ></textarea>
                    <button type="submit" className="px-8 py-3 w-max flex items-center justify-between 
                    gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500">
                        Submit Now
                    </button>
                <p className="mt-4">{result}</p>
            </form>
        </div>
    )
}