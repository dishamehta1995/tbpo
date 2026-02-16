import React from "react";

export function RightCurvedGrid() {
  return (
    <div
      className="absolute bottom-0 right-0 left-0 pointer-events-none overflow-hidden"
      style={{ height: "420px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.08) 2px, transparent 2px)",
          backgroundSize: "26px 26px",

          // Curved rising mask from bottom-right
          WebkitMaskImage:
            "radial-gradient(120% 120% at 100% 100%, black 45%, transparent 72%)",
          maskImage:
            "radial-gradient(120% 120% at 100% 100%, black 45%, transparent 72%)",
        }}
      />
    </div>
  );
}
