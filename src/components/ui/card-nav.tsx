"use client";

import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface CardNavLink {
  label: string;
  ariaLabel: string;
  href?: string;
}

interface CardNavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
}

interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#0a0a0a',
  menuColor = '#c9a961',
  buttonBgColor = '#c9a961',
  buttonTextColor = '#0a0a0a'
}: CardNavProps) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[i] = el;
  };

  return (
    <div className={cn("fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-50", className)}>
      <nav 
        ref={navRef} 
        className={cn("card-nav rounded-xl shadow-2xl border border-[#262626]", isExpanded ? 'open' : '')} 
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute top-0 left-0 right-0 h-[60px] flex items-center justify-between px-3 pr-2 z-10">
          <div
            className={cn("hamburger-menu h-full flex flex-col items-center justify-center cursor-pointer gap-[6px]", isHamburgerOpen ? 'open' : '')}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div className="hamburger-line w-[30px] h-[2px] bg-current transition-all duration-250" />
            <div className="hamburger-line w-[30px] h-[2px] bg-current transition-all duration-250" />
          </div>

          <div className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {logo ? (
              <img src={logo} alt={logoAlt} className="h-7" />
            ) : (
              <span className="font-serif text-xl text-[#fafafa]">
                The <span className="text-[#c9a961] italic">Gentleman&apos;s</span> Cut
              </span>
            )}
          </div>

          <button
            type="button"
            className="card-nav-cta-button px-4 h-[40px] rounded-lg font-medium text-sm transition-colors hover:opacity-90"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Book Now
          </button>
        </div>

        <div 
          className="card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex items-end gap-3 invisible pointer-events-none z-[1]" 
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card h-full flex-1 min-w-0 rounded-lg relative flex flex-col p-3 gap-2 select-none"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal text-lg tracking-tight">{item.label}</div>
              <div className="nav-card-links mt-auto flex flex-col gap-0.5">
                {item.links?.map((lnk, i) => (
                  <a 
                    key={`${lnk.label}-${i}`} 
                    className="nav-card-link text-sm cursor-pointer transition-opacity duration-300 hover:opacity-75 inline-flex items-center gap-1.5" 
                    href={lnk.href || '#'} 
                    aria-label={lnk.ariaLabel}
                  >
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
