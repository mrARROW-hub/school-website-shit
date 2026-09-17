import React from 'react';
import { motion } from 'motion/react';

/**
 * Hook to detect if the current viewport is a small screen (< 768px).
 */
export function useIsSmallScreen(): boolean {
  const [isSmall, setIsSmall] = React.useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const onChange = (e: MediaQueryListEvent) => {
      setIsSmall(e.matches);
    };
    setIsSmall(mediaQuery.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(onChange);
      return () => mediaQuery.removeListener(onChange);
    }
  }, []);

  return isSmall;
}

export interface ScrollPopSectionProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  delay?: number;
}

/**
 * ScrollPopSection
 * Animates sections into view with a physical pop effect from either the left or right side
 * as the user scrolls down the page.
 */
export const ScrollPopSection: React.FC<ScrollPopSectionProps> = ({
  children,
  direction = 'left',
  className = '',
  delay = 0,
}) => {
  const isLeft = direction === 'left';
  const isSmall = useIsSmallScreen();

  return (
    <motion.div
      className={`w-full will-change-transform ${className}`}
      initial={{
        opacity: 0,
        x: isSmall ? 0 : (isLeft ? -90 : 90),
        y: isSmall ? 15 : 0,
        scale: isSmall ? 1 : 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: isSmall ? 0.04 : 0.08,
        margin: '0px 0px -30px 0px',
      }}
      transition={{
        type: 'spring',
        stiffness: 85,
        damping: 18,
        mass: 0.8,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export interface ScrollPopBoxProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  delay?: number;
}

/**
 * ScrollPopBox
 * Transition applied to each individual box/card ONLY on small screens (< 768px).
 * On large screens, it simply passes through children without motion overhead or layout interference.
 */
export const ScrollPopBox: React.FC<ScrollPopBoxProps> = ({
  children,
  direction = 'left',
  className = '',
  delay = 0,
}) => {
  const isLeft = direction === 'left';
  const isSmall = useIsSmallScreen();

  if (!isSmall) {
    return <div className={className}>{children}</div>;
  }

  const widthClass = className.includes('w-') ? '' : 'w-full';

  return (
    <motion.div
      className={`${widthClass} will-change-transform ${className}`.trim()}
      initial={{
        opacity: 0,
        x: isLeft ? -45 : 45,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.12,
        margin: '0px 0px -25px 0px',
      }}
      transition={{
        type: 'spring',
        stiffness: 95,
        damping: 18,
        mass: 0.75,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

