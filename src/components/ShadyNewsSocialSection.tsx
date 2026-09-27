import React from 'react';

// Shady Side Academy Signature Spiral Glyph SVG Component (Exact replica of circle-spiral.svg)
export const ShadySpiralIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({
  size = 60,
  className = '',
  color = '#FFB81C',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M35.1845 70C33.1416 70 31.3119 68.9361 30.2909 67.1539L4.84435 22.7501C3.81754 20.9586 3.82287 18.8227 4.85825 17.0361C5.88228 15.269 7.70643 14.2141 9.73826 14.2141H60.6311C62.6629 14.2141 64.4873 15.269 65.5111 17.0361C66.5465 18.8227 66.5516 20.9588 65.525 22.7501L40.0787 67.1537C39.0577 68.9359 37.2277 70 35.1845 70ZM9.73826 14.6777C7.87378 14.6777 6.19936 15.6463 5.25947 17.2686C4.308 18.9103 4.30313 20.8735 5.24649 22.5197L30.6928 66.9233C31.6306 68.5597 33.3096 69.5362 35.1845 69.5362C37.0595 69.5362 38.7387 68.5594 39.6765 66.9233L65.1228 22.5197C66.0662 20.8733 66.0616 18.9103 65.1099 17.2686C64.1697 15.6463 62.4956 14.6777 60.6311 14.6777H9.73826ZM23.5981 67.6805C22.8513 67.6805 22.098 67.5287 21.3769 67.2207C19.4878 66.4131 18.2151 64.7053 17.9729 62.6531L11.9673 11.7382C11.7249 9.683 12.5667 7.72117 14.2196 6.4904C15.8518 5.27446 17.9411 5.03039 19.807 5.837L66.5764 26.0544C68.4506 26.8647 69.7147 28.5658 69.9581 30.605C70.2022 32.6505 69.3696 34.6082 67.7316 35.8419L26.968 66.5392C25.9665 67.2934 24.7904 67.6805 23.5981 67.6805ZM17.5661 5.83236C16.4811 5.83236 15.4107 6.1812 14.4963 6.86218C12.9781 7.99259 12.2049 9.79518 12.4277 11.6838L18.4332 62.5984C18.6557 64.484 19.8242 66.0525 21.5588 66.7942C23.2761 67.5282 25.1941 67.2948 26.6889 66.1691L67.4525 35.4718C68.9573 34.3386 69.7219 32.5397 69.4976 30.6599C69.2741 28.7864 68.1131 27.2237 66.3926 26.4799L19.6232 6.26279C18.9563 5.97445 18.2582 5.83236 17.5661 5.83236ZM13.81 60.9298C12.2969 60.9298 10.8469 60.3165 9.76074 59.1787C8.33619 57.686 7.83298 55.6094 8.41453 53.6237L22.823 4.44861C23.4029 2.4694 24.939 1.00221 26.9323 0.523342C28.9134 0.047489 30.935 0.651287 32.3385 2.13842L67.4057 39.2969C68.8175 40.7931 69.3107 42.8671 68.7243 44.8454C68.1423 46.81 66.6137 48.2695 64.6345 48.7505L15.1592 60.7671C14.7094 60.8765 14.2567 60.9298 13.81 60.9298ZM28.2658 0.827907C27.8599 0.827907 27.4494 0.875886 27.0403 0.974163C25.2106 1.41363 23.8002 2.76122 23.268 4.5791L8.85979 53.7545C8.32506 55.5791 8.78747 57.4871 10.0964 58.8588C11.3874 60.2113 13.2398 60.7567 15.0498 60.3167L64.5251 48.3001C66.3418 47.8588 67.7455 46.5182 68.28 44.7137C68.8184 42.8958 68.3655 40.9899 67.0682 39.6154L32.001 2.45689C31.0027 1.39902 29.6639 0.827907 28.2658 0.827907ZM57.7092 59.4661C57.3872 59.4661 57.062 59.4385 56.7362 59.3827L6.56605 50.7712C4.56064 50.4272 2.93745 49.0764 2.22402 47.1579C1.50456 45.2232 1.85641 43.1188 3.1653 41.5288L35.6523 2.06146C36.9538 0.480694 38.9304 -0.259625 40.9414 0.0817932C42.9602 0.424602 44.5899 1.78332 45.3013 3.71687L62.9839 51.7957C63.6978 53.7366 63.3358 55.8426 62.0148 57.4292C60.9234 58.7406 59.3627 59.4661 57.7092 59.4661ZM39.9797 0.463774C38.4523 0.463774 37.0129 1.13803 36.0104 2.35629L3.52317 41.8234C2.32044 43.2845 1.9971 45.2181 2.65838 46.9961C3.31364 48.7579 4.80378 49.9982 6.64439 50.3141L56.8143 58.9253C58.6519 59.2392 60.4616 58.5698 61.6586 57.1323C62.872 55.6743 63.2048 53.7389 62.5489 51.9551L44.8662 3.8768C44.2133 2.1011 42.7171 0.853171 40.8637 0.53864C40.5675 0.488343 40.2718 0.463774 39.9797 0.463774ZM48.3796 66.9367C47.3148 66.9367 46.256 66.6275 45.3166 66.0154L2.58166 38.1718C0.865524 37.0537 -0.0966153 35.1589 0.00768796 33.1032C0.111759 31.05 1.2584 29.2648 3.07536 28.328L48.3775 4.96387C50.1854 4.03117 52.2863 4.13269 53.9976 5.23505C55.7286 6.3504 56.7 8.24987 56.5964 10.3165L55.3128 35.9203L54.0294 61.5239C53.9258 63.5893 52.7698 65.3803 50.9378 66.3146C50.1226 66.7302 49.2493 66.9367 48.3796 66.9367ZM50.9584 4.79443C50.1525 4.79443 49.3436 4.98728 48.5898 5.37598L3.28791 28.7398C1.61975 29.6002 0.566522 31.2403 0.470794 33.1266C0.375067 35.0156 1.25863 36.7566 2.83477 37.7834L45.5697 65.6269C47.1356 66.647 49.0634 66.7497 50.7274 65.9016C52.4099 65.0437 53.4712 63.3983 53.5663 61.5009L56.1333 10.2933C56.2285 8.39451 55.3364 6.64917 53.7466 5.62492C52.8899 5.0728 51.9261 4.79443 50.9584 4.79443Z"
      fill={color}
    />
  </svg>
);

// Shady Side Academy Diagonal Line Slash SVG (Exact replica of line.svg)
export const ShadyLineSlash: React.FC<{ className?: string }> = ({ className = 'h-10 sm:h-14 md:h-16' }) => (
  <svg
    viewBox="0 0 18 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block mx-3 sm:mx-6 md:mx-8 shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path d="M16 0H18L2 60H0L16 0Z" fill="#041E42" />
  </svg>
);

interface ShadyNewsSocialSectionProps {
  onOpenWhatsHappening?: () => void;
}

export const ShadyNewsSocialSection: React.FC<ShadyNewsSocialSectionProps> = ({
  onOpenWhatsHappening,
}) => {
  // Open the dedicated "What's Happening" page
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenWhatsHappening) {
      onOpenWhatsHappening();
    } else {
      window.location.hash = '#whats-happening';
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative w-full overflow-hidden bg-white border-y border-[#041E42]/15 py-3 sm:py-5 md:py-6 cursor-pointer select-none transition-colors hover:bg-slate-50/50"
      aria-label="News and Social ticker slideshow. Click to open What's Happening page."
      title="Click to view What's Happening page"
    >
      <div className="animate-ssa-marquee flex items-center">
        {/* Repeat 4 times for seamless infinite marquee loop */}
        {[1, 2, 3, 4].map((cycle) => (
          <div key={cycle} className="flex items-center shrink-0">
            {/* NEWS Segment */}
            <span
              className="inline-flex items-center text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-anton uppercase tracking-wide text-white text-stroke-navy transition-all duration-300 group-hover:text-[#041E42] group-hover:[-webkit-text-stroke-color:transparent] px-2 sm:px-4"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              NEWS
            </span>

            {/* Diagonal Slash line.svg */}
            <ShadyLineSlash />

            {/* SOCIAL Segment */}
            <span
              className="inline-flex items-center text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-anton uppercase tracking-wide text-white text-stroke-navy transition-all duration-300 group-hover:text-[#041E42] group-hover:[-webkit-text-stroke-color:transparent] px-2 sm:px-4"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              SOCIAL
            </span>

            {/* Rotating Geometric Spiral Icon in Athletic Gold (#FFB81C) */}
            <div className="mx-6 sm:mx-10 md:mx-14 animate-ssa-spiral transition-transform duration-300 group-hover:scale-115">
              <ShadySpiralIcon size={56} className="w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
