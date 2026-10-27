"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const nav = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-width">
        <div className="flex h-[74px] items-center justify-between">
          <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7fa] text-[#245a73]">
              <span className="text-lg font-black">SK</span>
            </div>
            <div>
              <div className="text-[24px] font-black tracking-tight text-[#263b46]">S K</div>
              <div className="text-[16px] font-bold tracking-[.17em] text-[#87969d]">
                FABRICATORS
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-[#65757d] transition hover:text-[#245a73]"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#245a73] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#173f52]"
            >
              Get a Quote <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-[#245a73] md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <nav className="mobile-menu border-t border-slate-100 py-3 md:hidden">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-[#52656e] hover:bg-[#f7fbfc]"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-[#245a73] px-4 py-3 text-center text-sm font-bold text-white"
            >
              Get a Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}