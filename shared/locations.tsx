import Button from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Locations({ page }: { page: 'ab' | 'c' }) {
	const locations = [
		{
			name: 'CANADA',
			tag: 'ca',
			img: '/images/canada.webp',
		},
		{
			name: 'AUSTRALIA',
			tag: 'aus',
			img: '/images/australia.webp',
		},
		{
			name: 'UNITED KINGDOM',
			tag: 'uk',
			img: '/images/uk.webp',
		},
	];

	return (
		<section className='pt-[max(10rem,120px)] relative'>
			<ul className='grid des:grid-cols-3 gap-[max(5rem,80px)] des:gap-0'>
				{locations.map((loc) => (
					<li key={loc.name} className='flex flex-col items-center'>
						<Image
							src={loc.img}
							width={202}
							height={202}
							alt={`picture of ${loc.name}`}
							className='des:w-50.5'
						/>
						<p
							className='text-20 font-medium tracking-[5px] 
            pt-[max(3rem,48px)] text-center'>
							{loc.name}
						</p>
						<Link href={`/locations?tag=${loc.tag}`} className='mt-[max(2rem,32px)]'>
							<Button>SEE LOCATION</Button>
						</Link>
					</li>
				))}
			</ul>
			<svg
				width='1006'
				height='594'
				viewBox='0 0 1006 594'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className={`absolute w-251.5 h-148.5 hidden des:block z-[-1]
        ${page === 'ab' ? '-right-140 -bottom-100' : ''}
        `}>
				<path
					opacity='0.502255'
					d='M0 297C0 132.971 132.971 0 297 0H709C873.029 0 1006 132.971 1006 297C1006 461.029 873.029 594 709 594H0V297Z'
					fill='#F1F3F5'
				/>
			</svg>
		</section>
	);
}
