import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const directionsUrl =
    'https://www.google.com/maps/search/?api=1&query=IS+Dev+Samaj+Senior+Secondary+School+Sector+21+Chandigarh';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Wireframe: .label */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
            Contact
          </span>
          <span className="w-10 h-[1px] bg-amber-400" />
        </div>

        {/* Wireframe: .heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <h2
              className="!text-[36px] font-poppins font-bold text-slate-900 tracking-tight text-center break-words leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: '36px' }}
            >
              Contact Us
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              We welcome prospective parents and visitors. Our administrative helpdesk is open Monday to Saturday.
            </p>
          </div>
        </div>

        {/* Wireframe: .contact-layout (1fr 1fr grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Wireframe: .contact-info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2.5 rounded-lg bg-blue-900 text-amber-300 shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Campus Address
                </h4>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  I.S. Dev Samaj Senior Secondary School
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  Sector 21-C, Chandigarh, Union Territory, PIN &ndash; 160022
                </p>
                <span className="inline-block mt-2 text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                  Near Aroma Chowk &amp; Sector 21 Market
                </span>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2.5 rounded-lg bg-blue-900 text-amber-300 shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Telephone &amp; Admissions Desk
                </h4>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-800">
                  <a href="tel:01722704495" className="hover:text-blue-900 underline">
                    0172-2704495
                  </a>
                  <span>•</span>
                  <a href="tel:01722707255" className="hover:text-blue-900 underline">
                    0172-2707255
                  </a>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Administrative hours: 8:00 AM &ndash; 2:30 PM (Mon-Sat)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-2.5 rounded-lg bg-blue-900 text-amber-300 shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Official Correspondence
                </h4>
                <a
                  href="mailto:info@isdevsamaj21.ac.in"
                  className="text-xs font-bold text-blue-900 hover:underline block"
                >
                  info@isdevsamaj21.ac.in
                </a>
                <a
                  href="mailto:principal@isdevsamaj21.ac.in"
                  className="text-xs text-slate-600 hover:underline block mt-0.5"
                >
                  principal@isdevsamaj21.ac.in
                </a>
              </div>
            </div>

            {/* Wireframe: .cta */}
            <div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                GET DIRECTIONS ON GOOGLE MAPS
              </a>
            </div>
          </div>

          {/* Wireframe: .map-placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-300 min-h-[320px] bg-slate-100 flex flex-col justify-between">
            {/* Visual styled map representation */}
            <div className="absolute inset-0 bg-slate-200">
              <iframe
                title="IS Dev Samaj School Location"
                src="https://maps.google.com/maps?q=IS+Dev+Samaj+Senior+Secondary+School+Sector+21+Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="relative z-10 m-4 p-3 rounded-lg bg-white/95 backdrop-blur-md shadow-md border border-slate-200 self-start max-w-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-900">
                  Campus Open Today
                </span>
              </div>
              <p className="text-[10px] text-slate-600 mt-0.5">
                Sector 21-C, Chandigarh • Easy access via Jan Marg
              </p>
            </div>

            <div className="relative z-10 m-4 self-end">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-slate-900 text-xs font-semibold rounded-md shadow-md border border-slate-300"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-900" />
                Open Full Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
