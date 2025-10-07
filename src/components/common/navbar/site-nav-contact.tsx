import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaBluesky, FaXTwitter } from 'react-icons/fa6';
const SiteNavContact = () => {
  return (
    <div className=" flex gap-4 items-center flex-row">
      <Link href={'/#'} target="_blank" className=" ">
        <div className="hover:text-primary text-primary/90 duration-200 hover:scale-110 cursor-pointer">
          <FaFacebook size={24} className="" />
        </div>
      </Link>
      <Link href={'/#'} target="_blank" className=" ">
        <div className="hover:text-primary text-primary/90 duration-200 hover:scale-110 cursor-pointer">
          <FaInstagram size={24} className="" />
        </div>
      </Link>
      <Link href={'/#'} target="_blank" className=" ">
        <div className="hover:text-primary text-primary/90 duration-200 hover:scale-110 cursor-pointer">
          <FaXTwitter size={24} className="" />
        </div>
      </Link>
      <Link href={'/#'} target="_blank" className=" ">
        <div className="hover:text-primary text-primary/90 duration-200 hover:scale-110 cursor-pointer">
          <FaLinkedin size={24} className="" />
        </div>
      </Link>
      <Link href={'/#'} target="_blank" className=" ">
        <div className="hover:text-primary text-primary/90 duration-200 hover:scale-110 cursor-pointer">
          <FaBluesky size={24} className="" />
        </div>
      </Link>
      <Link href={'/#'} target="_blank" className=" ">
        <div className="hover:text-primary text-primary/90 duration-200 hover:scale-110 cursor-pointer">
          <FaYoutube size={24} className="" />
        </div>
      </Link>
      <Link href={`/contact`} className={cn(buttonVariants({ variant: 'secondary' }))}>
        Contact
      </Link>
    </div>
  );
};

export default SiteNavContact;
