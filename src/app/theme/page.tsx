import InterfaceWrapper from '@/components/InterfaceWrapper/InterfaceWrapper';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function ThemePage() {
  return (
    <div className='app'>
      <main className='interface'>
        <Header />
        <InterfaceWrapper>
          <div className='interface__texts'>
            <p>
              Search for a set of GIFs. Type a keyword and we’ll take care of
              the rest
            </p>
          </div>
          <div className='interface__display'>
            <div className='display'>
              <div className='display__steps'>
                <span className='display__step'>Time</span>
                <span className='display__step display__step--active'>
                  Theme
                </span>
                <span className='display__step'>Confirm</span>
              </div>
              <div className='display__search'>friday_</div>
            </div>
          </div>
          <div className='keyboard' id='step2'>
            <Link href='/set' className='key k-back'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>back</div>
                </div>
              </div>
            </Link>
            <Link href='/confirm' className='key k-confirm'>
              <div className='key__socket--square'>
                <div className='key__cap--orange'>
                  <div className='key__face'>next</div>
                </div>
              </div>
            </Link>
          </div>
        </InterfaceWrapper>
      </main>
      <aside className='preview'>
        <div className='viewmaster'>
          <div className='picture'>
            <Image
              src='/images/example.jpg'
              width={0}
              height={0}
              sizes='25dvw'
              alt=''
              unoptimized
            />
          </div>
          <div className='picture'>
            <Image
              src='/images/example.jpg'
              width={0}
              height={0}
              sizes='25dvw'
              alt=''
              unoptimized
            />
          </div>
          <div className='picture'>
            <Image
              src='/images/example.jpg'
              width={0}
              height={0}
              sizes='25dvw'
              alt=''
              unoptimized
            />
          </div>
        </div>
        <div className='credits'>
          <p>
            ©timer.gif
            <br />
            Powered by Giphy
            <br />
            ChangoFanko, 2024
          </p>
        </div>
      </aside>
    </div>
  );
}
