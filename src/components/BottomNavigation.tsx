'use client';

import ICON from '@/constants/ICON';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BOTTOM_MENU = [
  { path: '/', text: '탐색', icon: ICON.nav.home },
  { path: '/upload', text: '등록', icon: ICON.nav.upload },
  { path: '/mypage', text: '마이', icon: ICON.nav.mypage },
] as const;

const BottomNavigation = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="flex w-full items-center h-12 justify-around fixed bottom-0 bg-white max-w-mobile">
        {BOTTOM_MENU.map(({ path, text, icon }) => (
          <Link href={path} key={path}>
            <div className="w-20 flex flex-col items-center">
              <Image src={icon} alt={text} width={20} height={20} />
              <span
                className={isActive(path) ? 'text-[#330218]' : 'text-[#999999]'}
              >
                {text}
              </span>
            </div>
          </Link>
        ))}
      </nav>
      <div className="h-[54px]" />
    </>
  );
};

export default BottomNavigation;
