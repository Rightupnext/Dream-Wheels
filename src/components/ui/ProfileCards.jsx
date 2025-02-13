"use client";

import { motion } from "framer-motion";


const profiles = [
  {
    name: "Jane Doe",
    description: "UI/UX Designer with a passion for creating intuitive and beautiful interfaces.",
    imageUrl: "",
  },
  {
    name: "John Smith",
    description: "Full-stack developer specializing in React and Node.js, building scalable web applications.",
    imageUrl: "",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ProfileCards() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover md:w-48"
                  src={profile.imageUrl}
                  alt={profile.name}
                  width={400}
                  height={400}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {profile.name}
                </div>
                <p className="mt-2 text-gray-500">{profile.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
