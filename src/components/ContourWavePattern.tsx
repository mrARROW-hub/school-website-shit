import React, { useId } from 'react';
import { motion } from 'motion/react';
import { AUTHENTIC_SPIROGRAPHS } from '../data/spirographPaths';

// Coiled and twisted spirograph variants matching user uploaded reference images
export type ContourVariant =
  | 'twisted-ribbon'   // Image 1: Authentic Cyan/Green twisted ribbon with cross-hatched waist
  | 'coiled-pod'        // Image 2: Authentic Cyan/Green enclosed teardrop / cocoon loop with cross-hatched twist
  | 'vertical-spiral'   // Authentic Shady Side vertical coiled spiral ribbon
  | 'ruled-twist'       // Image 4: Hyperbolic paraboloid ruled-surface string art twist with cross-hatch lattice
  | 'cascading-fan'     // Image 3: Cascading curved radiating fan with progressive downward waterfall bend
  | 'mobius-loop'       // Figure-8 coiled Möbius twist with cross-hatched intersection
  | 'vortex-curl'       // Whirling nautilus spirograph vortex curling into an inner pod
  | 'saddle-cross'      // Intersecting dual-curved saddle twist
  // Legacy aliases mapped automatically to coiled/twisted variants (no open shapes allowed)
  | 'crest-left'
  | 'crest-right'
  | 'crest-wide'
  | 'crest-wide-right'
  | 'crest-steep'
  | 'crest-steep-right'
  | 'double-crest-left'
  | 'double-crest-right'
  | 'valley-left'
  | 'valley-right'
  | 'spiro-whorl-left'
  | 'spiro-whorl-right'
  | 'corner-fan-left'
  | 'corner-fan-right'
  | 'serpentine-left'
  | 'serpentine-right'
  | 'cascade-left'
  | 'cascade-right'
  | 'petal-curl-left'
  | 'petal-curl-right';

export interface ContourWavePatternProps {
  color?: string;           // Default: #11FEEE (Image 1/2 Cyan) or #1FFF01 (Image 3/4 Neon Green)
  secondaryColor?: string;  // Optional linear gradient end color
  variant?: ContourVariant;
  linesCount?: number;
  strokeWidth?: number;
  opacity?: number;
  className?: string;
  width?: number;
  height?: number;
  flipX?: boolean;
}

/**
 * Normalizes any variant to a coiled/twisted shape.
 * Completely eliminates open shapes in favor of coiled/twisted spirographs.
 */
function normalizeVariant(variant?: string): 'twisted-ribbon' | 'coiled-pod' | 'vertical-spiral' | 'ruled-twist' | 'cascading-fan' | 'mobius-loop' | 'vortex-curl' | 'saddle-cross' {
  switch (variant) {
    case 'twisted-ribbon':
    case 'spiro-whorl-left':
    case 'spiro-whorl-right':
    case 'double-crest-left':
    case 'double-crest-right':
      return 'twisted-ribbon';

    case 'coiled-pod':
    case 'petal-curl-left':
    case 'petal-curl-right':
    case 'corner-fan-left':
    case 'corner-fan-right':
      return 'coiled-pod';

    case 'vertical-spiral':
    case 'serpentine-left':
    case 'serpentine-right':
      return 'vertical-spiral';

    case 'ruled-twist':
    case 'crest-right':
    case 'crest-wide-right':
    case 'crest-steep-right':
    case 'valley-right':
      return 'ruled-twist';

    case 'cascading-fan':
    case 'cascade-left':
    case 'cascade-right':
      return 'cascading-fan';

    case 'mobius-loop':
    case 'crest-steep':
      return 'mobius-loop';

    case 'vortex-curl':
    case 'crest-left':
    case 'valley-left':
      return 'vortex-curl';

    case 'saddle-cross':
    case 'crest-wide':
    default:
      return 'saddle-cross';
  }
}

