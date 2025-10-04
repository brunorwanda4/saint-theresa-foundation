import { cn } from '@/lib/utils';
import Link from 'next/link';

interface props {
  link: string;
  children: string;
  className?: string;
}

const SiteLink = ({ children, link, className }: props) => {
  return (
    <Link
      href={link}
      className={cn(
        'bg-gradient-to-r text-primary-foreground from-primary to-blue-950 rounded-full px-4 py-2',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default SiteLink;
