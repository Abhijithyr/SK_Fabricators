import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Add your WhatsApp number here
  // Country code + phone number, without + or spaces
  const phone = "919886257136";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-[#20bd5a]"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}