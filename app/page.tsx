import Navbar from "@/components/layout/Navbar";
import MainLayout from "@/components/layout/MainLayout";

import Profile from "@/components/sections/Profile";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Publications from "@/components/sections/Publications";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Technologies from "@/components/sections/Technologies";

export default function Home() {

  return (

    <MainLayout
      top={
        <>
          <Navbar />
          <div className="mt-8">
            <Profile />
          </div>
        </>
      }
    >

      <div className="mt-8">

        <Education />
        <br />
        <Experience />
        <br />
        <Publications />
        <br />
        <Certifications />
         <br />
         <Projects />
         <br />
         <Technologies />

      </div>

    </MainLayout>

  );

}
