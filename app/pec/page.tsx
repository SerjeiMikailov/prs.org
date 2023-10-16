import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-6xl text-white font-bold mb-5">Panis et circenses</h1>
            <p className='text-white mt-20'>
                  Coming soon...            
            </p>
            <Link href="/">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-7 px-14 rounded mb-7 mt-5">Back</button>
            </Link>
      </div>
    </>
  );
}
