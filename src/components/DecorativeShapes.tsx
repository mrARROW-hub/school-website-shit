import React from 'react';
import { motion } from 'motion/react';

/**
 * Replicated visual shape language inspired by the International School of Brussels (ISB - isb.be):
 * 1. Purple Stairs (#861fce) - Growth, structured progression, academic levels
 * 2. Pink Circle/Arch (#fe76b4) - Inclusivity, community, welcoming spirit
 * 3. Blue Hourglass/Prism (#0064ec) - Focus, intellect, symmetry, rigor
 * 4. Yellow Rhythmic Bars (#FFC548) - Vibrancy, diversity, expression
 * 5. Green Quatrefoil Flower (#00b273) - Flourishing, creativity, environment
 * 6. Coral Red Triangle (#FF3D37) - Empowerment, leadership, forward drive
 */

export interface ShapeProps {
  className?: string;
  size?: number | string;
  color?: string;
}

// 1. Purple Stairs (Stepped geometric progression)
export const ShapePurpleStairs: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#861fce',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 29V3h9v9h9v9h8v8H3z"
      fill={color}
    />
  </svg>
);

// 2. Pink Circle / Arch (Soft welcoming community)
export const ShapePinkCircle: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#fe76b4',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="13.5" fill={color} />
  </svg>
);

// 3. Blue Hourglass / Prism (Pinched polygon)
export const ShapeBlueHourglass: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#0064ec',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 3 L11 16 L3 29 H29 L21 16 L29 3 Z"
      fill={color}
    />
  </svg>
);

// 4. Yellow Rhythmic Bars (Triple horizontal pill stack)
export const ShapeYellowBars: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#FFC548',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <rect x="3" y="4" width="26" height="5.5" rx="2.75" fill={color} />
    <rect x="3" y="13.25" width="26" height="5.5" rx="2.75" fill={color} />
    <rect x="3" y="22.5" width="26" height="5.5" rx="2.75" fill={color} />
  </svg>
);

// 5. Green Quatrefoil Flower (4-lobe organic bloom)
export const ShapeGreenFlower: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#00b273',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M16 2.5C18.5 2.5 21 4.5 21.5 7C24.5 6.5 27.5 9 27.5 12C27.5 14.5 25.5 17 23 17.5C23.5 20.5 21 23.5 18 23.5C15.5 23.5 13 21.5 12.5 19C9.5 19.5 6.5 17 6.5 14C6.5 11.5 8.5 9 11 8.5C10.5 5.5 13 2.5 16 2.5Z"
      fill={color}
      transform="translate(1, 1)"
    />
    {/* Geometric 4-circle bloom */}
    <circle cx="11.5" cy="11.5" r="7" fill={color} />
    <circle cx="20.5" cy="11.5" r="7" fill={color} />
    <circle cx="11.5" cy="20.5" r="7" fill={color} />
    <circle cx="20.5" cy="20.5" r="7" fill={color} />
    <rect x="11.5" y="11.5" width="9" height="9" fill={color} />
  </svg>
);

// 6. Coral Red Triangle (Empowerment / forward peak)
export const ShapeRedTriangle: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#FF3D37',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <polygon points="16,3 30,29 2,29" fill={color} />
  </svg>
);

// 7. Pink Bubble / Arch (ISB quadrant arch motif)
export const ShapePinkArch: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#fe76b4',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 3h13a13 13 0 0 1 13 13v13H3V3z"
      fill={color}
    />
  </svg>
);

// 8. Cyan/Blue Wave Zigzag
export const ShapeCyanWave: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#0284c7',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M3 11L10 4l7 7 7-7 5 5v7l-5-5-7 7-7-7-7 7V11z"
      fill={color}
    />
  </svg>
);

/**
 * ISB Signature Red Gemstone / Faceted Diamond Corner Accent
 * Replicates the exact top-right corner decorative design from https://www.isb.be/
 * in the "Discover & Experience" section (.hp-highlights:before).
 * Uses ISB's signature coral red #FF3D37 and 4-facet geometric motif.
 */
