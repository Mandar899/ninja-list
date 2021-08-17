import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Oooopsies...</h1>
      <h2>PAGE NOT FOUND</h2>
      <p>
        Back to the
        <Link href='/'>
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
