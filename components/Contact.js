"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    
        
    <section id="contact" className="section-padding pale-green">
      <div className="container-width grid gap-10 lg:grid-cols-[.75fr_1.25fr]">

        {/* FIRST SECTION */}
        <div>
          <div className="section-label">Contact Informations</div>


          

          {/* CALL US */}
          <div className="mt-8 flex gap-3">
            <Phone className="text-[#4e8a74]" size={19} />

            <div>
              <div className="text-sm font-black text-[#263b46]">
                Call us
              </div>

              <div className="text-sm text-[#71818a]">
                +91 98862 57136
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Phone className="text-[#4e8a74]" size={19} />

            <div>
              <div className="text-sm font-black text-[#263b46]">
                Email
              </div>

              <div className="text-sm text-[#71818a]">
                rafi@skfabricators.com
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Phone className="text-[#4e8a74]" size={19} />

            <div>
              <div className="text-sm font-black text-[#263b46]">
                Location
              </div>

              <div className="text-sm text-[#71818a]">
                #214 Karna Sree Layout<br />
                      3rd Stage Medahalli<br />
                      Bengaluru, Karnataka - 560049
              </div>
            </div>
          </div>

          {/* GOOGLE MAP LOCATION */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-[#dfeae5] bg-white">
            <div className="flex items-center gap-3 border-b border-[#dfeae5] px-4 py-3">
              <MapPin className="text-[#4e8a74]" size={19} />

              <div className="text-sm font-black text-[#263b46]">
                Our Location
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.927704056118!2d77.7124323594382!3d13.03797291871028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11fe770bf7ad%3A0x8f1454828f0bd4d7!2sSkfabricators!5e0!3m2!1sen!2sin!4v1793088613306!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Office Location"
            ></iframe>
          </div>
        </div>

        {/* SECOND SECTION - FORM REMAINS THE SAME */}
        <form
          onSubmit={submit}
          className="soft-shadow rounded-2xl border border-[#dfeae5] bg-white p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              placeholder="Your name"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
            />

            <input
              required
              type="tel"
              placeholder="Phone number"
              className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
            />
          </div>

          <input
            required
            type="email"
            placeholder="Email address"
            className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
          />

          <select
            className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#4e8a74]"
          >
            <option>What do you need?</option>
            <option>Outdoor Blinds</option>
            <option>Structural Glazing</option>
            <option>ACP Cladding</option>
            <option>Fuel Station Canopy</option>
          </select>

          <textarea
            required
            rows="5"
            placeholder="Tell us briefly about the project..."
            className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
          />

          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4e8a74] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#3e735f]"
          >
            Send Enquiry <ArrowRight size={16} />
          </button>

          {submitted && (
            <div className="mt-4 rounded-lg bg-[#eef8f4] p-3 text-center text-sm font-semibold text-[#3e735f]">
              Thank you! This demo enquiry was submitted successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}