import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import routeMap from "../assets/route_map.jpg";
import HeaderSlideshow from "../components/HeaderSlideshow";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Premium Header */}
      <div className="relative bg-university-blue text-white pt-32 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-university-blue to-university-maroon opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

        <div className="relative z-10 px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-university-gold">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Contact Us
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Have questions? We'd love to hear from you. Reach out to our
            admissions team or visit our campus.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-16 relative z-20 pb-20">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              text: "123 University Ave, Knowledge City, State, 10001",
              color: "bg-blue-50 text-university-blue",
            },
            {
              icon: Phone,
              title: "Call Us",
              text: "+1 (800) 123-4567\n+1 (800) 765-4321",
              color: "bg-orange-50 text-university-orange",
            },
            {
              icon: Mail,
              title: "Email Us",
              text: "info@kdc.edu\nadmissions@kdc.edu",
              color: "bg-green-50 text-green-600",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:translate-y-[-5px] transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div
                className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}
              >
                <item.icon size={30} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 whitespace-pre-line font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Custom Route Map */}
          <div className="lg:w-[45%] bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 p-2 relative group">
            <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative bg-gray-100">
              <img
                src={routeMap}
                alt="Route Map to KDC"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-university-blue shadow-lg border border-gray-200">
                📍 Route Map
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-[55%] bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-university-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-university-blue mb-2">
                Send us a Message
              </h3>
              <p className="text-gray-500 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {formStatus === "success" ? (
                <div className="h-96 flex flex-col items-center justify-center text-center bg-gray-50 rounded-2xl border-2 border-dashed border-green-200">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Send size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-500">
                    Thank you for reaching out. We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-8 text-university-blue font-bold px-6 py-2 rounded-full hover:bg-university-blue hover:text-white transition-all border border-university-blue"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wide">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-university-orange focus:border-transparent outline-none transition-all font-medium placeholder:text-gray-400"
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-university-orange focus:border-transparent outline-none transition-all font-medium placeholder:text-gray-400"
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-university-orange focus:border-transparent outline-none transition-all font-medium placeholder:text-gray-400"
                      required
                      placeholder="I'm interested in..."
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      rows="5"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-university-orange focus:border-transparent outline-none transition-all font-medium placeholder:text-gray-400 resize-none"
                      required
                      placeholder="Tell us more about your query..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full py-4 bg-gradient-to-r from-university-orange to-university-maroon text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Clock size={20} className="animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
