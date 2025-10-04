'use client';
import MobileSiteNavItems from '@/components/common/navbar/mobile-site-nav-items';
import SiteNavContact from '@/components/common/navbar/site-nav-contact';
import SiteNavItems from '@/components/common/navbar/site-nav-items';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const SiteNav = () => {
  const isScrolled = useScrollPosition(18);

  return (
    <div
      className={cn(
        'flex z-50  justify-between global-px items-center w-full fixed transition-colors duration-300',
        isScrolled && ' border-b-secondary border-b bg-background shadow-md',
      )}
    >
      <div className="max-md:flex max-md:items-center max-md:gap-4">
        {/* Mobile */}
        <MobileSiteNavItems />

        <div className="flex items-center gap-2">
          <Link href={`/`}>
            <div className="relative size-16">
              <Image
                className="object-contain"
                src={'/logo.png'}
                alt="saint theresa foundation"
                fill
                priority
              />
            </div>
          </Link>
        </div>
      </div>

      {/* Nav items wrapper */}
      <div className="flex justify-center w-full">
        <div
          className={cn(
            'transition-all duration-500 ease-in-out w-fit',
            isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-100',
          )}
        >
          <SiteNavItems />
        </div>
      </div>

      <SiteNavContact />
    </div>
  );
};

export default SiteNav;
