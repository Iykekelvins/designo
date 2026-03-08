import Locations from '@/_pages/locations';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Locations',
};

const Locationspage = () => {
	return <Locations />;
};

export default Locationspage;