export const ISBRedCornerAccent: React.FC<{
  className?: string;
  size?: number | string;
  color?: string;
}> = ({
  className = '',
  size = 76,
  color = '#FF3D37',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1024 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none pointer-events-none transition-transform duration-300 ${className}`}
    aria-hidden="true"
  >
    <g transform="matrix(1 0 0 -1 0 960)">
      <path
        d="M512 448.003v-256.015l-255.982-255.988h-256.018v255.988l256.018 256.015h255.982zM512 960v-256.018l-255.982-255.982h-256.018v255.982l256.018 256.018h255.982zM1024 448.003v-256.015l-255.982-255.988h-256.018v255.988l256.018 256.015h255.982zM1024 960v-256.018l-255.982-255.982h-256.018v255.982l256.018 256.018h255.982z"
        fill={color}
      />
    </g>
  </svg>
);

export type ISBShapeType =
  | 'purple-stairs'
  | 'pink-circle'
  | 'blue-hourglass'
  | 'yellow-bars'
  | 'green-flower'
  | 'red-triangle'
  | 'pink-arch'
  | 'double-arrows'
  | 'four-petal-flower';

export const ShapeFourPetalFlower: React.FC<ShapeProps> = ({
  className = '',
  size = 260,
  color = '#FFC53D',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 260 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block select-none pointer-events-none ${className}`}
    aria-hidden="true"
  >
    <g transform="translate(130, 130) rotate(45)">
      {/* 4 Petals oriented as a diagonal cross (X) matching Screenshot (443).png */}
      <path d="M 0 0 C -45 -25 -55 -85 0 -125 C 55 -85 45 -25 0 0 Z" fill={color} />
      <path d="M 0 0 C 25 -45 85 -55 125 0 C 85 55 25 45 0 0 Z" fill={color} />
      <path d="M 0 0 C 45 25 55 85 0 125 C -55 85 -45 25 0 0 Z" fill={color} />
      <path d="M 0 0 C -25 45 -85 55 -125 0 C -85 -55 -25 -45 0 0 Z" fill={color} />
    </g>
  </svg>
);

export const ShapeDoubleArrows: React.FC<ShapeProps> = ({
  className = '',
  size = 28,
  color = '#FFC548',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block transition-transform duration-300 hover:scale-110 ${className}`}
    aria-hidden="true"
  >
    <polygon points="2,2 28,16 2,30" fill={color} />
    <polygon points="32,2 58,16 32,30" fill={color} />
  </svg>
);

export const ISBShape: React.FC<{
  type: ISBShapeType;
  size?: number | string;
  className?: string;
  color?: string;
}> = ({ type, size = 28, className = '', color }) => {
  switch (type) {
    case 'purple-stairs':
      return <ShapePurpleStairs size={size} className={className} color={color} />;
    case 'pink-circle':
      return <ShapePinkCircle size={size} className={className} color={color} />;
    case 'blue-hourglass':
      return <ShapeBlueHourglass size={size} className={className} color={color} />;
    case 'yellow-bars':
      return <ShapeYellowBars size={size} className={className} color={color} />;
    case 'green-flower':
      return <ShapeGreenFlower size={size} className={className} color={color} />;
    case 'red-triangle':
      return <ShapeRedTriangle size={size} className={className} color={color} />;
    case 'pink-arch':
      return <ShapePinkArch size={size} className={className} color={color} />;
    case 'double-arrows':
      return <ShapeDoubleArrows size={size} className={className} color={color} />;
    case 'four-petal-flower':
      return <ShapeFourPetalFlower size={size} className={className} color={color} />;
    default:
      return null;
  }
};

/**
 * Word Highlight with companion ISB Shape tag
 * Replicates ISB's <span class="shape_blue_hourglass">school</span> pattern
 */
export const ISBWordBadge: React.FC<{
  children: React.ReactNode;
  shape: ISBShapeType;
  label?: string;
  light?: boolean;
}> = ({ children, shape, label, light = false }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold ${
        light ? 'text-white' : 'text-[#111]'
      } group cursor-default`}
    >
      <span
        className={`relative inline-block border-b-2 ${
          light ? 'border-white/40 group-hover:border-white' : 'border-transparent group-hover:border-current'
        } transition-colors`}
      >
        {children}
      </span>
      <span
        title={label}
        className={`inline-flex items-center justify-center -translate-y-0.5 transition-transform duration-200 group-hover:scale-125 group-hover:rotate-6 ${
          light ? 'bg-white/15 rounded-md p-1 backdrop-blur-xs' : ''
        }`}
      >
        <ISBShape type={shape} size={light ? 20 : 18} />
      </span>
    </span>
  );
};

