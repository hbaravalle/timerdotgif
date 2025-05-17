import InterfaceWrapper from '@/components/InterfaceWrapper/InterfaceWrapper';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import Image from 'next/image';

export default function SetPage() {
  return (
    <div className='app'>
      <main className='interface'>
        <Header />
        <InterfaceWrapper>
          <div className='interface__texts'>
            <p>Ready to set a timer?</p>
          </div>
          <div className='interface__display'>
            <div className='display'>
              <div className='display__steps'>
                <span className='display__step display__step--active'>
                  Time
                </span>
                <span className='display__step'>Theme</span>
                <span className='display__step'>Confirm</span>
              </div>
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
            </div>
          </div>
          <div className='keyboard' id='step1'>
            <div className='key k-seven'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>7</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-eight'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>8</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-nine'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>9</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-delete'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>del</div>
                </div>
              </div>
            </div>
            <div className='key k-four'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-five'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>5</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-six'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>6</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-delete'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    +1
                    <br />
                    min
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-one'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>1</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-two'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>2</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-three'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='key k-ten_secs'>
              <div className='key__socket--square'>
                <div className='key__cap'>
                  <div className='key__face'>
                    +10
                    <br />
                    secs
                  </div>
                </div>
              </div>
            </div>

            <div className='key k-zero'>
              <div className='key__socket--rect'>
                <div className='key__cap'>
                  <div className='key__face'>
                    <div className='key__indent'>0</div>
                  </div>
                </div>
              </div>
            </div>

            <Link href='/theme'>
              <div className='key k-confirm'>
                <div className='key__socket--square'>
                  <div className='key__cap--orange'>
                    <div className='key__face'>OK</div>
                  </div>
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
