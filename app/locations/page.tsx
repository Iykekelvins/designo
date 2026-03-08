import Locations from '@/_pages/locations';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
	title: 'Locations',
};

const Locationspage = () => {
	return (
		<Suspense>
			<Locations />
		</Suspense>
	);
};

export default Locationspage;
