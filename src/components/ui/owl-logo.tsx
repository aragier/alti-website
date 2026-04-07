interface OwlLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export function OwlLogo({ width = 40, height = 40, className }: OwlLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background */}
      <rect x="18" y="16" width="104" height="114" rx="26" fill="#dbeafe" />
      {/* Ear tufts */}
      <path d="M38,18 L46,-2 L56,18" fill="#dbeafe" />
      <path d="M84,18 L94,-2 L102,18" fill="#dbeafe" />
      {/* White body */}
      <rect x="32" y="32" width="76" height="76" rx="18" fill="white" stroke="#2563eb" strokeWidth="2.5" />
      {/* Left eye */}
      <rect x="40" y="42" rx="8" width="24" height="24" fill="white" stroke="#2563eb" strokeWidth="2.5" />
      <circle cx="52" cy="54" r="6" fill="#2563eb" />
      <circle cx="54" cy="52" r="2" fill="white" />
      {/* Right eye */}
      <rect x="76" y="42" rx="8" width="24" height="24" fill="white" stroke="#2563eb" strokeWidth="2.5" />
      <circle cx="88" cy="54" r="6" fill="#2563eb" />
      <circle cx="90" cy="52" r="2" fill="white" />
      {/* Beak */}
      <path d="M70,70 L65,78 L75,78 Z" fill="#f59e0b" stroke="#2563eb" strokeWidth="1" />
      {/* Wing hints */}
      <path d="M38,72 Q44,80 38,88" fill="none" stroke="#2563eb" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      <path d="M102,72 Q96,80 102,88" fill="none" stroke="#2563eb" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
      {/* Feet */}
      <path d="M52,108 L46,118 M52,108 L52,118 M52,108 L58,118" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M88,108 L82,118 M88,108 L88,118 M88,108 L94,118" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
