"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  { title: "Private Balcony", category: "Blinds", image: "/images/petrol.jpeg" },
  { title: "Modern Office", category: "Glazing", image: "/images/gates.jpeg" },
  { title: "Commercial Entrance", category: "ACP", image: "/images/exterior.jpeg" },
  { title: "Retail Canopy", category: "Fuel", image: "/images/petrol.jpeg" },
  { title: "Commercial Entrance", category: "ACP", image: "/images/image1.jpeg" },
  { title: "Retail Canopy", category: "Fuel", image: "/images/image2.jpeg" },
];

const filters = ["All", "Blinds", "Glazing", "ACP", "Fuel"];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const items =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center">
          <div className="section-label">Our work</div>
          <h2 className="mt-3 text-3xl font-black text-[#263b46] sm:text-4xl">
            Selected project ideas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#71818a]">
            These are sample visuals for the new design. Your actual project
            photographs can be added here later.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-full px-4 py-2 text-xs font-bold ${
                active === filter
                  ? "bg-[#245a73] text-white"
                  : "bg-[#f1f7f8] text-[#65777f] hover:bg-[#e7f1f3]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <article key={`${item.title}-${index}`} className="image-wrap relative h-72">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 p-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#4e8a74]">
                  {item.category}
                </div>
                <h3 className="mt-1 font-black text-[#263b46]">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}