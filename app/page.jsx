import Link from 'next/link';

import styles from './ui/homePage.module.css';

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Link href={'/dashboard'}>Dashboard</Link>
    </div>
  );
};

export default Homepage;
