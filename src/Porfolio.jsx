import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Single-file portfolio component (TailwindCSS + Framer Motion required)
// Drop into a Vite + React project (e.g. src/Portfolio.jsx) and import in App.

export default function GlassyPortfolio() {
  // Projects / Skills - edit these arrays to add your content
  const projects = [
    {
      title: "E-commerce Website",
      tags: [
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Cloudinary",
        "JWT",
        "Framer Motion",
        "Zustand",
        "REST API",
        "Postman",
        "Stripe",
      ],
      livelink: "#",
      githublink: "https://github.com/imogal107/E-commerce-MERN",
    },
    {
      title: "QuickChat (Chat App)",
      tags: [
        "React",
        "Tailwind",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Zustand",
        "REST API",
        "Socket.io",
      ],
      livelink: "#",
      githublink: "https://github.com/imogal107/QuickChat-MERN-chat-app",
    },
    {
      title: "EasyCook (Recipe Searching App)",
      tags: ["React", "Tailwind", "API Integration"],
      livelink: "#",
      githublink: "https://github.com/imogal107/EasyCook-ReactJs-",
    },
    {
      title: "Song Recommendation App (ML Project)",
      tags: [
        "Python",
        "Javascript",
        "HTML",
        "CSS",
        "Matplotlib",
        "Scikit-learn",
        "TensorFlow",
        "opencv",
        "Keras",
        "eel",
        "numpy",
      ],
      livelink: "#",
      githublink:
        "https://github.com/imogal107/Song-Recommendation-Using-Facial-Emotion-Recognition",
    },
  ];

  // Tech stack now supports name, level and optional logo (emoji or URL)
  const [tech, setTech] = useState([
    {
      name: "JavaScript",
      level: "Intermediate",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/219px-Javascript_badge.svg.png?20160504163251",
    },

    {
      name: "HTML5",
      level: "Intermediate",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },

    {
      name: "CSS3",
      level: "Intermediate",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },

    {
      name: "python",
      level: "Beginner",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    },

    {
      name: "TailwindCSS",
      level: "Intermediate",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },

    {
      name: "Bootstrap",
      level: "Beginner",
      icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },

    {
      name: "React",
      level: "Beginner",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },

    {
      name: "zustand",
      level: "Beginner",
      icon: "https://hexmos.com/freedevtools/svg_icons/zustand/zustand-original.svg",
    },

    {
      name: "Framer Motion",
      level: "Beginner",
      icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    },

    {
      name: "Node.js",
      level: "Beginner",
      icon: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    },

    {
      name: "Express.js",
      level: "Beginner",
      icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg",
    },

    {
      name: "MongoDB",
      level: "Beginner",
      icon: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    },

    {
      name: "redis",
      level: "Beginner",
      icon: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    },

    { name: "Vite", level: "", icon: "https://vitejs.dev/logo.svg" },

    {
      name: "Git",
      level: "Beginner",
      icon: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },

    {
      name: "Postman",
      level: "Beginner",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },

    {
      name: "ChatGPT",
      level: "Intermediate",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/768px-ChatGPT-Logo.svg.png?20240214002031",
    },

    {
      name: "VS Code",
      level: "",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    },
  ]);

  const nameRef = useRef(null);

  useEffect(() => {
    // This async loop flips letters left->right then waits 5s then flips right->left, repeatedly.
    let mounted = true;
    async function runFlipLoop() {
      const chars = nameRef.current
        ? Array.from(nameRef.current.querySelectorAll(".char"))
        : [];
      const n = chars.length;
      const flipDuration = 900; // ms (animation length)
      const stagger = 500; // ms between letters
      const pause = 5000; // wait after full sequence

      while (mounted) {
        // forward: 0..n-1
        for (let i = 0; i < n && mounted; i++) {
          const el = chars[i];
          if (!el) continue;
          // apply flipLTR animation to this letter
          el.style.animation = `flipLTR ${flipDuration}ms forwards ease-in-out`;
          // ensure visible during flip
          el.style.backfaceVisibility = "hidden";
          // wait stagger
          await new Promise((r) => setTimeout(r, stagger));
        }
        // after finishing forward flips, ensure final transforms persist and clear animation so idle glow resumes
        await new Promise((r) => setTimeout(r, flipDuration));
        chars.forEach((c) => {
          c.style.transform = "rotateY(0deg)";
          c.style.opacity = "1";
          c.style.animation = "";
        });

        // pause
        await new Promise((r) => setTimeout(r, pause));

        // reverse: n-1..0
        for (let i = n - 1; i >= 0 && mounted; i--) {
          const el = chars[i];
          if (!el) continue;
          el.style.animation = `flipRTL ${flipDuration}ms forwards ease-in-out`;
          el.style.backfaceVisibility = "hidden";
          await new Promise((r) => setTimeout(r, stagger));
        }
        await new Promise((r) => setTimeout(r, flipDuration));
        chars.forEach((c) => {
          c.style.transform = "rotateY(0deg)";
          c.style.opacity = "1";
          c.style.animation = "";
        });

        // pause again
        await new Promise((r) => setTimeout(r, pause));
      }
    }

    runFlipLoop();
    return () => {
      mounted = false;
    };
  }, []);

  // Particle trail (no fixed cursor sphere — particles only)
  useEffect(() => {
    // color pools - will rotate among these pools
    const colorPools = [
      ["#34D399", "#EF4444", "#FFFFFF"], // green, red, white
      ["#60A5FA", "#F472B6", "#FDE68A"], // blue, pink, amber
      ["#A78BFA", "#34D399", "#F97316"], // purple, green, orange
      ["#06B6D4", "#F43F5E", "#FFFFFF"], // teal, rose, white
      ["#7C3AED", "#22C55E", "#F59E0B"], // violet, lime, yellow
      ["#F97316", "#06B6D4", "#F472B6"], // orange, teal, pink
      ["#10B981", "#60A5FA", "#F59E0B"], // emerald, blue, amber
      ["#F43F5E", "#3B82F6", "#FACC15"], // rose, blue, yellow
      ["#E11D48", "#10B981", "#0EA5E9"], // crimson, emerald, sky
      ["#F59E0B", "#8B5CF6", "#06B6D4"], // amber, violet, teal
      ["#FB923C", "#14B8A6", "#A855F7"], // orange, teal, purple
      ["#F97316", "#4ADE80", "#2563EB"], // orange, light green, blue
      ["#22C55E", "#F87171", "#818CF8"], // green, red, indigo
      ["#4ADE80", "#FCD34D", "#0EA5E9"], // lime, yellow, sky
      ["#34D399", "#F43F5E", "#A855F7"], // green, rose, purple
      ["#38BDF8", "#F59E0B", "#EC4899"], // sky, amber, pink
      ["#10B981", "#EAB308", "#8B5CF6"], // emerald, yellow, violet
      ["#3B82F6", "#F43F5E", "#34D399"], // blue, rose, green
      ["#F472B6", "#6366F1", "#F97316"], // pink, indigo, orange
      ["#EC4899", "#0EA5E9", "#A3E635"], // pink, sky, lime
      ["#06B6D4", "#FDE047", "#F43F5E"], // cyan, yellow, rose
      ["#14B8A6", "#A78BFA", "#F87171"], // teal, lavender, red
      ["#F43F5E", "#FACC15", "#4ADE80"], // coral, yellow, mint
      ["#6366F1", "#22C55E", "#F472B6"], // indigo, green, pink
      ["#8B5CF6", "#FCD34D", "#EC4899"], // violet, amber, hot pink
      ["#F97316", "#38BDF8", "#16A34A"], // orange, sky, green
      ["#F43F5E", "#0EA5E9", "#FBBF24"],
    ];

    let currentPool = 0;
    // rotate pool every 3500ms
    const poolInterval = setInterval(() => {
      currentPool = (currentPool + 1) % colorPools.length;
    }, 3500);

    function pickThree(pool) {
      // ensure we pick 2-3 unique colors from the pool
      const result = [];
      const attempts = Math.min(3, pool.length);
      const taken = new Set();
      while (result.length < attempts) {
        const c = pool[Math.floor(Math.random() * pool.length)];
        if (!taken.has(c)) {
          taken.add(c);
          result.push(c);
        } else {
          // allow duplicates only if pool smaller
          if (taken.size === pool.length) break;
        }
      }
      return result;
    }

    function createParticle(x, y) {
      const pool = colorPools[currentPool];
      const colors = pickThree(pool);

      const size = 10 + Math.random() * 26; // particle size
      const el = document.createElement("div");
      // use fixed positioning so coordinates match viewport even when page is scrolled
      el.className = "fixed rounded-full pointer-events-none";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${x - size / 2}px`;
      el.style.top = `${y - size / 2}px`;
      el.style.position = "fixed";

      // create a soft cloudy gradient using up to 3 colors
      const gradient = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0.08)), linear-gradient(135deg, ${colors
        .map((c) => c + "88")
        .join(", ")})`;

      el.style.background = gradient;
      el.style.boxShadow = `0 10px 30px ${colors[0]}33`;
      el.style.transform = `translateZ(0) scale(0.95)`;
      el.style.willChange = "transform, opacity, filter";
      el.style.transition = `transform 1000ms cubic-bezier(.2,.9,.2,1), opacity 1000ms linear, filter 1000ms linear`;
      el.style.opacity = "1";
      el.style.filter = "blur(6px)";
      el.style.zIndex = 9999;
      document.body.appendChild(el);

      // animate: float and fade in a slightly randomized direction and scale
      requestAnimationFrame(() => {
        const dx = (Math.random() - 0.5) * 120;
        const dy = -20 - Math.random() * 90;
        const scale = 0.3 + Math.random() * 0.9;
        el.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${scale})`;
        el.style.opacity = "0";
        el.style.filter = "blur(14px)";
      });

      // remove element after animation
      setTimeout(() => {
        try {
          document.body.removeChild(el);
        } catch (e) {}
      }, 1100 + Math.random() * 400);
    }

    const onMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // create multiple small particles per move for a cloudy trail
      if (Math.random() > 0.18)
        createParticle(
          x + (Math.random() - 0.5) * 12,
          y + (Math.random() - 0.5) * 12
        );
      if (Math.random() > 0.6)
        createParticle(
          x + (Math.random() - 0.5) * 36,
          y + (Math.random() - 0.5) * 36
        );
      if (Math.random() > 0.85)
        createParticle(
          x + (Math.random() - 0.5) * 60,
          y + (Math.random() - 0.5) * 60
        );
    };

    // use passive listener for better scroll performance
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      clearInterval(poolInterval);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  // Smooth appear animations
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-gradient-to-b from-[#071026] to-[#021022] text-slate-100">
      {/* subtle gradient overlay (kept) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.03" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g1)" />
        </svg>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-24">
        {/* Hero */}
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-20"
        >
          <div className="relative rounded-2xl bg-white/5 border border-white/8 backdrop-blur-md p-10">
            <div className="flex items-center justify-evenly gap-6 mb-8">

              <div className="w-32 h-32 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/8 to-white/3 border border-white/10 im-border">
                <div className="text-5xl font-bold">IM</div>
              </div>

              <div className="">
                <h1 className="text-4xl font-extrabold leading-tight">
                  <span className="text-slate-300"></span>
                  <span
                    ref={nameRef}
                    className="inline-block name-animated text-indigo-200 font-extrabold ml-1"
                    data-direction="ltr"
                    aria-label="Ibrahim Mogal"
                  >
                    {"Ibrahim Mogal".split("").map((ch, i) => (
                      <span key={i} className="char inline-block origin-center">
                        {ch}
                      </span>
                    ))}
                  </span>
                </h1>
                <p className="mt-2 text-slate-300 max-w-lg">
                  Enthusiastic Web Developer with strong knowledge in building
                  responsive and user-friendly web interfaces using React.js,
                  HTML, CSS, JavaScript, and Tailwind CSS. Familiar with
                  integrating REST APIs and implementing reusable UI components.
                  Basic understanding of backend technologies like Node.js,
                  Express.js, and MongoDB.
                </p>
                <div className="flex mt-4 gap-3 justify-evenly">
                  <a
                    href="#projects"
                    className="px-4 py-2 rounded-full bg-indigo-500/80 hover:bg-indigo-500 font-medium shadow-md"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-full bg-indigo-500/80 hover:bg-indigo-500 font-medium shadow-md"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>

            {/* glassy info badges */}
            <div className="mt-6 flex gap-3 flex-wrap justify-center">
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/6">
                Open to internships and job opportunities
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/6">
                Remote Friendly
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/6">
                Based in Mumbai, India
              </div>
            </div>
          </div>
        </motion.header>

        {/* Skills / TechStack */}
        <section id="skills" className="mb-16">
          <motion.h2
            variants={item}
            initial="hidden"
            whileInView="show"
            className="text-2xl font-bold mb-6"
          >
            Skills and Tools
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {tech.map((t, idx) => (
              <motion.div
                key={t.name}
                variants={item}
                className="skill-card relative p-4 rounded-xl bg-white/4 border border-white/6 backdrop-blur-md overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">
                    <img src={t.icon} alt="" className="h-16 w-20" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-slate-300 mt-1">{t.level}</div>
                  </div>
                </div>
                {/* border-loading animated element (only animates on hover via CSS) */}
                <span className="absolute -inset-px border-anim pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <motion.a
                key={p.title}
                href={p.link}
                whileHover={{ scale: 1.02 }}
                className="project-card group relative block rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-br from-white/2 to-white/3 p-6 perspective-800"
              >
                <div className="project-inner transform-preserve transition-transform duration-700">
                  <h3 className="text-2xl font-semibold">{p.title}</h3>
                  {/* <p className="text-slate-300 mt-2">{p.desc}</p> */}
                  <div className="my-6 flex gap-2 flex-wrap">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-white/6 border border-white/6"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-2">
                    <a href={p.githublink}>
                      <button className="rounded-full px-4 py-2 bg-indigo-600">
                        Github
                        <FontAwesomeIcon
                          icon="fa-solid fa-arrow-up-right-from-square"
                          className="ml-1"
                        />
                      </button>
                    </a>
                    <button className="rounded-full px-4 py-2 bg-indigo-600">
                      View Project
                      <FontAwesomeIcon
                        icon="fa-solid fa-arrow-up-right-from-square"
                        className="ml-1"
                      />
                    </button>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mb-20">
          <div className="rounded-2xl bg-white/4 border border-white/6 p-8 backdrop-blur-md">
            <h2 className="text-2xl font-bold text-center">Contact Me</h2>
            {/* <p className="text-slate-300 mt-2 text-center">
              I Prefer email — but you can also message me on WhatsApp or
              LinkedIn.
            </p> */}

            <div className="flex justify-center mt-6">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=izmogal111@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon="fa-regular fa-envelope" size="xl" />
                Email
              </a>
              <span className="mx-2"> </span>
              <a href="https://www.linkedin.com/in/ibrahim-mogal-19b35228b/">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" />
                Linkedin
              </a>
            </div>
            {/* <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="p-3 rounded-lg bg-transparent border border-white/6"
                placeholder="Your name"
              />
              <input
                className="p-3 rounded-lg bg-transparent border border-white/6"
                placeholder="Email"
              />
              <textarea
                className="md:col-span-2 p-3 rounded-lg bg-transparent border border-white/6"
                rows={4}
                placeholder="Message"
              />
              <div className="md:col-span-2 flex gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-full bg-indigo-500/90"
                >
                  Send
                </button>
                <a
                  href="mailto:youremail@example.com"
                  className="px-4 py-2 rounded-full border border-white/8"
                >
                  Email
                </a>
              </div>
            </form> */}
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Ibrahim Mogal — Built with ❤️ using React
          & Tailwind
        </footer>
      </main>

      {/* small styles for cursor (Tailwind + inline for some specifics) */}
      <style>{`
        /* ---------- Name animation ---------- */
        .name-animated .char {
          display: inline-block;
          transform-origin: center center;
          backface-visibility: hidden;
          perspective: 800px;
          transition: text-shadow 600ms ease-in-out;
        }
        /* subtle idle glow (does not conflict with flipping) */
        .name-animated .char { animation: idleGlow 3000ms infinite; }

        @keyframes idleGlow {
          0% { text-shadow: 0 0 4px rgba(124,58,237,0.12), 0 0 8px rgba(99,102,241,0.04); }
          50% { text-shadow: 0 0 10px rgba(124,58,237,0.26), 0 0 20px rgba(99,102,241,0.12); }
          100% { text-shadow: 0 0 4px rgba(124,58,237,0.12), 0 0 8px rgba(99,102,241,0.04); }
        }

        /* flip keyframes (used by JS-applied inline animation) */
        @keyframes flipLTR {
          0% { transform: rotateY(90deg); opacity: 0 }
          60% { transform: rotateY(-10deg); opacity: 1 }
          100% { transform: rotateY(0deg); opacity: 1 }
        }
        @keyframes flipRTL {
          0% { transform: rotateY(-90deg); opacity: 0 }
          60% { transform: rotateY(10deg); opacity: 1 }
          100% { transform: rotateY(0deg); opacity: 1 }
        }

        /* ---------- Project card flip on hover ---------- */
        .project-card { perspective: 1200px; }
        .project-card .project-inner { transform-style: preserve-3d; }
        .project-card:hover .project-inner { transform: rotateY(360deg); }

        /* preserve-smooth transform */
        .transform-preserve { transition: transform 700ms cubic-bezier(.2,.9,.2,1); }

        /* ---------- Skill card border loading animation (on hover) ---------- */
        .skill-card { position: relative; }
        .skill-card .border-anim { display: none; }
        .skill-card .border-anim,
        .skill-card::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          pointer-events: none;
          z-index: 2;
        }
        /* animated gradient border placed using pseudo-element */
        .skill-card::before {
          background: linear-gradient(90deg, rgba(99,102,241,0.25), rgba(236,72,153,0.22), rgba(34,197,94,0.25));
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 5px; /* thickness */
          opacity: 0;
          transition: opacity 300ms ease;
          background-size: 200% 100%;
        }
        .skill-card:hover::before {
          opacity: 1;
          animation: borderMove 1.1s linear infinite;
        }
        @keyframes borderMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Slight inner glow while hovered */
        .skill-card:hover { box-shadow: 0 8px 30px rgba(99,102,241,0.06); }

        /* defaults for perspective helper */
        .perspective-800 { perspective: 800px; }

        /* small helper to keep particles on top visually but below UI elements */
        .particle-layer { z-index: 9999 }

                /* ---------- IM box VIBGYOR flowing border ---------- */
        .im-border {
          position: relative;
        }

        .im-border::before {
          content: '';
          position: absolute;
          inset: -2px;                 /* thickness of the ring area */
          border-radius: 0.75rem;      /* match rounded-xl */
          padding: 3px;

          /* bright VIBGYOR gradient that will "move" along the border */
          background: linear-gradient(
            90deg,
            #ff0000,
            #ff7f00,
            #ffff00,
            #00ff00,
            #0000ff,
            #4b0082,
            #8b00ff,
            #ff0000
          );
          background-size: 350% 100%;

          /* punch out the center so only the ring shows */
          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;

          pointer-events: none;
          z-index: 0;
          opacity: 1;
          animation: imBorderFlow 1.4s linear infinite;
        }

        /* keep the content ("IM") above the animated border */
        .im-border > * {
          position: relative;
          z-index: 1;
        }

        @keyframes imBorderFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

      `}</style>
    </div>
  );
}
