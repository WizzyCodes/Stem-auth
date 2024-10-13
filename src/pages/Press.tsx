import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Press = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const texts = [
    {
      id: 1,
      title: "Innovate Educate Inspire",
      subtitle: "Join our community today.",
    },
    {
      id: 2,
      title: "Empowering the Next Generation.",
      subtitle: "Learn. Grow. Succeed.",
    },
    {
      id: 3,
      title: "Unlock Your Potential.",
      subtitle: "Discover new possibilities and achieve greatness.",
    },
    {
      id: 4,
      title: "Empowering Innovations",
      subtitle: "Transforming the future, one idea at a time.",
    },
    {
      id: 5,
      title: "Innovate. Create. Inspire.",
      subtitle: "Where creativity meets technology.",
    },
    {
      id: 6,
      title: "Breaking Boundaries",
      subtitle: "Pushing limits, achieving excellence.",
    },
    {
      id: 7,
      title: "Imagine. Build. Thrive.",
      subtitle: "Turning visions into reality.",
    },
    {
      id: 8,
      title: "Revolutionizing the Future",
      subtitle: "Through cutting-edge technology and innovation.",
    },
    {
      id: 9,
      title: "Elevate Your Experience",
      subtitle: "Enhancing live through innovative solutions.",
    },
    {
      id: 10,
      title: "Where Ideas Come Alive",
      subtitle: "Nurturing creativity, fostering growth.",
    },
    {
      id: 11,
      title: "Pioneering Progress",
      subtitle: "Leading the way to a brighter tomorrow.",
    },
    {
      id: 12,
      title: "Unleash Your Creativity",
      subtitle: "Where imagination knows no bounds.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBgIndex((currentBgIndex + 1) % texts.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentBgIndex]);

  const handleCircleClick = (index: any) => {
    setCurrentBgIndex(index);
  };

  return (
    <div
      className={`w-full h-full  justify-center items-center relative text-white mt-[100px] grid`}
    >
      <section className="absolute flex flex-col text-center top-0 left-0 right-0 bottom-0 mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={`h-full w-full  flex justify-center items-center   `}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-0  transform -translate-x-1/2 -translate-y-1/2 text-white "
          >
            <motion.h2
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
              className=" text-[20px] font-semibold mb-2 underline text-white "
            >
              {texts[currentBgIndex].title}
            </motion.h2>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-[50px] font-bold text-white flex-wrap w-[700px]"
            >
              {texts[currentBgIndex].subtitle}
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
      <div className="flex  space-x-3  text-white ">
        {texts.map((color, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer  border-black border mt-[180px] ${
              index === currentBgIndex ? "bg-white" : "bg-gray-600"
            }`}
            onClick={() => handleCircleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Press;
