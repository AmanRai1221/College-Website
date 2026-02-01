import { motion } from "framer-motion";
import { BookOpen, Clock, Calendar, CheckCircle } from "lucide-react";
import academicsVideo from "../assets/academics.mp4";

const Courses = () => {
  const courses = [
    {
      type: "Undergraduate",
      title: "B.Tech in Computer Science",
      duration: "4 Years",
      fee: "$20,000 / Year",
      desc: "A comprehensive program covering algorithms, AI, and software engineering.",
    },
    {
      type: "Undergraduate",
      title: "B.Sc in Psychology",
      duration: "3 Years",
      fee: "$15,000 / Year",
      desc: "Understanding human behavior, cognitive processes, and mental health.",
    },
    {
      type: "Postgraduate",
      title: "MBA in Finance",
      duration: "2 Years",
      fee: "$25,000 / Year",
      desc: "Advanced financial management strategies for global markets.",
    },
    {
      type: "Postgraduate",
      title: "M.Sc in Biotechnology",
      duration: "2 Years",
      fee: "$18,000 / Year",
      desc: "Research-driven program focusing on genetics and bio-engineering.",
    },
    {
      type: "PhD",
      title: "PhD in Data Science",
      duration: "3-5 Years",
      fee: "Fully Funded",
      desc: "Doctoral research in big data, machine learning, and predictive analytics.",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="relative w-full overflow-hidden pt-24 bg-university-blue text-white text-center">
        {/* Background Video */}
        <div className="relative w-full h-[50vh] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={academicsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-university-blue/60 mix-blend-multiply"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 px-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-university-gold">
                World-Class Education
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                Academic Programs
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Explore our wide range of undergraduate, postgraduate, and
                doctoral degrees designed for the future.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group"
            >
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <span
                    className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${course.type === "PhD" ? "bg-university-maroon text-white" : "bg-blue-50 text-university-blue"}`}
                  >
                    {course.type}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-university-gold group-hover:text-university-blue transition-colors">
                    <BookOpen size={18} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-university-blue mb-4 leading-tight group-hover:text-university-orange transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">
                  {course.desc}
                </p>

                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <Clock size={18} className="text-university-gold" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                    <CheckCircle size={18} className="text-university-gold" />
                    <span>{course.fee}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50/50 border-t border-gray-100 text-center">
                <button className="text-university-maroon font-bold text-sm uppercase tracking-wider hover:tracking-widest transition-all w-full">
                  View Curriculum &rarr;
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
