import Education from "./_components/Education";
import PersonalDetails from "./_components/PersonalDetails";
import ProjectLinks from "./_components/ProjectLinks";
import WorkExperience from "./_components/WorkExperience";
import AboutMe from "./_components/AboutMe";
import PersonalInfo from "./_components/PersonalInfo";

const Home = () => {
  return (
    <section className="bg-sky-100 flex flex-wrap">
      <div className="w-full lg:w-2/3 block">
        <PersonalInfo />
        <AboutMe />
        <WorkExperience />
        <Education />
      </div>
      <div className="w-full lg:w-1/3 sm:w-full">
        <ProjectLinks />
        <PersonalDetails />
      </div>
    </section>
  );
};

export default Home;
