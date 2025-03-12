import React from "react";
import { motion } from "framer-motion";

const CourseOverview = () => {
  const courses = [
    {
      title: "Web Development Mastery",
      description: "Build dynamic websites and web applications from scratch.",
      image: "https://static.vecteezy.com/system/resources/previews/011/431/456/original/e-learning-online-classes-and-webinars-remote-it-studying-web-development-courses-web-development-programming-top-online-coding-courses-concept-flat-modern-illustration-vector.jpg",
      link: "https://www.wscubetech.com/full-stack-developer-course",
    },
    {
      title: "Data Analytics Pro",
      description: "Learn to analyze data and make data-driven decisions. and think like a pro",
      image: "https://static.vecteezy.com/system/resources/previews/000/545/484/original/data-analysis-vector.jpg",
      link: "https://www.wscubetech.com/data-analytics-course",
    },
    {
      title: "Digital Marketing Essentials",
      description: "Master the art of online marketing and grow your brand.",
      image: "https://cdn2.vectorstock.com/i/1000x1000/77/56/digital-marketing-concept-for-web-banner-vector-27937756.jpg",
      link: "https://www.wscubetech.com/marketing",
    },
    {
      title: "App Development Bootcamp",
      description: "Create stunning mobile applications for iOS and Android.",
      image: "https://static.vecteezy.com/system/resources/previews/001/993/379/large_2x/app-development-concept-illustration-free-vector.jpg",
      link: "https://www.wscubetech.com/mobile-app-development-course",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold text-white mb-12"
        >
          Explore Our Courses
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-40">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <a
                  href={course.link}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg block w-full text-center transition-colors duration-300"
                >
                  Start Learning
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
