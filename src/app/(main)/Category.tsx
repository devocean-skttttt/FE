'use client';

import CATEGORY from '@/constants/CATEGORY';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Category() {
  const router = useRouter();
  const params = useSearchParams();
  const mainCategory = params.get('main');
  console.log('🚀 ~ Category ~ param:', params);

  function selectMain(type: 'main' | 'sub', item: string) {
    const curParams = new URLSearchParams(params.toString());
    curParams.set(type, item);
    const newParmas = curParams.toString();
    return router.replace(`?${newParmas}`);
  }

  return (
    <div className="flex justify-between">
      {CATEGORY.map((item) => (
        <div>
          <button
            onClick={() => selectMain('main', item.text)}
            style={{ color: mainCategory === item.text ? 'pink' : 'black' }}
          >
            {item.text}
          </button>
        </div>
      ))}
    </div>
  );
}
