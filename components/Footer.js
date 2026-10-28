export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-9">
      <div className="container-width flex flex-col gap-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <div className="font-black tracking-tight text-[#263b46]">S K</div>
          <div className="text-[8px] font-bold tracking-[.17em] text-[#87969d]">
            FABRICATORS
          </div>
        </div>

        <div className="flex justify-center gap-5 text-xs font-semibold text-[#7a898f]">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="text-xs text-[#9aa5aa]">
          © 2026 SK Fabricators
        </div>
      </div>
    </footer>
  );
}