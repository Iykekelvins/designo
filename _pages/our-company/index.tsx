import Hero from './hero';
import WorldClassTalent from './world-class-talent';
import Locations from '@/shared/locations';

const OurCompany = () => {
	return (
		<div>
			<Hero />
			<WorldClassTalent />
			<Locations page='ab' />
		</div>
	);
};

export default OurCompany;
