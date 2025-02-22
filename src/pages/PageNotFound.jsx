import { useEffect, useRef } from "react";

function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3,
      });
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = "#253b7e";
        ctx.globalAlpha = 0.1;
        ctx.fill();
      });
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      aria-hidden="true"
    />
  );
}

export default function PageNotFound() {
  return (
    <div className="relative z-0 flex min-h-[60dvh] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white to-blue-100/20 p-4">
      <Particles />

      <div className="w-full max-w-md space-y-8 text-center">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 z-0 h-full w-full animate-[spin_20s_linear_infinite] rounded-full bg-[#253b7e]/[0.02]" />
          <div className="absolute -right-1/2 -bottom-1/2 z-0 h-full w-full animate-[spin_25s_linear_infinite] rounded-full bg-[#253b7e]/[0.02]" />
        </div>

        <div className="relative">
          {/* 404 Numbers with enhanced animation */}
          <div className="mb-8 flex items-center justify-center gap-4">
            {["4", "0", "4"].map((number, i) => (
              <div key={i} className="relative">
                <span
                  className={`animate-float inline-block text-8xl font-bold text-[#253b7e] ${i === 1 ? "delay-100" : i === 2 ? "delay-800" : ""} `}
                  style={{
                    textShadow: "0 10px 20px rgba(37, 59, 126, 0.15)",
                  }}
                >
                  {number}
                </span>
                <div
                  className={`animate-shadow absolute -bottom-8 left-1/2 z-0 h-2 w-8 -translate-x-1/2 rounded-full bg-[#253b7e]/10 blur-sm ${i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""} `}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative space-y-6">
          <h1
            className="animate-fade-up text-3xl font-bold text-[#253b7e] opacity-0 [--delay:200ms]"
            style={{
              textShadow: "0 4px 8px rgba(37, 59, 126, 0.1)",
            }}
          >
            صفحه مورد نظر یافت نشد
          </h1>

          <p className="animate-fade-up mx-auto max-w-sm text-[#253b7e]/70 opacity-0 [--delay:400ms]">
            چیزی در اینجا پیدا نشد. شاید جستجو بتواند به شما کمک کند
          </p>

          <a
            href="/"
            className="group animate-fade-up relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#253b7e] px-6 py-3 font-medium text-white opacity-0 transition-all duration-300 [--delay:600ms] hover:scale-105"
            style={{
              boxShadow: "0 10px 30px -10px rgba(37, 59, 126, 0.5)",
            }}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#253b7e] via-white/10 to-[#253b7e] opacity-0 transition-opacity group-hover:opacity-100" />
            <svg
              viewBox="0 0 24 24"
              className="relative h-4 w-4 stroke-2"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="relative">بازگشت به صفحه اصلی</span>
          </a>
        </div>
      </div>
    </div>
  );
}
