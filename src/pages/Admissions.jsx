import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  User,
  Mail,
  Phone,
  Book,
  FileText,
  Clock,
  Send,
} from "lucide-react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    "Computer Science & Engineering",
    "Business Administration",
    "Mechanical Engineering",
    "Medical Sciences",
    "Psychology",
    "Fine Arts",
    "Civil Engineering",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.qualification.trim())
      newErrors.qualification = "Qualification is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        window.scrollTo(0, 0);
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[2rem] shadow-2xl max-w-lg text-center border border-gray-100"
        >
          <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-extrabold text-university-blue mb-4">
            Application Received!
          </h2>
          <p className="text-gray-500 mb-8 text-lg">
            Thank you for applying to KDC University. We have received your
            details and sent a confirmation email to{" "}
            <span className="font-bold text-university-blue">
              {formData.email}
            </span>
            .
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="px-10 py-4 bg-university-blue text-white rounded-xl font-bold hover:bg-university-maroon transition-colors shadow-lg"
          >
            Return to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      {/* Header */}
      <div className="relative bg-university-blue text-white pt-32 pb-24 text-center mb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-university-blue to-university-maroon opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

        <div className="relative z-10 px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-university-gold">
            Admissions 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Start Your Journey
          </h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Take the first step towards your future. Fill out the form below to
            register your interest or apply for a course.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          {/* Information Side */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-university-blue text-white p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-university-gold/20 rounded-full -ml-16 -mb-16 group-hover:scale-125 transition-transform duration-700"></div>

              <h3 className="text-2xl font-bold mb-6 relative z-10">
                Why KDC University?
              </h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Top 10 Ranked University",
                  "100% Placement Assistance",
                  "International Collaborations",
                  "Research-Oriented Curriculum",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white/20 p-1 rounded-full">
                      <CheckCircle size={14} className="text-university-gold" />
                    </div>
                    <span className="text-blue-50 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Need Help?
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                Contact our admissions office for guidance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-university-orange">
                    <Phone size={18} />
                  </div>
                  <span className="font-semibold">+1 (800) 123-4567</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 bg-gray-50 p-4 rounded-xl">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-university-orange">
                    <Mail size={18} />
                  </div>
                  <span className="font-semibold">admissions@kdc.edu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-university-gold/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>

              <h2 className="text-3xl font-bold text-university-blue mb-8 relative z-10">
                Student Application
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-university-gold focus:border-transparent outline-none transition-all font-medium ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-university-gold focus:border-transparent outline-none transition-all font-medium ${errors.email ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-university-gold focus:border-transparent outline-none transition-all font-medium ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                        placeholder="+1 234 567 890"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Course Selection */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">
                      Interested Course
                    </label>
                    <div className="relative">
                      <Book
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-university-gold focus:border-transparent outline-none transition-all appearance-none font-medium ${errors.course ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                      >
                        <option value="">Select a Course</option>
                        {courses.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.course && (
                      <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1">
                        <AlertCircle size={12} /> {errors.course}
                      </p>
                    )}
                  </div>
                </div>

                {/* Qualification */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">
                    Highest Qualification
                  </label>
                  <div className="relative">
                    <FileText
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <input
                      type="text"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl focus:ring-2 focus:ring-university-gold focus:border-transparent outline-none transition-all font-medium ${errors.qualification ? "border-red-500 bg-red-50" : "border-gray-200"}`}
                      placeholder="e.g. High School, Bachelors"
                    />
                  </div>
                  {errors.qualification && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1 ml-1">
                      <AlertCircle size={12} /> {errors.qualification}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wide ml-1">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-university-gold focus:border-transparent outline-none transition-all resize-none font-medium"
                    placeholder="Any specific queries..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-university-orange to-university-maroon text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Clock size={20} className="animate-spin" /> Processing...
                    </>
                  ) : (
                    <>
                      Submit Application <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
