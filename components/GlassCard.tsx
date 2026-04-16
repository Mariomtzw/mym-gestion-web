"use client";

import { HTMLAttributes, ReactNode, useState } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  goldHover?: boolean;
}

export function GlassCard({ children, className = "", goldHover = true, style, onMouseEnter, onMouseLeave, ...props }: GlassCardProps) {
  const [hovered, setHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    background: "rgba(5, 5, 5, 0.78)",
    WebkitBackdropFilter: "blur(60px) saturate(160%)",
    backdropFilter: "blur(60px) saturate(160%)",
    border: goldHover && hovered
      ? "1px solid rgba(245, 203, 135, 0.75)"
      : "1px solid rgba(245, 203, 135, 0.18)",
    boxShadow: "0 16px 48px 0 rgba(0,0,0,0.70), inset 0 1px 1px rgba(255,255,255,0.06)",
    borderRadius: "28px",
    transition: "border-color 0.3s ease",
    ...style,
  };

  return (
    <div
      className={`transition-all duration-300 ${className}`}
      style={baseStyle}
      onMouseEnter={(e) => { setHovered(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHovered(false); onMouseLeave?.(e); }}
      {...props}
    >
      {children}
    </div>
  );
}
