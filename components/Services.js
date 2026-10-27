import Image from "next/image";
import { Blinds, Building2, Fuel, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Balcony & Outdoor Blinds",
    text: "Create a more comfortable outdoor area with practical shading and privacy solutions.",
    image: "/images/gates.jpeg",
    icon: Blinds,
    tag: "Residential",
  },
  {
    title: "Glass & ACP Facades",
    text: "Give offices and commercial buildings a refined exterior with modern facade systems.",
    image: "/images/image1.jpeg",
    icon: Building2,
    tag: "Commercial",
  },
  {
    title: "Fuel Station Structures",
    text: "Functional canopy systems designed for visibility, durability and everyday station use.",
    image: "/images/petrol.jpeg",
    icon: Fuel,
    tag: "Infrastructure",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-width">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="section-label">What we do</div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#263b46] sm:text-4xl">
              Simple solutions for modern buildings.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-[#71818a]">
            We keep every service focused on practical design, suitable
            materials and a neat finished result.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="card-hover overflow-hidden rounded-2xl border border-[#e4ecef] bg-white"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#245a73]">
                    {service.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf7fa] text-[#245a73]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[#263b46]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#71818a]">
                    {service.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#245a73]"
                  >
                    Enquire now <ArrowRight size={15} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}