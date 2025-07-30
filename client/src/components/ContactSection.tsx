import { email, formSubmitLink, mailTo, socials } from "../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

export function ContactSection() {
  return (
    <section id="contact" className="w-full px-4 py-20 text-white">
      <div className="max-w-7xl mx-auto space-y-20">
        <h3 className="px-2 max-w-7xl text-white mb-2 tracking-tight">
          Contact
        </h3>
        <h6 className="px-2 max-w-7xl mx-auto text-fuchsia-200/70 mb-10">
          Want to Reach Out?
        </h6>

        {/* Content */}
        <div className="p-2 lg:p-4 bg-white/5 backdrop-blur-md border border-purple-400 rounded-3xl shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Contact Form */}
            <div className="flex flex-col w-full gap-6 p-4">
              <span>
                <h2 className="text-fuchsia-300/90 font-extrabold">
                  Get in Touch
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-fuchsia-200/70">
                  You can fill out the email form below...
                </p>
              </span>

              {/* Contact Form */}
              <form
                className="flex flex-col w-full h-full gap-5"
                method="post"
                action={formSubmitLink}
              >
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-base text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Obi-Wan Kenobi"
                    required
                    className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-gray-600
                    focus:outline-none focus:ring-1 focus:ring-fuchsia-300/90 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-base text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="general.kenobi@tatooine.com"
                    required
                    className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-gray-600
                    focus:outline-none focus:ring-1 focus:ring-fuchsia-300/90 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-base text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Hello there!"
                    required
                    rows={5}
                    className="px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 border border-gray-600 
                    focus:outline-none focus:ring-1 focus:ring-fuchsia-300/90 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="my-4 px-10 py-3 w-fit bg-fuchsia-400/60 hover:bg-fuchsia-400/40 cursor-pointer text-lg text-white rounded-lg font-semibold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Socials  */}
            <div className="flex flex-col w-full gap-8 bg-white/5 backdrop-blur rounded-3xl py-6 px-8">
              <span>
                <h3 className="text-fuchsia-300/90 font-extrabold">
                  Contact Info
                </h3>
                <p className="text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-xl text-fuchsia-200/70">
                  You can also contact me on...
                </p>

                {/* Social Links  */}
                <div className="flex flex-col mt-4 lg:mt-6">
                  <span className="flex items-center gap-6 p-2">
                    <FontAwesomeIcon
                      icon={faMailBulk}
                      className="text-3xl text-indigo-200"
                    />
                    <a href={mailTo} target="_blank" rel="noopener noreferrer">
                      <h5 className="text-indigo-200">{email}</h5>
                    </a>
                  </span>
                  {/* Phone */}
                  <span className="flex items-center gap-6 p-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-3xl text-indigo-200"
                    />
                    <h5 className="text-indigo-200">(+263) 77 965 6211</h5>
                  </span>

                  {socials.map((social) => (
                    <div
                      key={social.name}
                      className="flex items-center gap-6 p-2 text-indigo-200"
                    >
                      <FontAwesomeIcon
                        icon={social.icon}
                        className="text-3xl"
                      />
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <h5>{social.name}</h5>
                      </a>
                    </div>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
