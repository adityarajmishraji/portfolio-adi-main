import React, { useState, useEffect, useCallback } from "react";
import person1 from "../assets/images/amit.jpg";
import person2 from "../assets/images/abhi.png";
import person3 from "../assets/images/shubham.jpeg";
import person4 from "../assets/images/veeru.jpeg";

// Inside the Testimonial component:
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: "Amit Mishra",
      role: "MERN-Stack Devloper, Script India InfoTech",
      text: "Aditya perfectly understood our need for an HR platform and developed a website that met those requirements. He streamlined our processes, saving time and making performance tracking much easier.",
      image: person1,
    },
    {
      name: "Abhimanu Chaudhary",
      role: "Personal Manager, Vardhman Enterprise",
      text: "The platform Aditya developed has made our day-to-day operations so much easier. He understood our needs and designed the website accordingly, which has significantly boosted our productivity.",
      image: person2,
    },
    {
      name: "Shubham Chaudhary",
      role: "Technology Officer, DevSolutions",
      text: "The platform Aditya created helped us streamline our internal operations. He provided a solution tailored to our technical needs, making our processes more efficient.",
      image: person3,
    },
    {
      name: "Vipul Dubey",
      role: "CEO, Alpha Graphics",
      text: "Aditya gave us a platform that streamlined our business operations. He understood our specific needs and developed a custom solution that helps us manage time and costs effectively.",
      image: person4,
    },
  ];

  // Wrap handleNext in useCallback
  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }, [isAnimating, testimonials.length]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [isAnimating, testimonials.length]);

  // Automatic slide every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) handleNext();
    }, 7000); // Change testimonial every 7 seconds

    return () => clearInterval(interval); // Cleanup interval when component is unmounted
  }, [isHovered, handleNext]); // handleNext is stable now

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500); // Wait for the animation duration to finish
    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <div className="bg-black text-white px-10 md:px-32 py-10 w-full">
      <div className="container mx-auto py-8">
        <h4 className="text-gray-400 uppercase">What my client say</h4>
        <h1 className="md:text-5xl text-2xl mb-12 md:mb-6 text-left font-[amspiro2] tracking-wider font-extrabold">
          Testimonials.
        </h1>

        <div className="flex justify-end md:justify-end relative md:right-60 mb-4">
          <button
            onClick={handlePrev}
            className="bg-[#1B1535] text-white px-4 py-2 rounded-full mr-2 border border-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-[#1B1535] text-white px-4 py-2 rounded-full border border-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div
          className="bg-[#1B1535] text-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto transition-opacity duration-500 ease-in-out"
          style={{
            opacity: isAnimating ? 0 : 1,
            transition: "opacity 0.5s ease-in-out", // Smooth fade transition
          }}
          onMouseEnter={() => setIsHovered(true)} // Pause auto-slide on hover
          onMouseLeave={() => setIsHovered(false)} // Resume auto-slide on leave
        >
          <div className="flex items-center mb-4">
            <div className="w-20 h-20 flex items-center justify-center text-lg font-bold">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <p className="italic text-lg mb-4">
            "{testimonials[currentIndex].text}"
          </p>
          <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
          <p className="">{testimonials[currentIndex].role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
