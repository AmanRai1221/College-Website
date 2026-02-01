import { motion } from "framer-motion";
import { Target, Eye, Award, Globe } from "lucide-react";
import researchVideo from "../assets/research.mp4";

const About = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Page Header */}
      <section className="relative w-full overflow-hidden pt-24 bg-university-blue">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={researchVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-university-blue/60 mix-blend-multiply"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 text-center px-6">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-5xl md:text-8xl font-extrabold text-white mb-6 tracking-tight"
              >
                About KDC
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed"
              >
                Cultivating knowledge, character, and leadership since 1995.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Introduction */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <span className="text-university-orange font-bold uppercase tracking-widest text-sm mb-2 block">
                Our History
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-university-blue mb-8 leading-tight">
                A Legacy of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-university-orange to-university-gold">
                  Excellence
                </span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                KDC University was established with a singular focus: to bridge
                the gap between academic theory and practical application. Over
                the last three decades, we have grown from a small college into
                a global university, recognized for our research output and
                alumni success.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We believe in education that transforms not just the individual,
                but society at large. Our campus is a melting pot of cultures,
                ideas, and innovations.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute top-0 right-0 w-full h-full bg-gray-100 rounded-[2.5rem] rotate-3 transform translate-x-4 translate-y-4 -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                alt="University History"
                className="rounded-[2.5rem] shadow-2xl relative z-10 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide world-class education that fosters critical thinking, creativity, and ethical leadership, preparing students to tackle global challenges.",
                color: "bg-blue-50 text-university-blue",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be a globally recognized center of excellence in education and research, driving innovation and sustainable development for a better future.",
                color: "bg-orange-50 text-university-orange",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-gray-100"
              >
                <div
                  className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mb-8`}
                >
                  <item.icon size={40} />
                </div>
                <h3 className="text-3xl font-bold text-university-blue mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-university-blue to-university-maroon"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-university-gold rounded-[2rem] rotate-6 opacity-30 blur-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                alt="Chancellor"
                className="rounded-[2rem] shadow-2xl border-4 border-white/20 relative z-10"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <div className="mb-8 opacity-50">
              <QuoteIcon />
            </div>
            <h3 className="text-3xl md:text-5xl font-light mb-8 leading-snug italic">
              "Education is not just about acquiring degrees, but about shaping
              character and building the capacity to contribute meaningfully to
              the world. At KDC, we nurture the leaders of tomorrow."
            </h3>
            <div>
              <h4 className="text-2xl font-bold text-university-gold mb-1">
                Dr. Robert Sterling
              </h4>
              <p className="text-blue-200">Chancellor, KDC University</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const QuoteIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-university-gold opacity-50"
  >
    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z" />
  </svg>
);

export default About;
