import React, { useRef } from 'react';
import { useInView } from 'motion/react';

export type ShadyHighlightColor =
  | 'turquoise' // #11FEEE — Shady Side Academy signature fluorescent turquoise
  | 'blue' // #11FEEE — Blue highlight variant
  | 'green' // #1FFF01 — Shady Side Academy fluorescent green
  | 'yellow' // #FFFF01 — Shady Side Academy fluorescent yellow
  | 'pink' // #FF1CA5 — Shady Side Academy fluorescent pink
  | 'amber' // #FFB81C — Shady Side Academy warm yellow
  | 'darkblue' // #002B49 — School signature dark blue / navy
  | 'dark-blue'
  | 'blue-600';

interface ShadyHighlightProps {
  children: React.ReactNode;
  color?: ShadyHighlightColor | string;
  className?: string;
  delay?: number;
  heightPercent?: number; // default: 42% matching SSA's 40%
}

const COLOR_MAP: Record<string, string> = {
  turquoise: '#11FEEE',
  blue: '#11FEEE',
  green: '#1FFF01',
  yellow: '#FFFF01',
  pink: '#FF1CA5',
  amber: '#FFB81C',
  darkblue: '#002B49',
  'dark-blue': '#002B49',
  'blue-600': '#2563EB',
  blue600: '#2563EB',
};

/**
 * ShadyHighlight:
 * Faithful recreation of the heading highlighter effect from Shady Side Academy (https://www.shadysideacademy.org/).
 *
 * Requirements:
 * - Slide transition: As the user scrolls down, the blue highlight sweeps from left to right across the heading.
 * - Only the blue / turquoise highlight has the slide transition; other colors remain static.
 * - Once scrolled into view, the highlight stays there permanently (once: true).
 * - Highlights the lower 42% of text line height from baseline upward, allowing dark typography to remain crisp.
 */
export const ShadyHighlight: React.FC<ShadyHighlightProps> = ({
  children,
  color = 'turquoise',
  className = '',
  delay = 120,
  heightPercent = 42,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10px 0px -60px 0px' });

  const hexColor = COLOR_MAP[color] || (color.startsWith('#') ? color : COLOR_MAP.turquoise);

  // Animates width from 0% to 100% as scrolled into view, then stays there permanently
  const currentWidth = isInView ? '100%' : '0%';

  return (
    <span
      ref={ref}
      className={`relative inline font-inherit text-inherit px-1 -mx-0.5 rounded-[2px] select-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${hexColor}, ${hexColor})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 100%',
        backgroundSize: `${currentWidth} ${heightPercent}%`,
        transition: `background-size 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
      }}
    >
      {children}
    </span>
  );
};

export default ShadyHighlight;
