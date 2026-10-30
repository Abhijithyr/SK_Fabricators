import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-bg">
      <div className="container-width grid min-h-[600px] items-center gap-12 py-16 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d7e9ed] bg-[#f5fbfc] px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-[#245a73]">
            <Sparkles size={14} /> Modern exterior solutions
          </div>

          <h1 className="max-w-xl text-2xl font-black leading-[1.08] tracking-tight text-[#263b46] sm:text-3xl lg:text-[42px]">
            Built for strength
            <span className="block text-[#245a73]">Designed to stand out.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#71818a] sm:text-lg">
            Quality fabrication solutions for petrol bunks, gates, exterior designs, glass glazing and signage — built with practical design, durable materials and a professional finish.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#245a73] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#173f52]"
            >
              Explore Services <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#cbdde2] bg-white px-6 py-3.5 text-sm font-bold text-[#245a73] hover:bg-[#f7fbfc]"
            >
              Talk to Our Team
            </a>
          </div>

          <div className="mt-9 grid max-w-md grid-cols-3 gap-4 border-t border-[#e4ecef] pt-6">
            <div>
              <div className="text-lg font-black text-[#263b46]">01</div>
              <div className="mt-1 text-xs text-[#7b8a91]">Site discussion</div>
            </div>
            <div>
              <div className="text-lg font-black text-[#263b46]">02</div>
              <div className="mt-1 text-xs text-[#7b8a91]">Solution planning</div>
            </div>
            <div>
              <div className="text-lg font-black text-[#263b46]">03</div>
              <div className="mt-1 text-xs text-[#7b8a91]">Installation</div>
            </div>
          </div>
        </div>

        <div className="image-wrap relative min-h-[240px] soft-shadow lg:min-h-[420px]">
          <Image
            src="/images/image1.jpeg"
            alt="Modern architectural exterior with glass facade and shading"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-5 py-4 shadow-lg">
            <div className="text-[10px] font-black uppercase tracking-widest text-[#245a73]">
              Our focus
            </div>
            <div className="mt-1 text-sm font-bold text-[#263b46]">
              Clean design • Reliable installation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}