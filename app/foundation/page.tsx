import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-40">
            <h1 className="text-6xl text-white font-bold mb-5">About Our Foundation</h1>
            <p className='text-white mt-20'>
                Our foundation was officially established approximately 7 years ago with the aim of creating a Companions Guild. Today, our focus lies in philanthropy, philosophy, and societal matters.
            </p>
            <p className='text-white mt-1'>
                Politically, we align with libertarian/ancap principles, emphasizing the importance of a free trade society. Our guiding principle is freedom.
            </p>
            <p className='text-white mt-5 font-bold text-2xl'>
                We won&apos;t accept:
            </p>
            <p className='text-white mt-2'>
                  Non Western people
            </p>
            <p className='text-white mt-1'>
                  Communists/Socialists
            </p>
            <p className='text-white mt-1'>
                  Globalists
            </p>
            <Link href="/">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-7 px-14 rounded mb-7 mt-5">Back</button>
            </Link>
      </div>
    </>
  );
}
