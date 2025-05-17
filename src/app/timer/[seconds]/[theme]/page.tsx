'use client';

import InterfaceWrapper from '@/components/InterfaceWrapper/InterfaceWrapper';
import Header from '@/components/Header/Header';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Timer() {
  const params = useParams();
  const initialSeconds: number = params.seconds ? Number(params.seconds) : 0;
  const [totalSeconds, setTotalSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (initialSeconds <= 0) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (number: number) => String(number).padStart(2, '0');

  return (
    <div className='app'>
      <main className='viewmaster-clock'>
        <Header />
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
        <div className='clock'>
          <div className='display__hours'>{pad(hours)}</div>
          <div className='display__colon'>:</div>
          <div className='display__minutes'>{pad(minutes)}</div>
          <div className='display__colon'>:</div>
          <div className='display__seconds'>{pad(seconds)}</div>
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
      </main>
    </div>
  );
}
