export default function WhatsAppButton() {
  const phone = "919999999999";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#4e8a74] text-sm font-black text-white shadow-lg transition hover:scale-105"
    >
      WA
    </a>
  );
}