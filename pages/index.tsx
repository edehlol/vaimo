import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>No, not here.</h1>
        <Link href="/product/1">
          <a style={{ textDecoration: 'underline', color: '#1565C0' }}>Here is the page</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
