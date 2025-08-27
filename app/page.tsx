import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Project } from "@/components/project";
import Image from "next/image";

export default function Home() {
  return(
    <>
  <Navbar></Navbar>
  <Header/>
  <About/>
  <Project/>
  <Contact/>
  <Footer/>

  </>
    
  )
  
}
