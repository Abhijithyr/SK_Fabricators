"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  // const [submitted, setSubmitted] = useState(false);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(event.target);

    // Web3Forms Access Key
    formData.append(
      "access_key",
      "4022aa6a-ccc3-422a-bc18-d04ec12dac6b"
    );

    // Email subject
    formData.append(
      "subject",
      "New Enquiry from Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);

        // Clear form after successful submission
        event.target.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // function submit(event) {
  //   event.preventDefault();
  //   setSubmitted(true);
  // }

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
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3072.1714219626388!2d77.72117237507754!3d13.033715187287383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAyJzAxLjQiTiA3N8KwNDMnMjUuNSJF!5e1!3m2!1sen!2sin!4v1793352287699!5m2!1sen!2sin"
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
      {/* Name & Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="text"
          name="name"
          placeholder="Your name"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
        />

        <input
          required
          type="tel"
          name="phone"
          placeholder="Phone number"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
        />
      </div>

      {/* Email */}
      <input
        required
        type="email"
        name="email"
        placeholder="Email address"
        className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
      />

      {/* Service */}
      <select
        name="service"
        required
        defaultValue=""
        className="mt-4 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#4e8a74]"
      >
        <option value="" disabled>
          What do you need?
        </option>

        <option value="Outdoor Blinds">
          Outdoor Blinds
        </option>

        <option value="Structural Glazing">
          Structural Glazing
        </option>

        <option value="ACP Cladding">
          ACP Cladding
        </option>

        <option value="Fuel Station Canopy">
          Fuel Station Canopy
        </option>
      </select>

      {/* Message */}
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Tell us briefly about the project..."
        className="mt-4 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#4e8a74]"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#4e8a74] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#3e735f] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            Send Enquiry
            <ArrowRight size={16} />
          </>
        )}
      </button>

      {/* Success Message */}
      {submitted && (
        <div className="mt-4 rounded-lg bg-[#eef8f4] p-3 text-center text-sm font-semibold text-[#3e735f]">
          Thank you! Your enquiry was submitted successfully. We will
          contact you shortly.
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-center text-sm font-semibold text-red-600">
          {error}
        </div>
      )}
    </form>
        {/* <form
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
        </form> */}
      </div>
    </section>
  );
}