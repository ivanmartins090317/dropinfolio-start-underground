"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

type IconComponent = React.ComponentType<{ className?: string }>;

interface MinimalistHeroProps {
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: IconComponent; href: string }[];
  locationText: string;
  className?: string;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: EASE, delay },
});

const SocialIcon = ({
  href,
  icon: Icon,
}: {
  href: string;
  icon: IconComponent;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/50 transition-colors hover:text-brand"
  >
    <Icon className="h-5 w-5" />
  </a>
);

export function MinimalistHero({
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Imagem: desaparece com opacity
  const imageOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // Bola vermelha: sobe e desaparece
  const circleY = useTransform(scrollYProgress, [0, 0.65], ["0%", "-70%"]);
  const circleOpacity = useTransform(scrollYProgress, [0.05, 0.5], [1, 0]);

  // Texto esquerdo: desliza para a esquerda e some
  const leftX = useTransform(scrollYProgress, [0.05, 0.55], ["0%", "-90%"]);
  const leftOpacity = useTransform(scrollYProgress, [0.05, 0.45], [1, 0]);

  // Headline direita: desliza para a direita e some
  const rightX = useTransform(scrollYProgress, [0.05, 0.55], ["0%", "90%"]);
  const rightOpacity = useTransform(scrollYProgress, [0.05, 0.45], [1, 0]);

  // Footer: desaparece suavemente
  const footerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const noScroll = prefersReducedMotion ?? false;

  return (
    // Container h-[200vh] + sticky cria o "scroll de saída" cinematográfico
    <div ref={containerRef} className="relative h-[200vh]">
      <div
        className={cn(
          "sticky top-0 flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-black pt-[72px] px-8 pb-8 md:px-12 md:pb-12",
          className,
        )}
      >
        {/* Main Content Area */}
        <div className="relative grid w-full max-w-7xl grow grid-cols-1 items-center md:grid-cols-3">
          {/* Esquerda — texto desliza para a esquerda */}
          <motion.div
            className="z-20 order-2 md:order-1 text-center md:text-left"
            style={noScroll ? {} : { x: leftX, opacity: leftOpacity }}
          >
            <motion.div {...fadeUp(0.8)}>
              <p className="mx-auto max-w-xs font-sans text-sm leading-relaxed text-white/70 md:mx-0">
                {mainText}
              </p>
              <a
                href={readMoreLink}
                className="mt-4 inline-block font-sans text-sm font-medium text-brand underline decoration-from-font hover:text-neon transition-colors"
              >
                Saiba mais
              </a>
            </motion.div>
          </motion.div>

          {/* Centro — círculo sobe + imagem some */}
          <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
            {/* Wrapper de scroll para o círculo */}
            <motion.div
              className="absolute z-0 flex items-center justify-center"
              style={noScroll ? {} : { y: circleY, opacity: circleOpacity }}
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                className="h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]"
                style={{ backgroundColor: "#E8001C" }}
              />
            </motion.div>

            {/* Wrapper de scroll para a imagem */}
            <motion.div
              className="relative z-10"
              style={noScroll ? {} : { opacity: imageOpacity }}
            >
              <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="h-auto w-64 object-cover md:80 lg:w-96"
                style={{ scale: 1.5 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/400x600/E8001C/ffffff?text=Image`;
                }}
              />
            </motion.div>
          </div>

          {/* Direita — headline desliza para a direita */}
          <motion.div
            className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
            style={noScroll ? {} : { x: rightX, opacity: rightOpacity }}
          >
            <motion.div {...fadeUp(1.0)}>
              <h1 className="font-headline text-7xl text-white uppercase leading-none md:text-8xl lg:text-9xl">
                {overlayText.part1}
                <br />
                <span className="text-white">{overlayText.part2}</span>
              </h1>
            </motion.div>
          </motion.div>
        </div>

        {/* Gradiente de transição inferior */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black to-transparent z-40" />

        {/* Footer — desaparece suavemente */}
        <motion.footer
          className="z-30 flex w-full max-w-7xl items-center justify-between"
          style={noScroll ? {} : { opacity: footerOpacity }}
        >
          <motion.div {...fadeUp(1.1)} className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <SocialIcon key={index} href={link.href} icon={link.icon} />
            ))}
          </motion.div>

          <motion.div
            {...fadeUp(1.2)}
            className="font-sans text-sm font-medium text-white/60 uppercase tracking-widest"
          >
            {locationText}
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
}
