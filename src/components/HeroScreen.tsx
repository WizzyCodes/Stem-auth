import Press from "@/pages/Press";
import bg from "../assets/web_asset/bg.png";
import { motion } from "framer-motion";
// import globe from "../assets/web_asset/earth.png";
// import burret from "../assets/web_asset/burret.png";
// import test from "../assets/web_asset/testTube.png";
// import neuclus from "../assets/web_asset/neuclus.png";

const HeroScreen = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
        className="relative h-screen text-white w-full flex flex-col justify-center items-center overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative w-full h-full   bg-gray-900 flex flex-col">
          <Press />
          <p className="text-lg text-center text-white leading-loose  font-sans font-[700] flex-wrap mb-[40px] flex justify-center items-center w-[90%] h-full ml-10">
            The NextGeN Ajegunle Science competition is an initiative which aims
            at Empowering Ajegunle students in the area of STEM. The initiative
            was introduced for High school students to develop, ignite and chart
            a career path in the area of STEM education and drive them towards
            fully optimizing their potential to make Ajegunle a better place for
            us all. The Next Gen Initiative is a non-profit organization
            dedicated to promoting education and innovation among young minds.
            NextGeN is an annual search across high schools (public and private)
            in Ajegunle. It is introduced to chart the ideal career path and
            drive the student towards full optimization of their potentials and
            fulfilment of their dreams (either as an inventor or entrepreneur)
            with a key message of reviving up the interest of students, parents,
            teachers and other key stakeholders towards STEM education and its
            application in Ajegunle.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroScreen;