/**
 * Generates mathematical cross-hatched ruled-surface twist (Image 4 exact)
 */
function generateRuledTwist(w: number = 380, h: number = 260, lines: number = 18): string[] {
  const paths: string[] = [];
  // Rail 1: undulating longitudinal curves
  for (let i = 0; i < lines; i++) {
    const t = i / Math.max(1, lines - 1);
    const y1 = 15 + t * (h * 0.45);
    const c1x = w * 0.32;
    const c1y = y1 + 12;
    const c2x = w * 0.72;
    const c2y = 35 + t * (h * 0.52);
    const endX = w * (0.96 - t * 0.18);
    const endY = 55 + t * (h * 0.65);
    paths.push(
      `M 0,${y1.toFixed(1)} C ${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`
    );
  }
  // Rail 2: crossing transversal straight & curved rulings that create the diamond lattice twist
  for (let j = 0; j < lines; j++) {
    const s = j / Math.max(1, lines - 1);
    const startX = w * (0.52 + s * 0.42);
    const startY = 12;
    const endX = w * (0.42 + s * 0.54);
    const endY = h * (0.75 + s * 0.22);
    paths.push(`M ${startX.toFixed(1)},${startY.toFixed(1)} L ${endX.toFixed(1)},${endY.toFixed(1)}`);
  }
  return paths;
}

/**
 * Generates cascading radiating fan curve (Image 3 exact)
 */
function generateCascadingFan(w: number = 380, h: number = 260, lines: number = 18): string[] {
  const paths: string[] = [];
  for (let i = 0; i < lines; i++) {
    const t = i / Math.max(1, lines - 1);
    const startY = 10 + t * (h * 0.6);
    const crestY = 8 + t * (h * 0.35);
    const shoulderX = w * (0.52 + (1 - t) * 0.38);
    const endX = w * (0.62 + (1 - t) * 0.36);
    const endY = h;
    paths.push(
      `M 0,${startY.toFixed(1)} C ${w * 0.28},${crestY.toFixed(1)} ${shoulderX.toFixed(1)},${crestY.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`
    );
  }
  return paths;
}

/**
 * Generates Möbius-style double-twist cross-hatched loop
 */
function generateMobiusLoop(w: number = 380, h: number = 260, lines: number = 18): string[] {
  const paths: string[] = [];
  const cx = w * 0.5;
  const cy = h * 0.5;
  for (let i = 0; i < lines; i++) {
    const t = i / Math.max(1, lines - 1);
    const rx = (w * 0.42) * (0.35 + t * 0.65);
    const ry = (h * 0.42) * (0.35 + t * 0.65);
    // Hypocycloid / lemniscate twist with waist crossing
    const p1x = cx - rx;
    const p1y = cy - ry * 0.3;
    const p2x = cx + rx;
    const p2y = cy + ry * 0.3;
    paths.push(
      `M ${p1x.toFixed(1)},${p1y.toFixed(1)} C ${(cx - rx * 0.5).toFixed(1)},${(cy - ry).toFixed(1)} ${(cx + rx * 0.5).toFixed(1)},${(cy - ry).toFixed(1)} ${p2x.toFixed(1)},${(cy - ry * 0.2).toFixed(1)} C ${(cx + rx * 0.8).toFixed(1)},${(cy + ry).toFixed(1)} ${(cx - rx * 0.8).toFixed(1)},${(cy + ry).toFixed(1)} ${p1x.toFixed(1)},${p1y.toFixed(1)}`
    );
  }
  return paths;
}

/**
 * Generates an inward coiled vortex spirograph
 */
