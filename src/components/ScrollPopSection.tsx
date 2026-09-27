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
        x: isSmall ? (isLeft ? -40 : 40) : (isLeft ? -110 : 110),
        y: isSmall ? 25 : 20,
        scale: isSmall ? 0.97 : 0.94,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: isSmall ? 0.03 : 0.06,
        margin: '0px 0px -40px 0px',
      }}
      transition={{
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
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
        x: isLeft ? -50 : 50,
        y: 20,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: false,
        amount: 0.08,
        margin: '0px 0px -30px 0px',
      }}
      transition={{
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

