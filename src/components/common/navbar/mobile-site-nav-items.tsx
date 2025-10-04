'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useMediaQuery } from '@/lib/utils/media-query';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMdList } from 'react-icons/io';

const MobileSiteNavItems = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [open, setOpen] = useState(false);
  if (!isMobile) return null;

  // helper: closes sheet after clicking link
  const handleClose = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <IoMdList size={24} /> <span className=" sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-4 space-y-8">
        <nav className="space-y-8">
          <div className="flex items-center gap-2">
            <div className=" relative size-24">
              <Image
                className=" object-contain"
                src={'/logo.png'}
                alt="saint theresa foundation"
                fill
                priority
              />
            </div>
            <Link href="/" className="hover:opacity-80" onClick={handleClose}>
              <h1 className="font-sans font-semibold text-xl">Iteme charity family</h1>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/join-us" onClick={handleClose}>
                Join us
              </Link>
            </Button>
            <Button asChild>
              <Link href="/get-in-touch" onClick={handleClose}>
                Get in touch
              </Link>
            </Button>
          </div>
        </nav>
        <ul className="space-y-4">
          <li className="w-full h-10 flex items-center px-4 rounded-md hover:bg-base-200">
            <Link href="/" className="w-full" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li className="w-full h-10 flex items-center px-4 rounded-md hover:bg-base-200">
            <Link href="/story" className="w-full" onClick={handleClose}>
              Stories
            </Link>
          </li>
          <li className="w-full h-10 flex items-center px-4 rounded-md hover:bg-base-200">
            <Link href="/charities" className="w-full" onClick={handleClose}>
              Charities & donation
            </Link>
          </li>
          <li className="w-full h-10 flex items-center px-4 rounded-md hover:bg-base-200">
            <Link href="/members" className="w-full" onClick={handleClose}>
              Members
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSiteNavItems;
