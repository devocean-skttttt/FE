'use client';

import { usePathname } from 'next/navigation';
import Category from './Category';

export default function Page() {
  const pathname = usePathname();

  return (
    <div className="px-main">
      <Category />
    </div>
  );
}
