import { useRef, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  GitBranch,
  ArrowUpRight,
} from "@phosphor-icons/react";

const stack = [
  { icon: Code, label: "React", color: "#61dafb" },
  { icon: Palette, label: "Tailwind", color: "#38bdf8" },
  { icon: Rocket, label: "GSAP", color: "#88ce02" },
  { icon: GitBranch, label: "Framer Motion", color: "#a78bfa" },
];

// Static float variants — defined once, not recreated per render
const floatVariants = {
  animate: (delay) => ({
    y: [0, -8, 0],
    transition: { repeat: Infinity, duration: 4, delay, ease: "easeInOut" },
  }),
};

export default function HeroCard() {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY],
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const cardStyle = useMemo(
    () => ({
      width: "300px",
      background: "var(--surface-1)",
      border: "1px solid var(--border)",
      boxShadow:
        "0 24px 64px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.04)",
      rotateX,
      rotateY,
      transformStyle: "preserve-3d",
    }),
    [rotateX, rotateY],
  );

  return (
    <div
      className="relative w-full flex items-center justify-end pr-8"
      style={{ height: "520px", perspective: "900px" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle, rgba(124,106,247,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating badges */}
      <motion.div
        custom={0}
        variants={floatVariants}
        animate="animate"
        className="absolute top-12 -right-40 px-3 py-1.5 rounded-xl text-xs font-mono font-medium z-20"
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          color: "#88ce02",
        }}
      >
        ✦ Available on Upwork
      </motion.div>

      <motion.div
        custom={1.2}
        variants={floatVariants}
        animate="animate"
        className="absolute bottom-16 left-10 px-3 py-1.5 rounded-xl text-xs font-mono z-20 flex items-center gap-2"
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          color: "var(--ink-muted)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Faisalabad, PK
      </motion.div>

      <motion.div
        custom={0.6}
        variants={floatVariants}
        animate="animate"
        className="absolute top-24 left-16 px-3 py-1.5 rounded-xl text-xs font-mono z-20"
        style={{
          background: "rgba(124,106,247,0.15)",
          border: "1px solid rgba(124,106,247,0.25)",
          color: "var(--accent)",
        }}
      >
        30+ projects
      </motion.div>

      {/* Main tilt card */}
      <motion.div
        ref={cardRef}
        style={cardStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-3xl overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ scale: { duration: 0.3 } }}
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
        }}
        drag
        dragConstraints={{ top: -40, bottom: 40, left: -40, right: 40 }}
        dragElastic={0.08}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
      >
        {/* Top accent line */}
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(124,106,247,0.8), transparent)",
          }}
        />

        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold font-mono"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,106,247,0.3), rgba(160,140,255,0.15))",
                border: "1px solid rgba(124,106,247,0.3)",
                color: "var(--accent)",
              }}
            >
              Z
            </div>
            <a
              href="#work"
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--surface-3)",
                color: "var(--ink-faint)",
              }}
              aria-label="View work"
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
          <p
            className="text-base font-semibold mb-0.5"
            style={{ color: "var(--ink)" }}
          >
            Zeeshan
          </p>
          <p
            className="text-xs font-mono"
            style={{ color: "var(--ink-faint)" }}
          >
            Frontend Developer
          </p>
        </div>

        <div
          style={{
            height: "1px",
            background: "var(--border)",
            margin: "0 24px",
          }}
        />

        {/* Stack */}
        <div className="p-6 pt-4 flex flex-col gap-3">
          <p
            className="text-xs font-mono tracking-widest mb-1"
            style={{ color: "var(--ink-faint)" }}
          >
            STACK
          </p>
          {stack.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.8 + i * 0.08,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}18`, color }}
              >
                <Icon size={14} weight="bold" />
              </span>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--ink-muted)" }}
              >
                {label}
              </span>
              <div
                className="ml-auto h-1 rounded-full"
                style={{ width: "48px", background: "var(--surface-3)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: color, opacity: 0.7 }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <div
          className="mx-6 mb-6 px-4 py-3 rounded-xl flex items-center gap-3"
          style={{
            background: "var(--surface-2)",
            border: "1px solid var(--border)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" />
          <span
            className="text-xs font-mono"
            style={{ color: "var(--ink-muted)" }}
          >
            Available on <span style={{ color: "var(--ink)" }}>Upwork</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
