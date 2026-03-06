'use client';

import { usePathname } from 'next/navigation';

import Button from '@/components/button';
import Link from 'next/link';

export default function LetsTalk() {
	const pathname = usePathname();

	if (pathname === '/contact') return null;

	return (
		<div
			className='mt-[max(10rem,96px)] rounded-15 bg-peach
      sm:bg-right relative z-2 bg-center bg-no-repeat bg-cover 
      px-[max(6rem,24px)] py-[max(4.5rem,64px)] 
      bg-[url(/images/lets-talk-bg-mobile.png)]
			sm:bg-[url(/images/lets-talk-bg.png)]
      '>
			<div
				className='flex items-center justify-between gap-[max(2rem,32px)]
      flex-col text-center des:flex-row des:text-left
      '>
				<div className='text-white'>
					<h2 className='text-40 font-medium leading-none'>
						Let’s talk about <br /> your project
					</h2>
					<p
						className='text-16 leading-[1.6] mt-[max(1rem,16px)]
            max-w-[max(27.6875rem,280px)] sm:max-w-140
            des:max-w-[max(27.6875rem,280px)]
            '>
						Ready to take it to the next level? Contact us today and find out how our
						expertise can help your business grow.
					</p>
				</div>

				<Link href='/contact'>
					<Button variant='secondary'>Get in touch</Button>
				</Link>
			</div>
		</div>
	);
}
