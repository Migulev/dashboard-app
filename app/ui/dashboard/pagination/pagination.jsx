'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ITEM_PER_PAGE } from '@/app/lib/config';
import styles from './pagination.module.css';

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get('page') || 1;

  const params = new URLSearchParams(searchParams);

  const hasPrev = ITEM_PER_PAGE * (+page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (+page - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === 'prev'
      ? params.set('page', +page - 1)
      : params.set('page', +page + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}>
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
