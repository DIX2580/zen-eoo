import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Slider from "@/components/main/Slider";
import Ourprojects from "@/components/main/Ourprojects"


export default function Home()
 {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col ">
        <Hero />
        <Skills />
        <Slider/>
        <Ourprojects/>

        <Projects />
        <Encryption />


        
      </div>
    </main>
  );
}
