'use client';
import { cn } from '@/lib/utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';

export default function AnimatedLink({
  href,
  pathname,
  children,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
}) {
  const lineRef = useRef<HTMLDivElement>(null);
  const isActive = pathname.startsWith(href);

  useGSAP(() => {
    if (isActive && lineRef.current) {
      gsap.set(lineRef.current, { scaleX: 1, transformOrigin: 'left center' });
    } else {
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' });
    }
  }, [isActive]);

  const handleEnter = () => {
    if (!isActive && lineRef.current) {
      gsap.to(lineRef.current, {
        scaleX: 1,
        duration: 0.5,
        ease: 'power2.out',
        transformOrigin: 'left center',
      });
    }
  };

  const handleLeave = () => {
    if (!isActive && lineRef.current) {
      gsap.to(lineRef.current, {
        scaleX: 0,
        duration: 0.5,
        ease: 'power2.in',
        transformOrigin: 'right center',
      });
    }
  };

  return (
    <Link
      href={href}
      className="space-y-1 flex-col flex"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span>{children}</span>
      <div
        ref={lineRef}
        className={cn('h-0.5 w-full bg-primary')}
        style={{ transformOrigin: 'left center', transform: 'scaleX(0)' }}
      />
    </Link>
  );
}
