import type { SVGProps } from "react";

interface OwlLogoProps extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

export function OwlLogo({
  width = 140,
  height = 140,
  className,
  ...props
}: OwlLogoProps) {
  return (
    <svg
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      aria-label="Profeli — Coruja"
      role="img"
      {...props}
    >
      <rect x="18" y="16" width="104" height="114" rx="26" fill="#DCEAE6" />
      <path d="M38,18 L46,-2 L56,18" fill="#DCEAE6" />
      <path d="M84,18 L94,-2 L102,18" fill="#DCEAE6" />
      <rect x="32" y="32" width="76" height="76" rx="18" fill="white" stroke="#2F6E6A" strokeWidth="2.5" />
      <rect x="40" y="42" rx="8" width="24" height="24" fill="white" stroke="#2F6E6A" strokeWidth="2.5" />
      <circle cx="52" cy="54" r="6" fill="#2F6E6A" />
      <circle cx="54" cy="52" r="2" fill="white" />
      <rect x="76" y="42" rx="8" width="24" height="24" fill="white" stroke="#2F6E6A" strokeWidth="2.5" />
      <circle cx="88" cy="54" r="6" fill="#2F6E6A" />
      <circle cx="90" cy="52" r="2" fill="white" />
      <path d="M70,70 L65,78 L75,78 Z" fill="#C97B3B" stroke="#2F6E6A" strokeWidth="1" />
      <path d="M38,72 Q44,80 38,88" fill="none" stroke="#2F6E6A" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M102,72 Q96,80 102,88" fill="none" stroke="#2F6E6A" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M52,108 L46,118 M52,108 L52,118 M52,108 L58,118" stroke="#2F6E6A" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M88,108 L82,118 M88,108 L88,118 M88,108 L94,118" stroke="#2F6E6A" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
