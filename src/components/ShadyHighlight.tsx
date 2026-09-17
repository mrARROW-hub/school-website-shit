import React, { useRef } from 'react';
import { useInView } from 'motion/react';

export type ShadyHighlightColor =
  | 'turquoise' // #11FEEE — Shady Side Academy signature fluorescent turquoise
  | 'blue' // #11FEEE — Blue highlight variant
  | 'green' // #1FFF01 — Shady Side Academy fluorescent green
  | 'yellow' // #FFFF01 — Shady Side Academy fluorescent yellow
  | 'pink' // #FF1CA5 — Shady Side Academy fluorescent pink
  | 'amber'; // #FFB81C — Shady Side Academy warm yellow

interface ShadyHighlightProps {
  children: React.ReactNode;
  color?: ShadyHighlightColor;
  className?: string;
  delay?: number;
  heightPercent?: number; // default: 42% matching SSA's 40%
}

const COLOR_MAP: Record<ShadyHighlightColor, string> = {
  turquoise: '#11FEEE',
  blue: '#11FEEE',
  green: '#1FFF01',
  yellow: '#FFFF01',
  pink: '#FF1CA5',
  amber: '#FFB81C',
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

  const isBlueHighlight = color === 'turquoise' || color === 'blue';
  const hexColor = COLOR_MAP[color] || COLOR_MAP.turquoise;

  // For blue highlight: animates width from 0% to 100% as scrolled into view, then stays there.
  // For other colors: stays static at 100% without slide transition.
  const currentWidth = isBlueHighlight ? (isInView ? '100%' : '0%') : '100%';

  return (
    <span
      ref={ref}
      className={`relative inline font-inherit text-inherit px-1 -mx-0.5 rounded-[2px] select-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${hexColor}, ${hexColor})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 100%',
        backgroundSize: `${currentWidth} ${heightPercent}%`,
        transition: isBlueHighlight
          ? `background-size 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`
          : 'none',
        WebkitBoxDecorationBreak: 'clone',
        boxDecorationBreak: 'clone',
      }}
    >
      {children}
    </span>
  );
};

export default ShadyHighlight;
