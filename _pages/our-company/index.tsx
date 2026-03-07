import Hero from './hero';
import WorldClassTalent from './world-class-talent';
import Locations from '@/shared/locations';
import RealDeal from './real-deal';

const OurCompany = () => {
	return (
		<div>
			<Hero />
			<WorldClassTalent />
			<Locations page='ab' />
			<RealDeal />
		</div>
	);
};

export default OurCompany;
