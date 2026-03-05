import Image from 'next/image';

const features = [
	{
		img: '/images/home/passionate.webp',
		title: 'PASSIONATE',
		info: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
	},
	{
		img: '/images/home/resourceful.webp',
		title: 'RESOURCEFUL',
		info: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
	},
	{
		img: '/images/home/friendly.webp',
		title: 'FRIENDLY',
		info: ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
	},
];

export default function Features() {
	return (
		<section className='pt-[max(10rem,120px)] relative'>
			<ul
				className='grid des:grid-cols-3 gap-x-[max(1.875rem,30px)]
        gap-y-[max(2rem,32px)]
        '>
				{features.map((feature, i) => (
					<li
						key={i}
						className='flex flex-col sm:flex-row des:flex-col 
            items-center gap-[max(3rem,48px)]'>
						<Image
							src={feature.img}
							width={202}
							height={202}
							alt='Feature illustration'
							className='des:w-50.5'
						/>
						<div className='text-center sm:text-left des:text-center'>
							<h3 className='text-20 font-medium tracking-[5px]'>{feature.title}</h3>
							<p className='text-16 leading-[1.6] mt-[max(2rem,32px)]'>
								{feature.info}
							</p>
						</div>
					</li>
				))}
			</ul>

			<svg
				width='1006'
				height='594'
				viewBox='0 0 1006 594'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute -bottom-72 -right-48 w-251.5 h-148.5 hidden des:block z-[-1]'>
				<path
					opacity='0.502255'
					d='M1006 297C1006 461.029 873.029 594 709 594H297C132.971 594 0 461.029 0 297C0 132.971 132.971 0 297 0H1006V297Z'
					fill='#F1F3F5'
				/>
			</svg>
		</section>
	);
}
