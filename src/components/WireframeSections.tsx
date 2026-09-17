import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Mail, Clock } from 'lucide-react';
import {
  ISBShape,
  ISBWordBadge,
  ISBFooterIconsRow,
  ISBScrollPopEdgeShape,
  ISBShapeType,
  ISBCornerDesign,
  ISBCornerCard,
} from './DecorativeShapes';
import { ShadyHighlight } from './ShadyHighlight';
import { ScrollPopSection, ScrollPopBox } from './ScrollPopSection';

export const WireframeSections: React.FC = () => {
  const brandPillars: { type: ISBShapeType; name: string; desc: string; color: string }[] = [
    { type: 'purple-stairs', name: 'Progress', desc: 'Pre-K through Class XII continuum', color: '#861fce' },
    { type: 'pink-circle', name: 'Community', desc: 'Inclusivity, empathy, & belonging', color: '#fe76b4' },
    { type: 'blue-hourglass', name: 'Intellect', desc: 'Academic inquiry & critical rigor', color: '#0064ec' },
    { type: 'yellow-bars', name: 'Expression', desc: 'Diversity of talents & vibrant voice', color: '#FFC548' },
    { type: 'green-flower', name: 'Flourishing', desc: 'Holistic character & moral grounding', color: '#00b273' },
    { type: 'red-triangle', name: 'Empowerment', desc: 'Courage, leadership, & forward drive', color: '#FF3D37' },
  ];

  return (
    <>
      {/* =========================================================================
          ISB-INSPIRED VALUES & DECORATIVE SHAPES RIBBON
          Replicating the iconic visual language from isb.be
          ========================================================================= */}
      <section className="border-b border-[#e5e5e5] bg-[#fafafa]/90 py-5 transition-colors overflow-hidden">
        <ScrollPopSection direction="left">
          <div className="wireframe-container flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#444] bg-white px-3 py-1 rounded-full border border-[#ddd] shadow-xs">
                Visual Language &amp; Pillars
              </span>
              <span className="text-xs text-[#666]">
                Decorative shapes inspired by international school branding
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center">
              {brandPillars.map((item, idx) => (
                <ScrollPopBox key={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
                  <div
                    className="group flex items-center gap-2 px-2.5 py-1 rounded-lg hover:bg-white hover:shadow-xs transition-all cursor-default"
                    title={`${item.name}: ${item.desc}`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                      <ISBShape type={item.type} size={22} />
                    </div>
                    <span className="text-xs font-semibold text-[#333] hidden sm:inline group-hover:text-black transition-colors">
                      {item.name}
                    </span>
                  </div>
                </ScrollPopBox>
              ))}
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          2. OUR STORY — Where Values Meet Vision
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="story">
        {/* Scroll-triggered edge pop shape (half pops out from right edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="purple-stairs" align="right" topPosition="top-28 sm:top-36" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="pink-circle" size={14} />
              <span>Our Story</span>
              <ISBShape type="blue-hourglass" size={14} />
            </div>
            <h2
              className="wf-heading !text-[34px] font-fraunces text-[#111] leading-tight font-bold text-center break-words"
              style={{ fontFamily: "'Fraunces', serif", fontSize: '34px' }}
            >
              where <ShadyHighlight color="turquoise">values</ShadyHighlight> meet <ShadyHighlight color="turquoise" delay={500}>vision</ShadyHighlight>.....
            </h2>

            {/* ISB-Style Sentence with Inline Shapes on Signature ISB Blue Background */}
            <ScrollPopBox direction="right" className="my-8">
              <div className="relative max-w-4xl mx-auto p-6 sm:p-10 pb-12 sm:pb-12 rounded-3xl rounded-bl-none border-0 border-none bg-[#0064ec] text-white shadow-xl shadow-blue-900/10 overflow-hidden text-center">
                {/* ISB Signature Bottom-Left Corner Design */}
                <ISBCornerDesign size={38} className="sm:scale-110" />

                {/* Subtle ambient gradient overlay matching isb.be learning journey */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0051e8] via-[#0064ec] to-[#0d7aff] opacity-90 pointer-events-none" />

                <p className="relative z-10 text-base sm:text-xl text-white font-medium leading-relaxed sm:leading-loose">
                  We are an inclusive, value-grounded{' '}
                  <ISBWordBadge shape="blue-hourglass" label="Intellect & Rigor" light>
                    school
                  </ISBWordBadge>{' '}
                  in Chandigarh for{' '}
                  <ISBWordBadge shape="pink-circle" label="Community & Belonging" light>
                    students
                  </ISBWordBadge>{' '}
                  from Preschool through{' '}
                  <ISBWordBadge shape="purple-stairs" label="Continuous Learning" light>
                    Class XII
                  </ISBWordBadge>
                  , offering an immersive and culturally{' '}
                  <ISBWordBadge shape="green-flower" label="Flourishing Character" light>
                    rich
                  </ISBWordBadge>{' '}
                  education for{' '}
                  <ISBWordBadge shape="yellow-bars" label="Diverse Voices" light>
                    curious minds
                  </ISBWordBadge>{' '}
                  guided by{' '}
                  <ISBWordBadge shape="red-triangle" label="Empowerment & Purpose" light>
                    moral integrity
                  </ISBWordBadge>
                  .
                </p>
              </div>
            </ScrollPopBox>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-base text-[#666] leading-relaxed mb-6">
                  Rooted in the educational philosophy of Dev Samaj, we believe true schooling shapes both intellect and conscience. For decades, our classrooms have been incubators of curiosity, resilience, and compassion.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <ScrollPopBox direction="left" className="h-full">
                    <div className="p-4 border border-[#ccc] rounded bg-white hover:border-[#861fce] transition-colors group h-full">
                      <div className="mb-2">
                        <ISBShape type="pink-circle" size={18} />
                      </div>
                      <h4 className="font-semibold text-sm mb-1 text-[#222]">Moral Grounding</h4>
                      <p className="text-xs text-[#666] leading-relaxed">Ethical foundations before academic ambition.</p>
                    </div>
                  </ScrollPopBox>
                  <ScrollPopBox direction="right" className="h-full">
                    <div className="p-4 border border-[#ccc] rounded bg-white hover:border-[#0064ec] transition-colors group h-full">
                      <div className="mb-2">
                        <ISBShape type="blue-hourglass" size={18} />
                      </div>
                      <h4 className="font-semibold text-sm mb-1 text-[#222]">Intellectual Depth</h4>
                      <p className="text-xs text-[#666] leading-relaxed">Curiosity over rote learning, mastery over memorization.</p>
                    </div>
                  </ScrollPopBox>
                  <ScrollPopBox direction="left" className="h-full">
                    <div className="p-4 border border-[#ccc] rounded bg-white hover:border-[#FF3D37] transition-colors group h-full">
                      <div className="mb-2">
                        <ISBShape type="yellow-bars" size={18} />
                      </div>
                      <h4 className="font-semibold text-sm mb-1 text-[#222]">Self-Reliance</h4>
                      <p className="text-xs text-[#666] leading-relaxed">Equipping students to navigate a changing world independently.</p>
                    </div>
                  </ScrollPopBox>
                </div>
                <ScrollPopBox direction="right" className="mt-8">
                  <div className="flex flex-wrap gap-8">
                    <div>
                      <div className="text-3xl font-bold text-[#222]">2,400+</div>
                      <div className="text-xs text-[#666]">Students</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#222]">180+</div>
                      <div className="text-xs text-[#666]">Faculty Members</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-[#222]">98%</div>
                      <div className="text-xs text-[#666]">Board Distinction</div>
                    </div>
                  </div>
                </ScrollPopBox>
              </div>
              <div>
                <ScrollPopBox direction="left">
                  <div className="wf-img-placeholder min-h-[400px]">
                    CAMPUS / HERITAGE PHOTO
                  </div>
                </ScrollPopBox>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          3. THE LEARNING JOURNEY — Academics
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="journey">
        {/* Scroll-triggered edge pop shape (half pops out from left edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="blue-hourglass" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="purple-stairs" size={15} />
              <span>Academics</span>
            </div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            The <ShadyHighlight color="turquoise">Learning Journey</ShadyHighlight>
          </h2>

          {/* ISB-Style Academic Sentence with Inline Shapes on Deep Navy/ISB Blue Background */}
          <ScrollPopBox direction="left" className="my-8">
            <div className="relative max-w-4xl mx-auto p-6 sm:p-10 pb-12 sm:pb-12 rounded-3xl rounded-bl-none border-0 border-none bg-[#002244] text-white shadow-xl shadow-blue-950/20 overflow-hidden text-center">
              {/* ISB Signature Bottom-Left Corner Design */}
              <ISBCornerDesign size={38} className="sm:scale-110" />

              {/* Ambient gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001730] via-[#002244] to-[#0a3565] opacity-95 pointer-events-none" />

              <p className="relative z-10 text-base sm:text-xl text-white font-medium leading-relaxed sm:leading-loose">
                Our academic continuum guides students from{' '}
                <ISBWordBadge shape="pink-circle" label="Curiosity & Expression" light>
                  Pre-Primary wonder
                </ISBWordBadge>{' '}
                through foundational{' '}
                <ISBWordBadge shape="green-flower" label="Breadth & Fluency" light>
                  Primary discovery
                </ISBWordBadge>
                , advancing into rigorous{' '}
                <ISBWordBadge shape="yellow-bars" label="Disciplined Inquiry" light>
                  Middle School sciences
                </ISBWordBadge>{' '}
                and culminating in exemplary{' '}
                <ISBWordBadge shape="purple-stairs" label="Mastery & Pathways" light>
                  Senior Secondary CBSE
                </ISBWordBadge>{' '}
                distinction.
              </p>
            </div>
          </ScrollPopBox>

          <p className="max-w-2xl text-base text-[#666] mb-8 text-center mx-auto break-words">
            A continuous continuum of growth from the earliest steps of wonder to the confident leap into adulthood.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <ScrollPopBox direction="left" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#fe76b4] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">01 &mdash; Foundation</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="pink-circle" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Pre-Primary</h3>
                  <div className="text-xs text-[#666] mb-3">Nursery &ndash; KG</div>
                  <p className="text-sm text-[#666] leading-relaxed">Play-based discovery, sensorial development, foundational literacy, and social warmth.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Curiosity &amp; Expression</div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="right" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#00b273] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">02 &mdash; Exploration</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="green-flower" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Primary</h3>
                  <div className="text-xs text-[#666] mb-3">Classes I &ndash; V</div>
                  <p className="text-sm text-[#666] leading-relaxed">Core academic fluency, environmental awareness, artistic exploration, and collaborative projects.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Breadth &amp; Confidence</div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="left" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#FFC548] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">03 &mdash; Deepening</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="yellow-bars" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Middle School</h3>
                  <div className="text-xs text-[#666] mb-3">Classes VI &ndash; VIII</div>
                  <p className="text-sm text-[#666] leading-relaxed">Subject specialization, laboratory sciences, critical reading, debates, and competitive athletics.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Critical Thinking &amp; Discipline</div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="right" className="h-full">
              <div className="p-6 border border-[#ccc] rounded flex flex-col justify-between bg-white hover:border-[#861fce] hover:shadow-xs transition-all group h-full">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-[#888]">04 &mdash; Mastery</span>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      <ISBShape type="purple-stairs" size={24} />
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-[#222] mb-1">Senior Secondary</h3>
                  <div className="text-xs text-[#666] mb-3">Classes IX &ndash; XII</div>
                  <p className="text-sm text-[#666] leading-relaxed">CBSE excellence, stream specialization (Science, Commerce, Humanities), career mentoring, and leadership.</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-[#222] pt-3 border-t border-[#eee]">Focus: Excellence &amp; Pathways</div>
              </div>
            </ScrollPopBox>
          </div>
        </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          4. WHERE LEARNING HAPPENS — Campus Facilities
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="campus">
        {/* Scroll-triggered edge pop shape (half pops out from right edge, 0 extra vertical space) */}
        <ISBScrollPopEdgeShape shape="green-flower" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="yellow-bars" size={15} />
              <span>Campus</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Where <ShadyHighlight color="turquoise">Learning Happens</ShadyHighlight>
            </h2>
            <p className="max-w-2xl text-base text-[#666] text-center mx-auto break-words">
              Purpose-built spaces that invite curiosity, discipline, and creative pursuit across every acre.
            </p>
            <ScrollPopBox direction="left" className="my-8">
              <div className="wf-img-placeholder h-[380px]">
                MAIN CAMPUS AERIAL / PANORAMA PHOTO
              </div>
            </ScrollPopBox>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ScrollPopBox direction="left" className="h-full">
                <div className="border border-[#ccc] rounded overflow-hidden bg-white h-full">
                  <div className="wf-img-placeholder h-44">LIBRARY PHOTO</div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-[#222] mb-1">Library &amp; Resource Centre</h4>
                    <p className="text-xs text-[#666]">Over 25,000 volumes, digital research pods, quiet study carrels, and periodical archives.</p>
                  </div>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right" className="h-full">
                <div className="border border-[#ccc] rounded overflow-hidden bg-white h-full">
                  <div className="wf-img-placeholder h-44">LABORATORIES PHOTO</div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-[#222] mb-1">Science &amp; Computer Labs</h4>
                    <p className="text-xs text-[#666]">Dedicated Physics, Chemistry, Biology, and AI-enabled computer stations built to CBSE specifications.</p>
                  </div>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left" className="h-full">
                <div className="border border-[#ccc] rounded overflow-hidden bg-white h-full">
                  <div className="wf-img-placeholder h-44">SPORTS COMPLEX PHOTO</div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-[#222] mb-1">Sports &amp; Play Arena</h4>
                    <p className="text-xs text-[#666]">Multi-sport turf, athletics track, basketball court, indoor badminton hall, and yoga pavilion.</p>
                  </div>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          5. BEYOND THE CLASSROOM — Student Life
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="beyond">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="yellow-bars" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="green-flower" size={15} />
              <span>Student Life</span>
            </div>
            <h2
              className="wf-heading font-crayon text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-center break-words"
              style={{ fontFamily: "'DK Crayon Crumble', 'Cabin Sketch', cursive, sans-serif" }}
            >
              Beyond the <ShadyHighlight color="turquoise">Classroom</ShadyHighlight>
            </h2>
            <p className="max-w-2xl text-base text-[#666] text-center mx-auto break-words">
              Character is forged as much on the pitch, stage, and easel as it is in the lecture hall.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#FF3D37] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="red-triangle" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Sports</h4>
                  <p className="text-xs text-[#666]">Football, basketball, cricket, badminton, athletics, yoga.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#00b273] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="green-flower" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Arts &amp; Culture</h4>
                  <p className="text-xs text-[#666]">Painting, sculpture, theatre, debate, creative writing.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#FFC548] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="yellow-bars" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Music &amp; Dance</h4>
                  <p className="text-xs text-[#666]">Classical, contemporary, choir, instrumental orchestra.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#0064ec] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="blue-hourglass" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Clubs &amp; Societies</h4>
                  <p className="text-xs text-[#666]">Robotics, eco club, editorial board, quiz bowl, MUN.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left" className="col-span-2 sm:col-span-1 h-full">
                <div className="p-4 border border-[#ccc] rounded text-center bg-white hover:border-[#861fce] hover:shadow-xs transition-all group h-full">
                  <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110">
                    <ISBShape type="purple-stairs" size={26} />
                  </div>
                  <h4 className="font-semibold text-sm text-[#222] mb-1">Competitions</h4>
                  <p className="text-xs text-[#666]">Inter-school tournaments, Olympiads, state leagues.</p>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          6. GULDAASTA — Signature Annual Event
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="guldaasta">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="pink-arch" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="pink-arch" size={15} />
              <span>Signature Annual Event</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Guldaasta &mdash; <ShadyHighlight color="turquoise">A Celebration of Togetherness</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8">
              <ScrollPopBox direction="left">
                <div>
                  <p className="text-base text-[#666] leading-relaxed mb-6 text-left">
                    Our landmark annual showcase where every child&apos;s voice, talent, and culture come together in an unforgettable evening of performance, exhibition, and shared pride.
                  </p>
                  <div className="flex gap-8 my-6 justify-start">
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">1,200+</strong>
                      <span className="text-xs text-[#666]">Student Performers</span>
                    </div>
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">3,500+</strong>
                      <span className="text-xs text-[#666]">Audience &amp; Alumni</span>
                    </div>
                    <div>
                      <strong className="block text-2xl font-bold text-[#222]">1</strong>
                      <span className="text-xs text-[#666]">Unforgettable Night</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <a href="#guldaasta-details" className="wf-cta">
                      LEARN ABOUT GULDAASTA
                    </a>
                  </div>
                </div>
              </ScrollPopBox>
              <div className="grid grid-cols-2 gap-3">
                <ScrollPopBox direction="right" className="col-span-2">
                  <div className="wf-img-placeholder h-64">
                    GULDAASTA STAGE PHOTO (HERO MOMENT)
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="left">
                  <div className="wf-img-placeholder h-36">DANCE PERFORMANCE</div>
                </ScrollPopBox>
                <ScrollPopBox direction="right">
                  <div className="wf-img-placeholder h-36">MUSIC ENSEMBLE</div>
                </ScrollPopBox>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          7. MAKING US PROUD — Achievements
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="achievements">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="red-triangle" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="red-triangle" size={15} />
              <span>Achievements</span>
            </div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Making Us <ShadyHighlight color="turquoise">Proud</ShadyHighlight>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ScrollPopBox direction="left" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Academics</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; CBSE Class XII</div>
                    <h4 className="font-semibold text-sm text-[#222]">99.2% School Topper</h4>
                    <p className="text-xs text-[#666]">Science stream city rank holder; 42 students scored 90%+ aggregate.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; CBSE Class X</div>
                    <h4 className="font-semibold text-sm text-[#222]">100% Pass Percentage</h4>
                    <p className="text-xs text-[#666]">68 students scored distinction in all subjects.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; National Olympiad</div>
                    <h4 className="font-semibold text-sm text-[#222]">3 Gold Medals &mdash; Science &amp; Math</h4>
                    <p className="text-xs text-[#666]">Qualified for national scholarship round.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="right" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Sports</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; State Championship</div>
                    <h4 className="font-semibold text-sm text-[#222]">Inter-School Basketball Champions</h4>
                    <p className="text-xs text-[#666]">U-17 boys team clinched trophy without dropping a match.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; District Athletics</div>
                    <h4 className="font-semibold text-sm text-[#222]">Overall Athletics Trophy</h4>
                    <p className="text-xs text-[#666]">14 gold, 8 silver, 6 bronze across track and field events.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; Badminton</div>
                    <h4 className="font-semibold text-sm text-[#222]">State Level Representation</h4>
                    <p className="text-xs text-[#666]">Two singles players selected for national trials.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>

            <ScrollPopBox direction="left" className="h-full">
              <div className="h-full">
                <h3 className="text-base font-bold text-[#222] pb-2 border-b border-[#ccc] mb-4">Cultural &amp; Co-Curricular</h3>
                <div className="flex flex-col gap-3">
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; Youth Festival</div>
                    <h4 className="font-semibold text-sm text-[#222]">Best Delegation Award</h4>
                    <p className="text-xs text-[#666]">Swept music, drama, and fine arts categories across 18 schools.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2024 &bull; National Debate</div>
                    <h4 className="font-semibold text-sm text-[#222]">Runners-Up &mdash; Parliamentary Debate</h4>
                    <p className="text-xs text-[#666]">Senior team placed 2nd among 60 participating institutions.</p>
                  </div>
                  <div className="p-3 border border-[#ccc] rounded bg-white">
                    <div className="text-xs text-[#888]">2023 &bull; Robotics Challenge</div>
                    <h4 className="font-semibold text-sm text-[#222]">Innovation First Prize</h4>
                    <p className="text-xs text-[#666]">Autonomous navigation project recognized at regional STEM expo.</p>
                  </div>
                </div>
              </div>
            </ScrollPopBox>
          </div>
        </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          8. WHAT'S HAPPENING — School Updates & Circulars
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="updates">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="purple-stairs" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="blue-hourglass" size={15} />
              <span>News &amp; Updates</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              What&apos;s <ShadyHighlight color="turquoise">Happening</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <div className="lg:col-span-2 flex flex-col gap-4">
                <ScrollPopBox direction="left">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">12 Feb 2025 &bull; Event</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">Annual Sports Meet 2025 Announced</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Three days of athletic competition, parade, and awards ceremony commencing March 1.</p>
                    </div>
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="right">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">28 Jan 2025 &bull; Academic</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">CBSE Board Exam Preparation Workshops Underway</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Special doubt-clearing sessions and mock test series scheduled for Classes X and XII.</p>
                    </div>
                  </div>
                </ScrollPopBox>
                <ScrollPopBox direction="left">
                  <div className="flex flex-col sm:flex-row gap-4 p-4 border border-[#ccc] rounded items-start sm:items-center bg-white">
                    <div className="wf-img-placeholder !w-full sm:!w-28 !h-20 shrink-0">THUMB</div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-[#888]">15 Jan 2025 &bull; Celebration</div>
                      <h4 className="font-semibold text-sm text-[#222] break-words mt-0.5">Dev Samaj Foundation Day Celebrations</h4>
                      <p className="text-xs text-[#666] break-words mt-1">Reflecting on our heritage with community service drives and special morning assembly.</p>
                    </div>
                  </div>
                </ScrollPopBox>
              </div>

              <ScrollPopBox direction="right" className="h-full">
                <div className="p-4 border border-[#ccc] rounded flex flex-col justify-start bg-white h-full">
                  <h3 className="font-bold text-sm text-[#222] mb-4 pb-2 border-b border-[#ccc]">Circulars &amp; Notices</h3>
                  <div className="flex flex-col gap-3">
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">08 Feb 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Date sheet for Annual Examinations (Classes VI&ndash;IX, XI)</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">02 Feb 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Advisory on winter uniform &amp; school timings</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">20 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Parent-Teacher Meeting schedule &amp; slot booking</div>
                    </div>
                    <div className="pb-2 border-b border-[#eee]">
                      <div className="text-xs text-[#888]">10 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Fee deposit deadline for Quarter IV &mdash; Reminder</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#888]">05 Jan 2025</div>
                      <div className="text-xs font-medium text-[#222] hover:underline cursor-pointer break-words">Transport route adjustment notice &mdash; Route 7 &amp; 12</div>
                    </div>
                  </div>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          9. THROUGH OUR LENS — Gallery Mosaic
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="gallery">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="yellow-bars" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="green-flower" size={15} />
              <span>Gallery</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Through Our <ShadyHighlight color="turquoise">Lens</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">CLASSROOM IN ACTION</div></ScrollPopBox>
              <ScrollPopBox direction="right" className="col-span-2"><div className="wf-img-placeholder md:col-span-2 h-40">SCIENCE LAB EXPERIMENT</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">ART STUDIO</div></ScrollPopBox>
              <ScrollPopBox direction="right" className="col-span-2 md:row-span-2"><div className="wf-img-placeholder md:col-span-2 md:row-span-2 h-84">ANNUAL SPORTS DAY CELEBRATIONS</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">MORNING ASSEMBLY</div></ScrollPopBox>
              <ScrollPopBox direction="right"><div className="wf-img-placeholder h-40">LIBRARY STUDY HOUR</div></ScrollPopBox>
              <ScrollPopBox direction="left"><div className="wf-img-placeholder h-40">MUSIC PERFORMANCE</div></ScrollPopBox>
              <ScrollPopBox direction="right"><div className="wf-img-placeholder h-40">CAMPUS CORRIDORS</div></ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          10. THE PEOPLE BEHIND THE LEARNING — Educators
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="educators">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="green-flower" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="purple-stairs" size={15} />
              <span>Faculty</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              The People Behind <ShadyHighlight color="turquoise">the Learning</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <ScrollPopBox direction="left" className="h-full">
                <div className="border border-[#ccc] rounded overflow-hidden text-center bg-white h-full">
                  <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-[#222]">Dr. S. Sharma</h4>
                    <div className="text-xs text-[#888] mb-2">Principal &bull; Ph.D., M.Ed.</div>
                    <p className="text-xs text-[#666]">25+ years in educational leadership, pedagogy reform, and character-centred schooling.</p>
                  </div>
                </div>
              </ScrollPopBox>

              <ScrollPopBox direction="right" className="h-full">
                <div className="border border-[#ccc] rounded overflow-hidden text-center bg-white h-full">
                  <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-[#222]">Mrs. R. Kaur</h4>
                    <div className="text-xs text-[#888] mb-2">Vice Principal &bull; M.Sc., B.Ed.</div>
                    <p className="text-xs text-[#666]">Spearheading academic rigor, student welfare, and CBSE compliance for over two decades.</p>
                  </div>
                </div>
              </ScrollPopBox>

              <ScrollPopBox direction="left" className="h-full">
                <div className="border border-[#ccc] rounded overflow-hidden text-center bg-white h-full">
                  <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-[#222]">Mr. A. Verma</h4>
                    <div className="text-xs text-[#888] mb-2">Head of Sciences &bull; M.Sc. Physics</div>
                    <p className="text-xs text-[#666]">Inspiring future engineers and researchers with inquiry-led laboratory instruction.</p>
                  </div>
                </div>
              </ScrollPopBox>

              <ScrollPopBox direction="right" className="h-full">
                <div className="border border-[#ccc] rounded overflow-hidden text-center bg-white h-full">
                  <div className="wf-img-placeholder h-56">FACULTY PHOTO</div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-[#222]">Mrs. P. Gupta</h4>
                    <div className="text-xs text-[#888] mb-2">Head of Humanities &bull; M.A., M.Phil.</div>
                    <p className="text-xs text-[#666]">Fostering critical thought, historical consciousness, and articulate prose in every student.</p>
                  </div>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          11. BEYOND DEV SAMAJ — Community & Alumni
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="community">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="pink-circle" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="pink-circle" size={15} />
              <span>Community</span>
            </div>
          <h2
            className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
          >
            Beyond <ShadyHighlight color="turquoise">Dev Samaj</ShadyHighlight>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <ScrollPopBox direction="left" className="lg:col-span-2">
              <div className="border border-[#ccc] rounded overflow-hidden bg-white h-full">
                <div className="wf-img-placeholder h-64">ALUMNI SPOTLIGHT PHOTO</div>
                <div className="p-6">
                  <blockquote className="italic text-base text-[#444] mb-3 leading-relaxed">
                    &ldquo;Dev Samaj did not just prepare me for board exams; it taught me how to think with integrity. That moral compass has guided me through medical school and every patient I have ever treated.&rdquo;
                  </blockquote>
                  <div className="text-xs text-[#666]">
                    &mdash; <strong>Dr. Ananya Sen</strong>, Class of 2012 &bull; Chief Resident, All India Institute of Medical Sciences
                  </div>
                </div>
              </div>
            </ScrollPopBox>

            <div className="flex flex-col gap-4">
              <ScrollPopBox direction="right">
                <div className="p-4 border border-[#ccc] rounded bg-white">
                  <h4 className="font-bold text-sm text-[#222] mb-1">Parent Council</h4>
                  <p className="text-xs text-[#666]">Active collaboration through regular dialogue, volunteer initiatives, and school policy feedback.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left">
                <div className="p-4 border border-[#ccc] rounded bg-white">
                  <h4 className="font-bold text-sm text-[#222] mb-1">Alumni Network</h4>
                  <p className="text-xs text-[#666]">A global fraternity of 15,000+ graduates across medicine, civil services, tech, entrepreneurship, and the arts.</p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right">
                <div className="p-4 border border-[#ccc] rounded bg-white">
                  <h4 className="font-bold text-sm text-[#222] mb-1">Community Outreach</h4>
                  <p className="text-xs text-[#666]">Students actively participate in literacy drives, environmental clean-ups, and elder care visits.</p>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          12. ADMISSIONS — Take the First Step
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="admissions">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="red-triangle" align="right" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="right">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="red-triangle" size={15} />
              <span>Join Us</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Take the <ShadyHighlight color="turquoise">First Step</ShadyHighlight>
            </h2>

            {/* Signature ISB Background Container framing the Admissions Procedure & Key Info */}
            <ScrollPopBox direction="right" className="mt-8">
              <div className="relative max-w-5xl mx-auto p-6 sm:p-10 pb-14 sm:pb-16 rounded-3xl rounded-bl-none border-0 border-none bg-[#0064ec] text-white shadow-xl shadow-blue-900/15 overflow-hidden">
                {/* ISB Signature Bottom-Left Corner Design */}
                <ISBCornerDesign size={42} className="sm:scale-110" />

                {/* Ambient gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0051e8] via-[#0064ec] to-[#0d7aff] opacity-95 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Left Column: 4 Admissions Steps */}
                  <div className="flex flex-col gap-5">
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Inquire</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Submit an online inquiry or visit our admissions office in person to receive the prospectus and fee structure.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Visit &amp; Observe</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Join a scheduled campus tour to experience classrooms, meet faculty, and see student life in action.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Assessment &amp; Dialogue</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          An age-appropriate interaction designed to understand your child&apos;s learning profile, not just test scores.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-white text-[#0064ec] flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-base text-white mb-1">Welcome</h4>
                        <p className="text-xs text-blue-100 leading-relaxed">
                          Upon offer acceptance and documentation completion, your child joins the Dev Samaj family.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Information Box & Actions */}
                  <div className="bg-white/10 backdrop-blur-xs border border-white/20 rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/20">
                        <h3 className="font-bold text-lg text-white">Key Information</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white px-2.5 py-0.5 rounded-full">
                          2025&ndash;26
                        </span>
                      </div>
                      <ul className="text-xs text-blue-100 divide-y divide-white/10 mb-6 space-y-0">
                        <li className="py-2.5 flex justify-between"><strong>Academic Year:</strong> <span>April &ndash; March</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Admissions Open:</strong> <span>Pre-Primary to IX &amp; XI</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Affiliation:</strong> <span>CBSE New Delhi</span></li>
                        <li className="py-2.5 flex justify-between"><strong>Campus Visits:</strong> <span>Mon &ndash; Fri, 9 AM &ndash; 1 PM</span></li>
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <a href="#inquire" className="px-5 py-2.5 rounded-xl bg-white text-[#0064ec] hover:bg-blue-50 transition-colors font-bold text-xs tracking-wide">
                        APPLY ONLINE
                      </a>
                      <a href="#prospectus" className="px-5 py-2.5 rounded-xl border-2 border-white/80 text-white hover:bg-white/15 transition-colors font-semibold text-xs tracking-wide">
                        DOWNLOAD PROSPECTUS
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollPopBox>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          13. CONTACT — Reach Out
          ========================================================================= */}
      <section className="wireframe-section relative overflow-hidden" id="contact">
        {/* Scroll-triggered edge pop shape in empty margin space */}
        <ISBScrollPopEdgeShape shape="blue-hourglass" align="left" topPosition="top-24 sm:top-28" />
        <ScrollPopSection direction="left">
          <div className="wireframe-container relative z-10">
            <div className="wf-label text-center flex items-center justify-center gap-2">
              <ISBShape type="blue-hourglass" size={15} />
              <span>Reach Out</span>
            </div>
            <h2
              className="wf-heading !text-[36px] font-poppins font-bold text-[#222] leading-tight text-center break-words"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Contact <ShadyHighlight color="turquoise">Us</ShadyHighlight>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 items-stretch">
              <ScrollPopBox direction="left" className="h-full">
                <div className="p-6 sm:p-8 border border-[#ccc] rounded flex flex-col justify-between bg-white h-full gap-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#0064ec] font-bold mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#0064ec]" />
                        <span>Campus Address</span>
                      </div>
                      <p className="text-sm text-[#222] font-semibold">
                        I.S. Dev Samaj Senior Secondary School
                      </p>
                      <p className="text-xs text-[#555] mt-0.5">
                        Sector 21-C, Chandigarh &mdash; 160022
                      </p>
                      <span className="inline-block mt-1.5 text-[11px] font-medium text-[#0064ec] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        Near Aroma Chowk &amp; Sector 21 Market
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#888] font-bold mb-1">
                        <Phone className="w-3.5 h-3.5 text-[#888]" />
                        <span>Phone / Helpdesk</span>
                      </div>
                      <p className="text-sm text-[#222]">
                        <a href="tel:01722704495" className="hover:text-[#0064ec] hover:underline">0172-2704495</a>
                        {' '}&bull;{' '}
                        <a href="tel:01722707255" className="hover:text-[#0064ec] hover:underline">0172-2707255</a>
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#888] font-bold mb-1">
                        <Mail className="w-3.5 h-3.5 text-[#888]" />
                        <span>Email</span>
                      </div>
                      <p className="text-sm text-[#222]">
                        <a href="mailto:info@isdevsamaj21.ac.in" className="hover:text-[#0064ec] hover:underline">info@isdevsamaj21.ac.in</a>
                        {' '}&bull;{' '}
                        <a href="mailto:admissions@isdevsamaj21.ac.in" className="hover:text-[#0064ec] hover:underline">admissions@isdevsamaj21.ac.in</a>
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#888] font-bold mb-1">
                        <Clock className="w-3.5 h-3.5 text-[#888]" />
                        <span>Office Hours</span>
                      </div>
                      <p className="text-sm text-[#222]">
                        Monday &ndash; Saturday: 8:00 AM &ndash; 2:30 PM<br />
                        <span className="text-xs text-[#777]">Closed on 2nd Saturdays and Public Holidays</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="mailto:info@isdevsamaj21.ac.in" className="wf-cta inline-block">
                      SEND AN INQUIRY
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=I.S.+Dev+Samaj+Senior+Secondary+School+Sector+21C+Chandigarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded border border-[#bbb] hover:border-[#0064ec] text-[#222] hover:text-[#0064ec] bg-white text-xs font-semibold transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#0064ec]" />
                      Get Directions
                    </a>
                  </div>
                </div>
              </ScrollPopBox>

              <ScrollPopBox direction="right" className="h-full">
                <div className="relative border border-[#ccc] rounded-lg overflow-hidden bg-[#f4f4f4] h-full min-h-[380px] flex flex-col shadow-sm group">
                  {/* Google Map Embedded iframe for I S Dev Samaj School Sector 21 Chandigarh */}
                  <iframe
                    title="I.S. Dev Samaj Senior Secondary School Map Location"
                    src="https://maps.google.com/maps?q=I.S.+Dev+Samaj+Senior+Secondary+School,+Sector+21C,+Chandigarh,+160022&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full min-h-[380px] border-0 flex-grow"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Top Location Bar Overlay */}
                  <div className="absolute top-3 left-3 right-3 pointer-events-none flex justify-between items-start gap-2">
                    <div className="pointer-events-auto bg-white/95 backdrop-blur-sm border border-[#ddd] px-3 py-2 rounded-md shadow-md max-w-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs font-bold text-[#111]">I.S. Dev Samaj Sr. Sec. School</span>
                      </div>
                      <p className="text-[11px] text-[#555] mt-0.5">
                        Sector 21-C, Chandigarh &bull; PIN 160022
                      </p>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=I.S.+Dev+Samaj+Senior+Secondary+School+Sector+21C+Chandigarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-[#0064ec] border border-[#ddd] hover:border-[#0064ec] text-xs font-semibold rounded-md shadow-md transition-colors"
                      title="Open in Google Maps"
                    >
                      <span>View larger map</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Bottom Navigation Hint Bar */}
                  <div className="bg-white border-t border-[#e0e0e0] px-4 py-2.5 flex items-center justify-between text-xs text-[#555]">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#0064ec]" />
                      Behind Petrol Pump on Ambala Road, Sector 21-C
                    </span>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=I.S.+Dev+Samaj+Senior+Secondary+School+Sector+21C+Chandigarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#0064ec] hover:underline inline-flex items-center gap-1"
                    >
                      Directions &rarr;
                    </a>
                  </div>
                </div>
              </ScrollPopBox>
            </div>
          </div>
        </ScrollPopSection>
      </section>

      {/* =========================================================================
          14. FOOTER — Comprehensive Wireframe Footer with ISB Decorative Shape System
          ========================================================================= */}
      <footer className="border-t border-[#ccc] py-12 text-[#666] bg-white overflow-hidden">
        <ScrollPopSection direction="right">
          <div className="wireframe-container">
            {/* ISB Signature Decorative Shapes Row */}
            <div className="mb-10 pb-8 border-b border-[#eee] flex flex-col items-center justify-center text-center">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#888] mb-2">
                Values in Action &bull; Symbolic Shapes
              </div>
              <ISBFooterIconsRow />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <ScrollPopBox direction="left">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">IS Dev Samaj Senior Secondary School</h4>
                  <p className="text-xs leading-relaxed text-[#666]">
                    Affiliated to CBSE, New Delhi.<br />
                    Affiliation No. 2630018<br />
                    Sector 21-C, Chandigarh &mdash; 160022
                  </p>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Academics</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#journey" className="hover:text-[#222]">Pre-Primary School</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">Primary Wing</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">Middle School</a></li>
                    <li><a href="#journey" className="hover:text-[#222]">Senior Secondary</a></li>
                    <li><a href="#updates" className="hover:text-[#222]">CBSE Mandatory Disclosure</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="left">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Campus &amp; Life</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#campus" className="hover:text-[#222]">Infrastructure &amp; Labs</a></li>
                    <li><a href="#beyond" className="hover:text-[#222]">Sports &amp; Athletics</a></li>
                    <li><a href="#guldaasta" className="hover:text-[#222]">Guldaasta Festival</a></li>
                    <li><a href="#achievements" className="hover:text-[#222]">Student Achievements</a></li>
                    <li><a href="#gallery" className="hover:text-[#222]">Campus Gallery</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
              <ScrollPopBox direction="right">
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#222] mb-3">Connect</h4>
                  <ul className="text-xs flex flex-col gap-1.5">
                    <li><a href="#admissions" className="hover:text-[#222]">Admissions 2025&ndash;26</a></li>
                    <li><a href="#contact" className="hover:text-[#222]">Contact &amp; Directions</a></li>
                    <li><a href="#updates" className="hover:text-[#222]">Circulars &amp; Notices</a></li>
                    <li><a href="#community" className="hover:text-[#222]">Alumni Portal</a></li>
                    <li><a href="#contact" className="hover:text-[#222]">Careers at Dev Samaj</a></li>
                  </ul>
                </div>
              </ScrollPopBox>
            </div>
            <div className="pt-6 border-t border-[#ccc] flex flex-col sm:flex-row justify-between items-center text-xs text-[#888] gap-4">
              <div>&copy; {new Date().getFullYear()} IS Dev Samaj Senior Secondary School. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#privacy" className="hover:text-[#222]">Privacy Policy</a>
                <a href="#terms" className="hover:text-[#222]">Terms of Use</a>
                <a href="#sitemap" className="hover:text-[#222]">Sitemap</a>
              </div>
            </div>
          </div>
        </ScrollPopSection>
      </footer>
    </>
  );
};
