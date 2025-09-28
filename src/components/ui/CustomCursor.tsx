import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface CursorState {
  isHovering: boolean;
  isProject: boolean;
  text?: string;
}

const CustomCursor: React.FC = () => {
  // local visible state for cursor behaviour
  const [cursorState, setCursorState] = useState<CursorState>({
    isHovering: false,
    isProject: false,
    text: undefined,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [portalEl, setPortalEl] = useState<HTMLElement | null>(null);

  // raw pointer targets (motion)
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  // label uses left/top (no transform conflict)
  const labelLeft = useMotionValue(0);
  const labelTop = useMotionValue(0);

  // springs (snappy main cursor, trailing dot, smooth label)
  const smoothX = useSpring(cursorX, { damping: 28, stiffness: 700 });
  const smoothY = useSpring(cursorY, { damping: 28, stiffness: 700 });
  const smoothDotX = useSpring(dotX, { damping: 30, stiffness: 300 });
  const smoothDotY = useSpring(dotY, { damping: 30, stiffness: 300 });
  const smoothLabelLeft = useSpring(labelLeft, { damping: 28, stiffness: 650 });
  const smoothLabelTop = useSpring(labelTop, { damping: 28, stiffness: 650 });

  // create portal container on client
  useEffect(() => {
    if (typeof document === "undefined") return; // SSR guard

    const el = document.createElement("div");
    el.id = "custom-cursor-root";
    // ensure it doesn't interfere with layout and sits above everything
    el.style.position = "fixed";
    el.style.top = "0";
    el.style.left = "0";
    el.style.width = "0";
    el.style.height = "0";
    el.style.pointerEvents = "none";
    document.body.appendChild(el);
    setPortalEl(el);
    setMounted(true);

    return () => {
      if (el.parentNode) el.parentNode.removeChild(el);
      setMounted(false);
      setPortalEl(null);
    };
  }, []);

  // detect mobile (simple)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // hide native cursor on mount, restore on unmount
  useEffect(() => {
    if (!mounted) return;
    const originalCursor = document.documentElement.style.cursor || "";
    // hide default cursor so custom is visible
    document.documentElement.style.cursor = "none";
    return () => {
      document.documentElement.style.cursor = originalCursor;
    };
  }, [mounted]);

  // attach listeners only on client and when not mobile
  useEffect(() => {
    if (!mounted || isMobile) return;

    const TEXT_VERTICAL_OFFSET = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const cx = e.clientX;
      const cy = e.clientY;

      // main cursor center (offset half size)
      cursorX.set(cx - 10);
      cursorY.set(cy - 10);

      // inner dot center
      dotX.set(cx - 3);
      dotY.set(cy - 3);

      // label left/top (no transform)
      labelLeft.set(cx);
      labelTop.set(cy - TEXT_VERTICAL_OFFSET);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isProject = !!target.closest("[data-project]");
      const isLink = target.tagName === "A" || !!target.closest("a");
      const isButton = target.tagName === "BUTTON" || !!target.closest("button");

      if (isProject) {
        setCursorState({ isHovering: true, isProject: true, text: "View" });
      } else if (isLink || isButton) {
        setCursorState({ isHovering: true, isProject: false, text: undefined });
      }
    };

    const handleMouseOut = () => {
      setCursorState((prev) => ({ ...prev, isHovering: false, isProject: false, text: undefined }));
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mounted, isMobile, cursorX, cursorY, dotX, dotY, labelLeft, labelTop]);

  // do not render on SSR or mobile (or until portal created)
  if (!mounted || !portalEl || isMobile) return null;

  // computed size
  const mainCursorSize = cursorState.isHovering ? (cursorState.isProject ? 28 : 24) : 18;

  const cursorMarkup = (
    <>
      {/* Main circle (transform via x/y springs). very high z so it's above header */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          width: mainCursorSize,
          height: mainCursorSize,
          borderRadius: "50%",
        }}
        className="fixed pointer-events-none z-[99999]"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "rgba(0,0,0,0.28)",
            pointerEvents: "none",
          }}
        />
      </motion.div>

      {/* Small inner dot */}
      <motion.div
        style={{
          x: smoothDotX,
          y: smoothDotY,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "black",
        }}
        className="fixed pointer-events-none z-[99999]"
      />

      {/* Floating "View" label */}
      <AnimatePresence>
        {cursorState.isProject && cursorState.text && (
          <motion.div
            key="view-label-outer"
            style={{
              left: smoothLabelLeft,
              top: smoothLabelTop,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08 }}
            className="fixed pointer-events-none z-[99999]"
          >
            <motion.div
              initial={{ transform: "translate(-50%,-120%) scale(0.86)" }}
              animate={{ transform: "translate(-50%,-100%) scale(1)" }}
              exit={{ transform: "translate(-50%,-120%) scale(0.9)" }}
              transition={{ type: "spring", stiffness: 900, damping: 14, mass: 0.5 }}
              style={{
                transformOrigin: "50% 100%",
                display: "inline-block",
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(0, 0, 0, 0.51)",
                color: "#ffffffff",
                boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                fontSize: 14,
                fontWeight: 600,
                pointerEvents: "none",
                whiteSpace: "nowrap",
                position: "relative",
                left: 0,
                top: 0,
                transform: "translate(-50%,-100%)",
              }}
            >
              {cursorState.text}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return createPortal(cursorMarkup, portalEl);
};

export default CustomCursor;