/**
 * Signature ISB PLM 4-Petal / Quadrant Flower Shape
 * Glyph name: plm-shape (\e94f) from ISB's official IcoMoon font library
 * Used across isb.be for signature branding and bottom-left corner cutouts
 */
export const ISBPLMShape: React.FC<{
  size?: number | string;
  className?: string;
  color?: string;
}> = ({ size = 48, className = '', color = '#0064ec' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 1048 1024"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <g transform="matrix(1 0 0 -1 0 960)">
      <path
        d="M526.242 960h522.139v-512.216c-288.36 0-522.139 229.321-522.139 512.216zM4.433 960h522.139v-512.216c-288.359 0-522.139 229.321-522.139 512.216zM526.242 448.217h522.139v-512.217c-288.36 0-522.139 229.321-522.139 512.217zM4.433 448.217h522.139v-512.217c-288.359 0-522.139 229.321-522.139 512.217z"
        fill={color}
      />
    </g>
  </svg>
);

/**
 * ISB Signature Bottom-Left Corner Design
 * Replicates the custom corner element from isb.be learning/journey/testimonials sections
 * Uses the exact ISB royal blue #0064ec and signature 4-petal quadrant PLM glyph
 */
export const ISBCornerDesign: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 44 }) => {
  return (
    <div
      className={`absolute bottom-0 left-0 bg-white pt-2 sm:pt-2.5 pr-2.5 sm:pr-3.5 pb-0 pl-0 rounded-tr-2xl border-0 border-none z-20 flex items-end justify-start pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <ISBPLMShape size={size} color="#0064ec" />
    </div>
  );
};

export type ISBCornerVariant =
  | 'blue'
  | 'ice'
  | 'purple'
  | 'green'
  | 'yellow'
  | 'pink'
  | 'navy'
  | 'white';

export type ISBCornerPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'top-left'
  | 'top-right';

export interface ISBCornerCardProps {
  children: React.ReactNode;
  variant?: ISBCornerVariant;
  cornerPosition?: ISBCornerPosition;
  shape?: ISBShapeType | 'plm';
  shapeColor?: string;
  hasBorder?: boolean;
  cutoutBg?: string;
  className?: string;
  innerClassName?: string;
  cornerSize?: number;
}

const VARIANT_STYLES: Record<
  ISBCornerVariant,
  {
    bg: string;
    text: string;
    borderColor: string;
    defaultShape: ISBShapeType | 'plm';
    defaultShapeColor: string;
  }
> = {
  blue: {
    bg: 'bg-[#0064ec]',
    text: 'text-white',
    borderColor: 'border-[#0050c8]',
    defaultShape: 'plm',
    defaultShapeColor: '#0064ec',
  },
  ice: {
    bg: 'bg-[#f0f6ff]',
    text: 'text-[#0a2540]',
    borderColor: 'border-[#b8d7fe]',
    defaultShape: 'blue-hourglass',
    defaultShapeColor: '#0064ec',
  },
  purple: {
    bg: 'bg-[#f7f2fe]',
    text: 'text-[#2d1254]',
    borderColor: 'border-[#d9c1f8]',
    defaultShape: 'purple-stairs',
    defaultShapeColor: '#861fce',
  },
  green: {
    bg: 'bg-[#effaf3]',
    text: 'text-[#0d3b25]',
    borderColor: 'border-[#a3e8c4]',
    defaultShape: 'green-flower',
    defaultShapeColor: '#00b273',
  },
  yellow: {
    bg: 'bg-[#fff9eb]',
    text: 'text-[#4a3200]',
    borderColor: 'border-[#fee0a4]',
    defaultShape: 'yellow-bars',
    defaultShapeColor: '#FFC548',
  },
  pink: {
    bg: 'bg-[#fef2f8]',
    text: 'text-[#4c0f2f]',
    borderColor: 'border-[#fbc5df]',
    defaultShape: 'pink-circle',
    defaultShapeColor: '#fe76b4',
  },
  navy: {
    bg: 'bg-[#002244]',
    text: 'text-white',
    borderColor: 'border-[#003870]',
    defaultShape: 'blue-hourglass',
    defaultShapeColor: '#38bdf8',
  },
  white: {
    bg: 'bg-white',
    text: 'text-[#222]',
    borderColor: 'border-[#e2e8f0]',
    defaultShape: 'plm',
    defaultShapeColor: '#0064ec',
  },
};

/**
 * ISBCornerCard
 * High-craft container inspired by https://www.isb.be/
 * Features signature asymmetrical corner cutouts with custom ISB symbolic shapes,
 * rich brand color variants, and seamless border alignment without overlap.
 */
export const ISBCornerCard: React.FC<ISBCornerCardProps> = ({
  children,
  variant = 'ice',
  cornerPosition = 'bottom-left',
  shape,
  shapeColor,
  hasBorder = true,
  cutoutBg = 'bg-white',
  className = '',
  innerClassName = '',
  cornerSize = 34,
}) => {
  const config = VARIANT_STYLES[variant] || VARIANT_STYLES.ice;
  const activeShape = shape || config.defaultShape;
  const activeColor = shapeColor || config.defaultShapeColor;

  // Asymmetric corner radius mapping for the card
  let cardRadius = 'rounded-2xl sm:rounded-3xl';
  let cutoutPosition = '';
  let cutoutRadius = '';
  let cutoutBorders = '';
  let cutoutLayout = '';

  if (cornerPosition === 'bottom-left') {
    cardRadius = 'rounded-2xl sm:rounded-3xl rounded-bl-none';
    cutoutPosition = hasBorder ? '-bottom-[2px] -left-[2px]' : 'bottom-0 left-0';
    cutoutRadius = 'rounded-tr-2xl';
    cutoutBorders = hasBorder
      ? `border-t-2 border-r-2 ${config.borderColor} border-b-0 border-l-0`
      : 'border-0 border-none';
    cutoutLayout = 'pt-2 sm:pt-2.5 pr-2.5 sm:pr-3.5 pb-0 pl-0 items-end justify-start';
  } else if (cornerPosition === 'bottom-right') {
    cardRadius = 'rounded-2xl sm:rounded-3xl rounded-br-none';
    cutoutPosition = hasBorder ? '-bottom-[2px] -right-[2px]' : 'bottom-0 right-0';
    cutoutRadius = 'rounded-tl-2xl';
    cutoutBorders = hasBorder
      ? `border-t-2 border-l-2 ${config.borderColor} border-b-0 border-r-0`
      : 'border-0 border-none';
    cutoutLayout = 'pt-2 sm:pt-2.5 pl-2.5 sm:pl-3.5 pb-0 pr-0 items-end justify-end';
  } else if (cornerPosition === 'top-left') {
    cardRadius = 'rounded-2xl sm:rounded-3xl rounded-tl-none';
    cutoutPosition = hasBorder ? '-top-[2px] -left-[2px]' : 'top-0 left-0';
    cutoutRadius = 'rounded-br-2xl';
    cutoutBorders = hasBorder
      ? `border-b-2 border-r-2 ${config.borderColor} border-t-0 border-l-0`
      : 'border-0 border-none';
    cutoutLayout = 'pb-2 sm:pb-2.5 pr-2.5 sm:pr-3.5 pt-0 pl-0 items-start justify-start';
  } else if (cornerPosition === 'top-right') {
    cardRadius = 'rounded-2xl sm:rounded-3xl rounded-tr-none';
    cutoutPosition = hasBorder ? '-top-[2px] -right-[2px]' : 'top-0 right-0';
    cutoutRadius = 'rounded-bl-2xl';
    cutoutBorders = hasBorder
      ? `border-b-2 border-l-2 ${config.borderColor} border-t-0 border-r-0`
      : 'border-0 border-none';
    cutoutLayout = 'pb-2 sm:pb-2.5 pl-2.5 sm:pl-3.5 pt-0 pr-0 items-start justify-end';
  }

  const borderClass = hasBorder ? `border-2 ${config.borderColor}` : 'border-0 border-none';

  return (
    <div
      className={`relative ${config.bg} ${config.text} ${cardRadius} ${borderClass} shadow-sm transition-all duration-200 ${className}`}
    >
      {/* Corner notch design with embedded shape */}
      <div
        className={`absolute ${cutoutPosition} ${cutoutBg} ${cutoutRadius} ${cutoutBorders} ${cutoutLayout} z-20 flex pointer-events-none select-none`}
        aria-hidden="true"
      >
        {activeShape === 'plm' ? (
          <ISBPLMShape size={cornerSize} color={activeColor} />
        ) : (
          <ISBShape type={activeShape} size={cornerSize} color={activeColor} />
        )}
      </div>

      {/* Main card content */}
      <div className={`relative z-10 ${innerClassName}`}>{children}</div>
    </div>
  );
};

/**
 * Exact signature row from ISB Footer (footer--decorative--icons)
 * 6 colorful symbols in a sleek horizontal row with hover reactions
 */
export const ISBFooterIconsRow: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shapes: { type: ISBShapeType; name: string; desc: string; color: string }[] = [
    { type: 'purple-stairs', name: 'Progress', desc: 'Pre-K to Grade 12 growth stages', color: '#861fce' },
    { type: 'pink-circle', name: 'Community', desc: 'Inclusivity and belonging', color: '#fe76b4' },
    { type: 'blue-hourglass', name: 'Intellect', desc: 'Academic rigor and inquiry', color: '#0064ec' },
    { type: 'yellow-bars', name: 'Expression', desc: 'Diversity of voices and talents', color: '#FFC548' },
    { type: 'green-flower', name: 'Flourishing', desc: 'Holistic character and nature', color: '#00b273' },
    { type: 'red-triangle', name: 'Empowerment', desc: 'Leadership, courage, and action', color: '#FF3D37' },
  ];

  return (
    <div className={`isb-footer-shapes py-6 ${className}`}>
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
          {shapes.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-2 rounded-xl hover:bg-neutral-50 transition-all duration-200 cursor-pointer"
              title={`${item.name} — ${item.desc}`}
            >
              <div className="transform transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-115">
                <ISBShape type={item.type} size={30} />
              </div>
              <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#111] px-2 py-0.5 text-[10px] font-bold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 z-20 shadow-md">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * Floating decorative shapes cluster (deprecated in favor of ISBBigSectionEdgeShape)
 */
export const ISBSectionShapeAccents: React.FC<{
  leftShape?: ISBShapeType;
  rightShape?: ISBShapeType;
  className?: string;
}> = () => {
  return null;
};

/**
 * Scroll-Triggered Pop-Out Edge Shape
 * Sits flush against the section/screen edge (left or right).
 * Only half of the shape pops out into the viewport; the other half remains outside the edge.
 * As the user scrolls down, it smoothly transitions in with a spring pop effect.
 * Does NOT add any vertical space (absolute positioning within relative section).
 */
export const ISBScrollPopEdgeShape: React.FC<{
  shape: ISBShapeType;
  align?: 'left' | 'right';
  topPosition?: string;
  className?: string;
  delay?: number;
}> = ({ shape, align = 'right', topPosition = 'top-1/2', className = '', delay = 0.1 }) => {
  const isRight = align === 'right';

  return (
    <div
      className={`absolute ${topPosition} ${
        isRight ? 'right-0' : 'left-0'
      } -translate-y-1/2 z-20 select-none pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="pointer-events-auto cursor-pointer"
        initial={{
          x: isRight ? '85%' : '-85%',
          opacity: 0.8,
          scale: 0.92,
          rotate: isRight ? 14 : -14,
        }}
        whileInView={{
          x: isRight ? '50%' : '-50%',
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{ once: false, amount: 0.02, margin: '100px 0px' }}
        transition={{
          duration: 1.35,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        whileHover={{
          x: isRight ? '35%' : '-35%',
          scale: 1.08,
          transition: { duration: 0.35, ease: 'easeOut' },
        }}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 drop-shadow-lg filter transition-transform">
          <ISBShape type={shape} size="100%" className="w-full h-full" />
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Legacy placeholder for backward compatibility
 */
export const ISBBigSectionEdgeShape: React.FC<{
  shape: ISBShapeType;
  align?: 'left' | 'right';
  className?: string;
}> = () => null;
