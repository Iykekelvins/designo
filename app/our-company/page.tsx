import OurCompany from '@/_pages/our-company';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Our Company',
};

const OurCompanypage = () => {
	return <OurCompany />;
};

export default OurCompanypage;
