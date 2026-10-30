// import Image from "next/image";
// import { Check, ShieldCheck, Users, Wrench } from "lucide-react";

// export default function About() {
//   return (
//     <section id="about" className="section-padding pale-section">
//       <div className="container-width grid items-center gap-12 lg:grid-cols-2">
//         <div className="image-wrap relative min-h-[280px]">
//           <Image
//             src="/images/image2.jpeg"
//             alt="Contemporary commercial building facade"
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div>
//           <div className="section-label">A little about us</div>
//           <h2 className="mt-3 text-3xl font-black tracking-tight text-[#263b46] sm:text-2xl">
//             We focus on the details that make a project feel complete.
//           </h2>

//           <p className="mt-5 leading-7 text-[#71818a]">
//             Vanguard Architectural Solutions works across residential and
//             commercial projects to provide exterior products and facade
//             installations that are clean, functional and easy to maintain.
//           </p>

//           <div className="mt-7 space-y-3">
//             {[
//               "Clear communication from enquiry to installation",
//               "Solutions selected around the building and site",
//               "Professional finishing with attention to detail",
//             ].map((item) => (
//               <div key={item} className="flex gap-3 text-sm font-semibold text-[#536770]">
//                 <Check size={18} className="mt-0.5 shrink-0 text-[#4e8a74]" />
//                 {item}
//               </div>
//             ))}
//           </div>

//           <div className="mt-9 grid gap-3 sm:grid-cols-3">
//             <div className="rounded-xl border border-[#e0ebe6] bg-white p-4">
//               <ShieldCheck size={20} className="text-[#4e8a74]" />
//               <div className="mt-3 text-sm font-black text-[#263b46]">Quality</div>
//               <div className="mt-1 text-xs text-[#829096]">Careful materials</div>
//             </div>
//             <div className="rounded-xl border border-[#e0ebe6] bg-white p-4">
//               <Users size={20} className="text-[#4e8a74]" />
//               <div className="mt-3 text-sm font-black text-[#263b46]">Support</div>
//               <div className="mt-1 text-xs text-[#829096]">Project guidance</div>
//             </div>
//             <div className="rounded-xl border border-[#e0ebe6] bg-white p-4">
//               <Wrench size={20} className="text-[#4e8a74]" />
//               <div className="mt-3 text-sm font-black text-[#263b46]">Execution</div>
//               <div className="mt-1 text-xs text-[#829096]">Neat installation</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { Check, ShieldCheck, Users, Wrench } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-padding pale-section">
      <div className="container-width grid items-center gap-8 lg:grid-cols-2">
        
        {/* About Image */}
        <div className="image-wrap relative min-h-[280px]">
          <Image
            src="/images/image2.jpeg"
            alt="Fabrication and exterior work"
            fill
            className="object-cover"
          />
        </div>

        {/* About Content */}
        <div>
          <div className="section-label">A little about us</div>

          <h2 className="mt-2 text-3xl font-black tracking-tight text-[#263b46] sm:text-2xl">
            Built with experience. Finished with care.
          </h2>

          <p className="mt-5 leading-7 text-[#71818a]">
            We provide fabrication and exterior solutions for residential,
            commercial and infrastructure projects. From custom gates and
            exterior designs to petrol bunk structures, glass glazing and
            signage, we focus on practical solutions, strong workmanship and
            a clean professional finish.
          </p>

          {/* Highlights */}
          <div className="mt-7 space-y-3">
            {[
              "Quality workmanship from planning to final installation",
              "Practical solutions designed around each project requirement",
              "Attention to finishing, durability and overall appearance",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 text-sm font-semibold text-[#536770]"
              >
                <Check
                  size={18}
                  className="mt-0.5 shrink-0 text-[#4e8a74]"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* About Cards */}
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            
            {/* Quality */}
            <div className="rounded-xl border border-[#e0ebe6] bg-white p-4">
              <ShieldCheck size={20} className="text-[#4e8a74]" />

              <div className="mt-3 text-sm font-black text-[#263b46]">
                Quality
              </div>

              <div className="mt-1 text-xs text-[#829096]">
                Reliable materials
              </div>
            </div>

            {/* Support */}
            <div className="rounded-xl border border-[#e0ebe6] bg-white p-4">
              <Users size={20} className="text-[#4e8a74]" />

              <div className="mt-3 text-sm font-black text-[#263b46]">
                Support
              </div>

              <div className="mt-1 text-xs text-[#829096]">
                Project guidance
              </div>
            </div>

            {/* Execution */}
            <div className="rounded-xl border border-[#e0ebe6] bg-white p-4">
              <Wrench size={20} className="text-[#4e8a74]" />

              <div className="mt-3 text-sm font-black text-[#263b46]">
                Execution
              </div>

              <div className="mt-1 text-xs text-[#829096]">
                Professional installation
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

