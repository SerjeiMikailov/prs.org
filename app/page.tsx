import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white font-bold mb-40">PRS - Foundation</h1>
        <Link href="/foundation">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-7 px-14 rounded mb-7">Our Foundation</button>
        </Link>
        <Link href="/pec">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-7 px-14 rounded mb-7">VRU</button>
        </Link>
        <Link href="/contact">
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-7 px-14 rounded mb-7">Contact Us</button>
        </Link>
      </div>
    </>
  );
}
