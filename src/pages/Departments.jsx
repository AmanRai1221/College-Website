import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Monitor,
  Heart,
  PenTool,
  Briefcase,
  Gavel,
  FileText,
} from "lucide-react";

import admissionsVideo from "../assets/admissions.mp4";

const Departments = () => {
  const [filter, setFilter] = useState("All");

  const departments = [
    {
      id: 1,
      name: "Computer Science",
      category: "Engineering",
      icon: Monitor,
      image:
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop",
      desc: "Leading the digital revolution with AI, Blockchain, and Cyber Security.",
    },
    {
      id: 2,
      name: "Medical Sciences",
      category: "Health",
      icon: Heart,
      image:
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop",
      desc: "Advancing healthcare through cutting-edge research and clinical practice.",
    },
    {
      id: 3,
      name: "Business School",
      category: "Management",
      icon: Briefcase,
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      desc: "Shaping future global leaders with industry-integrated management programs.",
    },
    {
      id: 4,
      name: "Civil Engineering",
      category: "Engineering",
      icon: Layers,
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      desc: "Building sustainable infrastructure for a better tomorrow.",
    },
    {
      id: 5,
      name: "Arts & Humanities",
      category: "Arts",
      icon: PenTool,
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
      desc: "Exploring human culture, history, and creative expression.",
    },
    {
      id: 6,
      name: "Law & Governance",
      category: "Law",
      icon: Gavel,
      image:
        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2012&auto=format&fit=crop",
      desc: "Upholding justice and understanding global legal frameworks.",
    },
  ];

  const categories = [
    "All",
    "Engineering",
    "Health",
    "Management",
    "Arts",
    "Law",
  ];

  const filteredDepts =
    filter === "All"
      ? departments
      : departments.filter((d) => d.category === filter);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
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
            <source src={admissionsVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-university-blue/60 mix-blend-multiply"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 px-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-university-gold">
                Academic Faculties
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                Our Departments
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Discover the diverse range of academic faculties where
                innovation meets tradition.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full font-bold text-sm tracking-wide transition-all duration-300 border-2 ${filter === cat ? "bg-university-blue border-university-blue text-white shadow-lg transform scale-105" : "bg-white border-gray-200 text-gray-500 hover:border-university-blue hover:text-university-blue"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredDepts.map((dept) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={dept.id}
              className="bg-white rounded-[2rem] overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-university-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl text-university-blue shadow-lg z-20 group-hover:rotate-12 transition-transform">
                  <dept.icon size={24} />
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-university-gold text-university-blue text-xs font-bold uppercase tracking-wider rounded-full">
                    {dept.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-university-blue mb-3 group-hover:text-university-orange transition-colors">
                  {dept.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed bg-transparent">
                  {dept.desc}
                </p>
                <button className="text-university-maroon font-bold text-sm uppercase tracking-wider border-b-2 border-university-maroon/20 pb-1 hover:border-university-maroon transition-all group-hover:translate-x-2 inline-flex items-center gap-2">
                  View Programs <span className="text-lg">&rarr;</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Departments;
