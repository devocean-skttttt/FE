'use client';

import ICON from '@/constants/ICON';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Updated to use next/navigation

const BOTTOM_MENU = [
  { path: '/', text: '탐색', icon: ICON.nav.home },
  { path: '/upload', text: '등록', icon: ICON.nav.upload },
  { path: '/mypage', text: '마이', icon: ICON.nav.mypage },
] as const;

function BottomNavigation() {
  const pathname = usePathname(); // Get the current path using usePathname

  // Check if the current path is active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <div className="flex w-full items-center h-12 justify-around fixed bottom-0 bg-white max-w-mobile">
        {BOTTOM_MENU.map((item) => (
          <Link href={item.path} key={item.path}>
            <div className="w-20 flex flex-col items-center">
              <Image src={item.icon} alt={item.icon} width={20} height={20} />
              <div
                className={`${
                  isActive(item.path) ? 'text-[#330218]' : 'text-[#999999]'
                }`}
              >
                {item.text}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="h-[54px]" />
    </>
  );
}

export default BottomNavigation;
