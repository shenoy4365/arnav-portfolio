"use client";

import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

type Tab = "about" | "work" | "projects";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <div className="min-h-screen bg-[#f9f9f7] flex flex-col">
      {/* Nav */}
      <nav className="max-w-5xl w-full mx-auto px-14 pt-12">
        <div className="flex justify-end gap-10 pb-4">
          {(["about", "work", "projects"] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base capitalize tracking-wide transition-all duration-150 ${
                activeTab === tab
                  ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
                  : "text-gray-400 hover:text-gray-600 pb-1"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <hr className="border-gray-200" />
      </nav>

      {/* Main content */}
      <main className="max-w-5xl w-full mx-auto px-14 pt-20 pb-10 flex-1">
        {activeTab === "about" && (
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-14">
              Hi, I'm Arnav Shenoy
            </h1>

            <div className="flex gap-20">
              {/* Left col */}
              <div className="flex-shrink-0 flex flex-col items-center gap-6">
                <img
                  src="/images/profile.jpg"
                  alt="Arnav Shenoy"
                  className="w-56 h-72 rounded-xl object-cover"
                />
                <div className="flex items-center gap-5">
                  <a
                    href="https://github.com/shenoy4365"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                  >
                    <FaGithub size={26} />
                  </a>
                  <a
                    href="https://linkedin.com/in/arnav-shenoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                  >
                    <FaLinkedinIn size={26} />
                  </a>
                  <a
                    href="mailto:arnav.shenoy@gmail.com"
                    aria-label="Email"
                    className="text-gray-400 hover:text-gray-800 transition-colors"
                  >
                    <MdOutlineEmail size={28} />
                  </a>
                </div>
              </div>

              {/* Right col */}
              <div className="flex-1 space-y-6 text-[16px] leading-[1.9] text-gray-600">
                <p>
                  Hi! I&apos;m a student at{" "}
                  <a
                    href="https://fremd.d211.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                  >
                    William Fremd High School
                  </a>{" "}
                  studying computer science and statistics. I&apos;m a
                  computational biology research intern at{" "}
                  <a
                    href="https://www.cmu.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                  >
                    Carnegie Mellon University
                  </a>
                  , where I work on machine learning for healthcare.
                </p>
                <p>
                  Previously, I&apos;ve conducted research at{" "}
                  <a
                    href="https://www.brown.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                  >
                    Brown University
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.ucla.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                  >
                    UCLA
                  </a>
                  . I&apos;m broadly interested in machine learning,
                  computational biology, and neuroscience.
                </p>
                <p>
                  Feel free to reach out at{" "}
                  <a
                    href="mailto:arnav.shenoy@gmail.com"
                    className="text-gray-900 underline underline-offset-2 decoration-gray-300 hover:decoration-gray-600 transition-colors"
                  >
                    arnav.shenoy@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "work" && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-14">
              Work
            </h2>
            <p className="text-[16px] text-gray-400">Coming soon.</p>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-14">
              Projects
            </h2>
            <p className="text-[16px] text-gray-400">Coming soon.</p>
          </div>
        )}
      </main>
    </div>
  );
}
