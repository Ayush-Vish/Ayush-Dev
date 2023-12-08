import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/Sectiondivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 " >
        <Intro/>
        <SectionDivider/>
        <About/>
    </main>
  )
}
