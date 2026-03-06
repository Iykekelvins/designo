export default function Hero({ project }: { project: SingleProjectProps }) {
	return (
		<section
			className='sm:py-[max(4rem,64px)] px-gutter bg-peach sm:rounded-15
  		flex flex-col items-center justify-center text-center
  		sm:bg-[url(/images/project-hero-bg.png)] bg-no-repeat bg-cover
  	text-white gap-gutter max-sm:-mx-gutter relative
		bg-[url(/images/project-hero-bg-mobile.png)] py-[max(105px)]
  		'>
			<h1 className='text-48 font-medium'>{project.name}</h1>
			<p className='text-16 leading-[1.6] max-w-[max(25rem,400px)]'>
				{project.description}
			</p>
			<svg
				width='1006'
				height='594'
				viewBox='0 0 1006 594'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='absolute w-251.5 h-148.5 hidden des:block z-[-1]
				-left-48 -bottom-112
				'>
				<path
					opacity='0.502255'
					d='M0 297C0 132.971 132.971 0 297 0H709C873.029 0 1006 132.971 1006 297C1006 461.029 873.029 594 709 594H0V297Z'
					fill='#F1F3F5'
				/>
			</svg>
		</section>
	);
}
