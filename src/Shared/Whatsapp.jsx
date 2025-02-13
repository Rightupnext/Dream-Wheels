import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/9025760713" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 md:bottom-8 md:right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
    >
      <FaWhatsapp className="text-4xl md:text-3xl" />
    </a>
  );
};

export default WhatsApp;
