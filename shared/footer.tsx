import { footer_icons } from '@/components/icons';
import { NAVLINKS } from '@/lib/mock';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer
			className='bg-black sm:pt-[max(9rem,144px)] sm:-mt-[max(4rem,64px)] 
			 pb-[max(4.5rem,72px)] -mt-[max(6rem,96px)] pt-[max(153px)]'>
			<div className='ac'>
				<div
					className='flex items-center justify-between
					sm:pb-[max(2.5rem,40px)] sm:border-b border-white/10
					flex-col sm:flex-row gap-[max(2rem,32px)]
					'>
					<div
						className='flex items-center justify-center sm:justify-start
						max-sm:border-b border-white/10 max-sm:pb-[max(2rem,32px)]
						w-full sm:w-auto
						'>
						<Link href='/'>
							<Image
								src='/footer-logo.svg'
								alt='Designo Logo'
								width={202}
								height={27}
							/>
						</Link>
					</div>

					<ul
						className='flex items-center gap-[max(2.625rem,42px)]
					flex-col sm:flex-row
					'>
						{NAVLINKS.map((link) => (
							<li key={link.name}>
								<Link
									href={link.href}
									className='text-white text-14 tracking-[2px]
									uppercase
									'>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div
					className='flex sm:items-end justify-between pt-[max(1.875rem,30px)]
					flex-col sm:flex-row items-center text-center sm:text-left 
					max-sm:gap-[max(2.5rem,40px)]
				'>
					<div className='flex-1 grid sm:grid-cols-2 max-sm:gap-[max(2.5rem,40px)]'>
						<div className='text-16 text-white leading-[1.6] opacity-50'>
							<p className='font-bold'>Designo Central Office</p>
							<p>3886 Wellington Street</p>
							<p>Toronto, Ontario M9C 3J5</p>
						</div>

						<div className='text-16 text-white leading-[1.6] opacity-50 font-bold'>
							<p>Contact Us (Central Office)</p>
							<p>
								P: <Link href='tel:+12538638967'>+1 253-863-8967</Link>
							</p>
							<p>
								M: <Link href='mailto:contact@designo.co'>contact@designo.co</Link>
							</p>
						</div>
					</div>

					<ul className='flex items-center gap-[max(1rem,16px)]'>
						{footer_icons.map((Icon, index) => (
							<li key={index}>
								<Link
									href='#'
									className='[&_svg_path]:transition-colors [&_svg_path]:duration-500
								[&_svg_path]:ease-in-out hover:[&_svg_path]:fill-light-peach
								'>
									<Icon />
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
