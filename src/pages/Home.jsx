import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Zap,
  Globe,
  Rocket,
  GraduationCap,
  Microscope,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "../assets/Medicine_web_banner.mp4";

const Home = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section - Immersive & Bold */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-university-blue/90 via-university-blue/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold tracking-widest uppercase mb-8 hover:bg-white/20 transition-all cursor-default">
              🚀 Admissions Open 2026-27
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight tracking-tight drop-shadow-lg">
              Shape Your Future at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-university-gold to-university-orange">
                KDC University
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
              Join a vibrant community of innovators, leaders, and
              change-makers. Experience world-class education where your
              potential knows no bounds.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/admissions"
                className="btn-primary text-lg px-10 py-4 flex items-center gap-3 hover-lift shadow-university-orange/50 shadow-lg"
              >
                Apply Now <ArrowRight size={22} />
              </Link>
              <Link
                to="/departments"
                className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white font-bold text-lg rounded-full hover:bg-white hover:text-university-blue transition-all flex items-center gap-2"
              >
                Explore Programs
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Modern Features Grid (Bento Style) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-university-blue mb-6">
              Why Choose KDC?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
              We provide more than just education; we provide a launchpad for
              your dreams with a holistic approach to learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[350px]">
            {/* Card 1: Campus Life (Large) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="md:col-span-2 row-span-1 rounded-[2rem] overflow-hidden relative group shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070"
                alt="Campus Life"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Vibrant Campus Life
                </h3>
                <p className="text-gray-300 text-lg">
                  Experience a diverse, inclusive community that feels like home
                  from day one.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Innovation (Tall) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="md:col-span-1 row-span-1 bg-university-blue rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Rocket size={150} />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Zap size={30} className="text-university-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Innovation Hub</h3>
                  <p className="text-blue-200 leading-relaxed">
                    Incubators and labs turning student ideas into reality.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Research (Tall) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="md:col-span-1 row-span-1 bg-gray-50 border border-gray-100 rounded-[2rem] p-8 flex flex-col justify-between shadow-lg group hover:border-university-orange/30 transition-all"
            >
              <div className="w-14 h-14 bg-orange-100 text-university-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Microscope size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-university-orange transition-colors">
                  Research First
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  State-of-the-art facilities driving global impact and
                  discovery.
                </p>
              </div>
              <Link
                to="/about"
                className="w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-university-orange group-hover:text-university-orange transition-all self-end"
              >
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            {/* Card 4: Global Network (Wide) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="md:col-span-2 row-span-1 bg-gradient-to-br from-university-maroon to-university-orange rounded-[2rem] p-10 flex flex-col justify-center text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute -right-20 -bottom-20 opacity-20 rotate-12">
                <Globe size={300} />
              </div>
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold mb-4">
                  Global Alumni Network
                </h3>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Join a powerful network of 50,000+ alumni working in top
                  Fortune 500 companies across the globe.
                </p>
                <Link
                  to="/departments"
                  className="inline-flex items-center gap-2 bg-white text-university-maroon px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  View Success Stories <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Card 5: Placement (Image) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="md:col-span-2 row-span-1 rounded-[2rem] overflow-hidden relative group shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
                alt="Placements"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-university-blue/80 opacity-90 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-8">
                <GraduationCap
                  size={60}
                  className="text-university-gold mb-6"
                />
                <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  98%
                </h3>
                <p className="text-xl text-blue-200 font-medium">
                  Placement Success Rate
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic News / Updates Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-university-orange font-bold tracking-widest uppercase text-sm">
                Happening Now
              </span>
              <h2 className="text-4xl font-extrabold text-university-blue mt-2">
                Latest at KDC
              </h2>
            </div>
            <Link
              to="/about"
              className="flex items-center gap-2 text-university-blue font-bold hover:text-university-orange transition-colors"
            >
              View All News <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "KDC Wins National Innovation Award",
                image:
                  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986",
                tag: "Achievement",
                date: "2 Days Ago",
              },
              {
                title: "Annual Sports Meet 2026 Announced",
                image:
                  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070",
                tag: "Campus Life",
                date: "1 Week Ago",
              },
              {
                title: "New AI Research Lab Inaugurated",
                image:
                  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070",
                tag: "Research",
                date: "2 Weeks Ago",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-university-blue shadow-sm">
                    {item.tag}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-400 text-sm mb-3 font-medium">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-bold text-university-blue mb-4 leading-snug group-hover:text-university-orange transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-university-maroon font-semibold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                    Read More <ArrowRight size={16} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient & Energy */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-university-blue via-university-blue to-university-maroon rounded-[3rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden hover-lift">
            {/* Decorative Canvas */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-university-orange/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-university-gold/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-extrabold mb-8 relative z-10 tracking-tight">
                Ready to Lead <br /> the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-university-gold to-university-orange">
                  Future?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10 font-medium opacity-90">
                Applications are now open for the upcoming academic session.
                Join the legacy of KDC.
              </p>
              <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <Link
                  to="/admissions"
                  className="px-12 py-5 bg-white text-university-blue font-bold text-xl rounded-full hover:bg-university-gold hover:text-university-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Apply Online
                </Link>
                <Link
                  to="/contact"
                  className="px-12 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-xl rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
