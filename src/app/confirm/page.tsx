import InterfaceWrapper from '@/components/InterfaceWrapper/InterfaceWrapper';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function Confirm() {
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
                <span className='display__step'>Theme</span>
                <span className='display__step display__step--active'>
                  Confirm
                </span>
              </div>
              <div className='display__combo'>
                <div className='display__clock'>
                  <div className='display__hours'>00</div>
                  <div className='display__colon'>:</div>
                  <div className='display__minutes display__minutes--active'>
                    12
                  </div>
                  <div className='display__colon display__colon--active'>:</div>
                  <div className='display__seconds display__seconds--active'>
                    56
                  </div>
                </div>
                <div className='display__search'>friday</div>
              </div>
            </div>
          </div>
          <div className='keyboard' id='step2'>
            <Link href='/theme' className='key k-back'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>back</div>
                </div>
              </div>
            </Link>
            <Link href='/timer' className='key k-confirm'>
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
