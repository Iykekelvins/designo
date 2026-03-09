import Hero from './hero';
import Locations from '@/shared/locations';

const Contact = () => {
	return (
		<div className='mb-[max(10rem,120px)]'>
			<Hero />
			<Locations page='c' />
		</div>
	);
};

export default Contact;