function generateVortexCurl(w: number = 380, h: number = 260, lines: number = 18): string[] {
  const paths: string[] = [];
  for (let i = 0; i < lines; i++) {
    const t = i / Math.max(1, lines - 1);
    const y0 = 12 + t * (h * 0.5);
    const apexX = w * (0.8 - t * 0.25);
    const apexY = 10 + t * (h * 0.35);
    const waistX = w * (0.35 - t * 0.1);
    const waistY = h * (0.65 + t * 0.25);
    const endX = w * (0.6 - t * 0.2);
    const endY = h * 0.95;
    paths.push(
      `M 0,${y0.toFixed(1)} C ${w * 0.3},${apexY.toFixed(1)} ${apexX.toFixed(1)},${apexY.toFixed(1)} ${apexX.toFixed(1)},${(apexY + h * 0.3).toFixed(1)} C ${apexX.toFixed(1)},${waistY.toFixed(1)} ${waistX.toFixed(1)},${waistY.toFixed(1)} ${endX.toFixed(1)},${endY.toFixed(1)}`
    );
  }
  return paths;
}

/**
 * Generates a saddle-twist cross-hatched spirograph
 */
function generateSaddleCross(w: number = 380, h: number = 260, lines: number = 18): string[] {
  const paths: string[] = [];
  for (let i = 0; i < lines; i++) {
    const t = i / Math.max(1, lines - 1);
    // Top-left to bottom-right family
    const yA = 15 + t * (h * 0.6);
    const xEndA = w * (0.85 - t * 0.2);
    const yEndA = h * (0.8 + t * 0.18);
    paths.push(
      `M 0,${yA.toFixed(1)} Q ${w * 0.45},${(yA * 0.5 + yEndA * 0.5).toFixed(1)} ${xEndA.toFixed(1)},${yEndA.toFixed(1)}`
    );

    // Crossing transversal family forming hyperbolic lattice
    const xB = w * (0.35 + t * 0.6);
    const yB = 10;
    const xEndB = w * (0.15 + t * 0.5);
    const yEndB = h;
    paths.push(
      `M ${xB.toFixed(1)},${yB.toFixed(1)} Q ${w * 0.5},${h * 0.5} ${xEndB.toFixed(1)},${yEndB.toFixed(1)}`
    );
  }
  return paths;
}

/**
 * Pure SVG Coiled & Twisted Spirograph Pattern Component
 * Directly replicates the Cyan (#11FEEE) and Neon Green (#1FFF01) spirographs from user images.
 */
