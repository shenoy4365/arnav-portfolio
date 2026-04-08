"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Sun, Moon, ChevronDown, Menu, X } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "about" | "work" | "projects";

type ProjectEntry = {
  name: string;
  caption: string;
  date?: string;
  description?: string;
  tags?: string[];
  href?: string;
  github?: string;
  icon: React.ReactNode;
};

type WorkEntry = {
  role: string;
  company: string;
  start: string;
  end: string;
  bullets?: string[];
  tags?: string[];
  iconBg: string;
  iconLabel: string;
  iconSrc?: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const projects: ProjectEntry[] = [
  {
    name: "Diagnosis Search",
    caption: "Agentic AI Healthcare Search Engine",
    date: "Apr 2026",
    description:
      "A Next.js medical search engine that queries trusted health websites, PubMed, and Semantic Scholar in parallel to stream Gemini-synthesized, fully-cited answers, handling 20 concurrent queries with sub-200ms response times across healthcare, scientific, and educational modes.",
    tags: ["Python", "Next.js", "Google Gemini API", "Tavily Search", "Supabase"],
    href: "#",
    github: "https://github.com/shenoy4365/diagnosis-search",
    icon: (
      <div className="w-full h-full rounded-lg bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-lg">
        P
      </div>
    ),
  },
  // {
  //   name: "DermaLoom",
  //   caption: "Skin Lesion Disease AI Doctor and Visualization Platform",
  //   date: "Apr 2026",
  //   description:
  //     "Longer description of the project — what problem it solves, how you built it, and what impact it had.",
  //   tags: ["PyTorch", "scikit-learn", "R"],
  //   href: "#",
  //   github: "#",
  //   icon: (
  //     <div className="w-full h-full rounded-lg bg-violet-100 dark:bg-violet-950 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-lg">
  //       P
  //     </div>
  //   ),
  // },
  {
    name: "Glaucoma Differential Equations Paper",
    caption: "Computational Analysis of Glaucoma using Partial Differential Equations",
    date: "Mar 2026",
    description:
      "A computational glaucoma biomechanics framework that models intraocular pressure (IOP)–induced stress in the optic nerve head using PDE-based fluid and elasticity simulations, systematically comparing Finite Element and Finite Difference methods while integrating clinical imaging datasets (PAPILA, GRAPE, HYGD) to bridge machine learning data with physics-based ophthalmic modeling.",
    tags: ["Python", "Differential Equations", "Machine Learning", "Computational Biology"],
    href: "#",
    github: "https://github.com/shenoy4365/glaucoma-pde-paper",
    icon: (
      <div className="w-full h-full rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-lg">
        P
      </div>
    ),
  },
  {
    name: "DermaLoom",
    caption: "Skin Lesion Disease AI Doctor and Visualization Platform",
    date: "Mar 2026",
    description:
      "An AI dermatology assistant that classifies skin lesions using an EfficientNet-B3 model trained on the HAM10000 dataset and generates evidence-based educational reports with interactive disease timelines, supporting 7-class lesion classification across 10,015 dermatoscopic images and delivering real-time ONNX inference through a FastAPI + Next.js platform.",
    tags: ["Typescript", "Python", "Neuroscience", "Machine Learning"],
    href: "#",
    github: "https://github.com/shenoy4365/derma-loom",
    icon: (
      <div className="w-full h-full rounded-lg bg-violet-100 dark:bg-violet-950 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-lg">
        P
      </div>
    ),
  },
  {
    name: "NeurAmigo",
    caption: "Educational iOS Swift App about Neuroscience Diseases",
    date: "Feb 2026",
    description:
      "An interactive SwiftUI neuroscience learning app that delivers structured modules and a searchable disease encyclopedia for neurological disorders, featuring secure on-device Keychain authentication and progress tracking across 15+ neurological disease modules with 100% offline functionality and zero backend dependencies.",
    tags: ["SwiftUI", "iOS Development", "Neuroscience", "Education", "On-device Authentication"],
    href: "#",
    github: "https://github.com/shenoy4365/neuramigo",
    icon: (
      <div className="w-full h-full rounded-lg bg-violet-100 dark:bg-violet-950 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-lg">
        P
      </div>
    ),
  }
];

const workEntries: WorkEntry[] = [
  {
    role: "Computational Biology Research Intern",
    company: "Carnegie Mellon University",
    start: "Jan 2026",
    end: "Present",
    bullets: [
      "Engineering spatial point-process augmentation models for colon tissue analysis."
    ],
    tags: ["Python", "Generative AI", "PyTorch", "Bioinformatics"],
    iconBg: "bg-red-100 dark:bg-red-950",
    iconLabel: "CMU",
    iconSrc: "/icons/cmu-website-icon.png",
  },
  {
    role: "Computational Neuroscience Researcher",
    company: "Southcoast Health",
    start: "Nov 2025",
    end: "Present",
    bullets: [
      "Working with Brown University Professor to build a novel machine-learning and genetic survival model for glioblastoma patients; named an IJAS (ISEF-affiliated) Semifinalist",
      // "What did you work on and with whom?",
    ],
    tags: ["Python", "Machine Learning", "Survival Analysis", "Neuroscience"],
    iconBg: "bg-green-100 dark:bg-green-950",
    iconLabel: "SCH",
    iconSrc: "/icons/southcoast-website-icon.png",
  },
  {
    role: "Independent Neuroscience Researcher",
    company: "UCLA",
    start: "Nov 2025",
    end: "Present",
    bullets: [
      "Developing ODE models of tripartite synapse dynamics, quantifying glutamate excitability differences across GBM tumor grades",
    ],
    tags: ["Python", "ODE Modeling", "Gene Expression", "Neuroscience"],
    iconBg: "bg-sky-100 dark:bg-sky-950",
    iconLabel: "UCLA",
    iconSrc: "/icons/ucla-website-icon.png",
  },
  {
    role: "Machine Learning Research Intern",
    company: "Dhisha AI",
    start: "May 2025",
    end: "July 2025",
    bullets: [
      "Built a deep-learning model detecting retinal diseases (glaucoma, cataracts, diabetic retinopathy) with 95% accuracy across 10K+ images; won the 2025 Congressional App Challenge",
    ],
    tags: ["Python", "Computer Vision", "Deep Learning", "Transfer Learning"],
    iconBg: "bg-purple-100 dark:bg-purple-950",
    iconLabel: "DAI",
    iconSrc: "/icons/dhisha-website-icon.png",
  },
];

// ─── Accordion row for Projects ───────────────────────────────────────────────

function ProjectRow({ project, open, onToggle }: {
  project: ProjectEntry;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-4 py-4">
        {/* Icon */}
        {/* <div className="relative h-12 w-12 flex-shrink-0">{project.icon}</div> */}

        {/* Trigger */}
        <button
          onClick={onToggle}
          className="flex flex-col w-full text-left"
        >
          <div className="flex items-baseline justify-between w-full gap-4">
            <span className="text-gray-900 dark:text-gray-100 font-semibold text-[19px]">
              {project.name}
            </span>
            <div className="flex items-center gap-3 flex-shrink-0">
              {project.date && (
                <span className="text-gray-400 dark:text-gray-500 text-[14px] hidden sm:block">
                  {project.date}
                </span>
              )}
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </div>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-[17px] mt-0.5">
            {project.caption}
          </span>
          {project.date && (
            <span className="text-gray-400 dark:text-gray-500 text-sm mt-0.5 sm:hidden">
              {project.date}
            </span>
          )}
        </button>
      </div>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-[17px] text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
            {project.description && <p>{project.description}</p>}
            {(project.tags || project.github) && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto mr-[28px] inline-flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    <FaGithub size={13} />
                    Source
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Accordion row for Work ───────────────────────────────────────────────────

function WorkRow({ entry, open, onToggle }: {
  entry: WorkEntry;
  open: boolean;
  onToggle: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-4 py-4">
        {/* Icon */}
        <div
          className="h-12 w-12 flex-shrink-0 rounded-lg flex items-center justify-center overflow-hidden"
        >
          {entry.iconSrc && !imgError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={entry.iconSrc}
              alt={entry.company}
              width={40}
              height={40}
              className="object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">
              {entry.iconLabel}
            </span>
          )}
        </div>

        {/* Trigger */}
        <button onClick={onToggle} className="flex flex-col w-full text-left">
          <div className="flex items-baseline justify-between w-full gap-4">
            <span className="text-gray-900 dark:text-gray-100 font-semibold text-[19px]">
              {entry.role}
            </span>
            <div className="flex items-center gap-3 flex-shrink-0">
              <span className="text-gray-400 dark:text-gray-500 text-[14px] hidden sm:block">
                {entry.start} – {entry.end}
              </span>
              <ChevronDown
                size={16}
                className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </div>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-[17px] mt-0.5">
            {entry.company}
          </span>
          <span className="text-gray-400 dark:text-gray-500 text-sm mt-0.5 sm:hidden">
            {entry.start} – {entry.end}
          </span>
        </button>
      </div>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 pl-16 text-[17px] text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
            {entry.bullets && (
              <ul className="list-disc pl-4 space-y-1">
                {entry.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
            {entry.tags && (
              <div className="flex flex-wrap gap-2 pt-1">
                {entry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("about");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Read theme from DOM after hydration (inline script already set html.dark)
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  // Persist theme changes (skip on first render to avoid clearing what the script set)
  useEffect(() => {
    if (!mounted) return;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  const [openProjects, setOpenProjects] = useState<Set<number>>(new Set());
  const [openWork, setOpenWork] = useState<Set<number>>(new Set());

  const toggleProject = (i: number) =>
    setOpenProjects((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const toggleWork = (i: number) =>
    setOpenWork((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f2f0eb] dark:bg-[#1e1e1e] transition-colors duration-200 flex flex-col">
      {/* Nav */}
      <nav className="max-w-5xl w-full mx-auto px-6 sm:px-14 pt-12">
        <div className="flex items-center justify-between pb-4">

          {/* Left: hamburger on mobile, theme toggle on desktop */}
          <div className="flex items-center gap-3">
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="sm:hidden text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            {/* Theme toggle — desktop only */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="hidden sm:block text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            >
              {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} />}
            </button>
          </div>

          {/* Right: tabs (desktop) | theme toggle (mobile) */}
          <div className="flex items-center gap-10">
            {(["about", "work", "projects"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`hidden sm:block text-lg capitalize tracking-wide transition-all duration-150 ${
                  activeTab === tab
                    ? "text-gray-900 dark:text-gray-100 font-semibold border-b-2 border-gray-900 dark:border-gray-100 pb-1"
                    : "text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 pb-1"
                }`}
              >
                {tab}
              </button>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
              className="sm:hidden text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            >
              {mounted ? (isDark ? <Sun size={18} /> : <Moon size={18} />) : <Moon size={18} />}
            </button>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-800" />

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="sm:hidden border-b border-gray-200 dark:border-gray-800 py-2">
            {(["about", "work", "projects"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`block w-full text-left px-2 py-3 text-lg capitalize tracking-wide transition-colors ${
                  activeTab === tab
                    ? "text-gray-900 dark:text-gray-100 font-semibold"
                    : "text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="max-w-5xl w-full mx-auto px-6 sm:px-14 pt-14 sm:pt-20 pb-10 flex-1">
        <div key={activeTab} className="animate-fade-in-up">
        {/* About */}
        {activeTab === "about" && (
          <div>
            <h1 className="text-[34px] sm:text-[46px] font-normal text-gray-900 dark:text-gray-100 tracking-tight mb-5 sm:mb-7">
              Hi, I&apos;m Arnav Shenoy
            </h1>
            {/*
            <img
              src="/images/profile.jpg"
              alt="Arnav Shenoy"
              className="w-44 sm:w-56 h-auto rounded-xl object-cover mb-8"
            />
            */}

            <div className="space-y-6 text-[18px] leading-[1.9] text-gray-600 dark:text-gray-400">
              <p>
                I&apos;m a high school senior at {" "}
                  William Fremd High School
                and am incoming CS + Stats major @ UIUC. Currently, I&apos;m a
                Computational Biology Researcher at{" "}
                <a
                  href="https://www.cmu.edu/cbd/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-200 underline underline-offset-2 decoration-gray-300 dark:decoration-gray-700 hover:decoration-gray-600 dark:hover:decoration-gray-400 transition-colors"
                >
                  Carnegie Mellon University
                </a>
                 , where I'm engineering spatial point-process augmentation models for colon tissue analysis.
              </p>
              <p>
                I also conduct computational neuroscience research at{" "}
                <a
                  href="https://www.southcoast.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-200 underline underline-offset-2 decoration-gray-300 dark:decoration-gray-700 hover:decoration-gray-600 dark:hover:decoration-gray-400 transition-colors"
                >
                  Southcoast Health
                </a>{" "}
                and{" "}
                <a
                  href="https://www.uclahealth.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-200 underline underline-offset-2 decoration-gray-300 dark:decoration-gray-700 hover:decoration-gray-600 dark:hover:decoration-gray-400 transition-colors"
                >
                  UCLA
                </a>
                , primarily using machine learning and differential equation modeling for glioblastoma and genetic research.
              </p>
              <p>
                <b>Notable Awards:</b> Congressional App Challenge Winner, NHS Scholarship National Semifinalist, 2x AIME Qualifier
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-5 pt-2">
                <a
                  href="https://github.com/shenoy4365"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <FaGithub size={26} />
                </a>
                <a
                  href="https://linkedin.com/in/arnav-shenoy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <FaLinkedinIn size={26} />
                </a>
                <a
                  href="mailto:arnav.shenoy@gmail.com"
                  aria-label="Email"
                  className="text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                >
                  <MdOutlineEmail size={28} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Work */}
        {activeTab === "work" && (
          <div>
            <h2 className="text-[34px] sm:text-[46px] font-normal text-gray-900 dark:text-gray-100 tracking-tight mb-5">
              Work Experience
            </h2>
            <div>
              {workEntries.map((entry, i) => (
                <WorkRow
                  key={i}
                  entry={entry}
                  open={openWork.has(i)}
                  onToggle={() => toggleWork(i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {activeTab === "projects" && (
          <div>
            <h2 className="text-[34px] sm:text-[46px] font-normal text-gray-900 dark:text-gray-100 tracking-tight mb-5">
              Coding Projects
            </h2>
            <div>
              {projects.map((project, i) => (
                <ProjectRow
                  key={i}
                  project={project}
                  open={openProjects.has(i)}
                  onToggle={() => toggleProject(i)}
                />
              ))}
            </div>
          </div>
        )}
        </div>
      </main>
    </div>
  );
}
