import { motion } from "framer-motion";
import campusLifeVideo from "../assets/campus-life.mp4";

const Infrastructure = () => {
  const facilities = [
    {
      title: "Central Library",
      img: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=2015&auto=format&fit=crop",
    },
    {
      title: "Advanced Research Labs",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop",
    },
    {
      title: "Sports Complex",
      img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Student Hostels",
      img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Auditorium",
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Cafeteria",
      img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      <div className="relative w-full overflow-hidden pt-24 bg-university-blue text-white text-center mb-12">
        {/* Background Video */}
        <div className="relative w-full h-[50vh] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={campusLifeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-university-blue/60 mix-blend-multiply"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 px-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-university-gold">
                State of the Art
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
                Campus Life
              </h1>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                Experience a vibrant community with world-class facilities
                designed for your holistic growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative h-80 rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-3xl font-bold mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-university-gold font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 flex items-center gap-2">
                    View Gallery &rarr;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
