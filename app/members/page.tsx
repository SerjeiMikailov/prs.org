import Image from 'next/image';
import Link from 'next/link';
import '../globals.css';

export default function Home() {
  return (
    <>
      <body>
          <h1>
            <a className='refreshButton' href="">PRS - Foundation</a></h1>


          <nav>
            <a className='discordlink' href="https://discord.com/" target='_blank'>
              <img src="https://media.discordapp.net/attachments/861058564545445909/1163618605884252180/640px-Discord-Icon-2021.png?ex=65403b46&is=652dc646&hm=d2f63ac127b00df2e1484440c3dd8472e29787a35f3a90fb00fd4b761abc860c&=" alt="Discord Link" />
            </a>
          </nav>





      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white font-bold mb-40">Contact</h1>
      </div>

      </body>
    </>
  );
}