export const ContourWavePattern: React.FC<ContourWavePatternProps> = ({
  color = '#11FEEE', // Matches Image 1/2 Cyan by default
  secondaryColor,
  variant = 'twisted-ribbon',
  linesCount = 18,
  strokeWidth = 1.35,
  opacity = 0.95,
  className = '',
  width = 410,
  height = 320,
  flipX = false,
}) => {
  const gradientId = useId();
  const normalized = normalizeVariant(variant);

  const strokeValue = secondaryColor ? `url(#${gradientId})` : color;
  const transform = flipX ? 'scale(-1, 1)' : undefined;
  const transformOrigin = flipX ? 'center' : undefined;

  // 1. Image 1 Authentic Twisted Ribbon
  if (normalized === 'twisted-ribbon') {
    const spiro = AUTHENTIC_SPIROGRAPHS.twistedRibbon;
    return (
      <svg
        viewBox={spiro.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible ${className}`}
        style={{ opacity, transform, transformOrigin }}
        aria-hidden="true"
      >
        {secondaryColor && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
        )}
        <path
          d={spiro.d}
          stroke={strokeValue}
          strokeWidth={strokeWidth}
          strokeMiterlimit={10}
        />
      </svg>
    );
  }

  // 2. Image 2 Authentic Coiled Pod / Teardrop Cocoon Loop
  if (normalized === 'coiled-pod') {
    const spiro = AUTHENTIC_SPIROGRAPHS.coiledPod;
    return (
      <svg
        viewBox={spiro.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible ${className}`}
        style={{ opacity, transform, transformOrigin }}
        aria-hidden="true"
      >
        {secondaryColor && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
        )}
        <path
          d={spiro.d}
          stroke={strokeValue}
          strokeWidth={strokeWidth}
          strokeMiterlimit={10}
        />
      </svg>
    );
  }

  // 3. Companion Authentic Vertical Spiral Ribbon
  if (normalized === 'vertical-spiral') {
    const spiro = AUTHENTIC_SPIROGRAPHS.verticalSpiral;
    return (
      <svg
        viewBox={spiro.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible ${className}`}
        style={{ opacity, transform, transformOrigin }}
        aria-hidden="true"
      >
        {secondaryColor && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
        )}
        <path
          d={spiro.d}
          stroke={strokeValue}
          strokeWidth={strokeWidth}
          strokeMiterlimit={10}
        />
      </svg>
    );
  }

  // 4. Mathematical Ruled Surface & Coiled Variations (Images 3 & 4 + expansions)
  let paths: string[] = [];
  const genW = width || 380;
  const genH = height || 260;

  if (normalized === 'ruled-twist') {
    paths = generateRuledTwist(genW, genH, linesCount);
  } else if (normalized === 'cascading-fan') {
    paths = generateCascadingFan(genW, genH, linesCount);
  } else if (normalized === 'mobius-loop') {
    paths = generateMobiusLoop(genW, genH, linesCount);
  } else if (normalized === 'vortex-curl') {
    paths = generateVortexCurl(genW, genH, linesCount);
  } else {
    paths = generateSaddleCross(genW, genH, linesCount);
  }

  return (
    <svg
      viewBox={`0 0 ${genW} ${genH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible ${className}`}
      style={{ opacity, transform, transformOrigin }}
      aria-hidden="true"
    >
      {secondaryColor && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={secondaryColor} />
          </linearGradient>
        </defs>
      )}
      <g stroke={strokeValue} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
        {paths.map((d, idx) => (
          <path key={idx} d={d} />
        ))}
      </g>
    </svg>
  );
};

export interface ScrollPopContourWaveProps {
  align?: 'left' | 'right';
  variant?: ContourVariant;
  color?: string;
  secondaryColor?: string;
  topPosition?: string;
  linesCount?: number;
  strokeWidth?: number;
  opacity?: number;
  className?: string;
  width?: number;
  height?: number;
  delay?: number;
}

/**
 * ScrollPopContourWave
 * Sits flush against the perimeter edge, curled at the border margins.
 * Completely pointer-events-none and z-0 so it NEVER disturbs or covers text!
 */
export const ScrollPopContourWave: React.FC<ScrollPopContourWaveProps> = ({
  align = 'left',
  variant = 'twisted-ribbon',
  color = '#11FEEE',
  secondaryColor,
  topPosition = 'top-1/2',
  linesCount = 18,
  strokeWidth = 1.35,
  opacity = 0.95,
  className = '',
  width,
  height,
  delay = 0.08,
}) => {
  const isRight = align === 'right';

  return (
    <div
      className={`absolute ${topPosition} ${
        isRight ? 'right-0' : 'left-0'
      } -translate-y-1/2 z-0 select-none pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <motion.div
        className="pointer-events-none"
        initial={{
          x: isRight ? '35%' : '-35%',
          opacity: 0.15,
          scale: 0.96,
        }}
        whileInView={{
          x: '0%',
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: false, amount: 0.05, margin: '80px 0px' }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
      >
        {/* Curled at the edge margins; sizing stays safely clear of main reading text */}
        <div className="w-[160px] sm:w-[200px] md:w-[250px] lg:w-[290px] xl:w-[320px] drop-shadow-sm filter transition-all">
          <ContourWavePattern
            color={color}
            secondaryColor={secondaryColor}
            variant={variant}
            linesCount={linesCount}
            strokeWidth={strokeWidth}
            opacity={opacity}
            width={width}
            height={height}
            flipX={isRight}
          />
        </div>
      </motion.div>
    </div>
  );
};
