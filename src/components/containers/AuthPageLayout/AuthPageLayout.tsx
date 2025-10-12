import { useNavigate } from "react-router-dom";

type PropsTypes = {
  children?: React.ReactNode;
};

const AuthPageLayout = ({ children }: PropsTypes) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Blue Panel - 25% width with Wave Pattern */}
      <div className="hidden lg:flex lg:w-1/4 bg-[#2B7DE9] relative overflow-hidden">
        {/* Smooth Flowing Wave Lines Pattern - Matching your design */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 1000"
          preserveAspectRatio="none"
        >
          {/* Smooth horizontal wave curves */}
          {[...Array(150)].map((_, i) => {
            const y = i * 6.5;
            const amplitude = 80 + Math.sin(i * 0.1) * 30;
            const phase = i * 0.08;

            return (
              <path
                key={`wave-${i}`}
                d={`M 0 ${y} Q ${100 + Math.sin(phase) * 40} ${y - amplitude} ${200} ${y} T 400 ${y}`}
                stroke="rgba(255, 255, 255, 0.15)"
                strokeWidth="0.8"
                fill="none"
              />
            );
          })}

          {/* Additional smooth curves for depth */}
          {[...Array(120)].map((_, i) => {
            const y = i * 8;
            const curve = Math.sin(i * 0.15) * 60;

            return (
              <path
                key={`smooth-${i}`}
                d={`M 0 ${y} Q 200 ${y + curve} 400 ${y}`}
                stroke="rgba(255, 255, 255, 0.12)"
                strokeWidth="0.6"
                fill="none"
              />
            );
          })}
        </svg>
      </div>

      {/* Right White Panel - 75% width */}
      <div className="flex-1 lg:w-3/4 flex items-center justify-center bg-white relative overflow-hidden">
        {/* Logo */}
        <div onClick={handleLogoClick} className="absolute top-8 left-8 z-10 flex items-center gap-3">
          <img
            src="/logo.png"
            alt="PulseBills Logo"
            className="w-[80px] h-auto object-contain"
          />
          <h1 className="text-2xl font-semibold text-gray-900">
            <span className="text-blue-500">Pulse</span>
            <span className="text-green-500">Bills.</span>
          </h1>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Heartbeat wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 flex items-center justify-center overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1400 100" // increased viewBox width to accommodate larger gaps
            preserveAspectRatio="none"
          >
            <defs>
              {/* Gradient fade starting from 6th pulse */}
              <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="70%" stopColor="#3b82f6" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="
        M0 50
        L140 50
        L155 35
        L170 55
        L185 25
        L200 75
        L215 50
        L280 50
        L295 35
        L310 55
        L325 25
        L340 75
        L355 50
        L420 50
        L435 35
        L450 55
        L465 25
        L480 75
        L495 50
        L560 50
        L575 35
        L590 55
        L605 25
        L620 75
        L635 50
        L700 50
        L715 35
        L730 55
        L745 25
        L760 75
        L775 50
        L840 50
        L855 35
        L870 55
        L885 25
        L900 75
        L915 50
      "
              stroke="url(#fade)"
              strokeWidth="2"
              fill="none"
            >
              {/* Subtle blink/pulse effect */}
              <animate
                attributeName="stroke-opacity"
                values="0.4;1;0.4"
                dur="1.2s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-md px-6 py-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthPageLayout;
