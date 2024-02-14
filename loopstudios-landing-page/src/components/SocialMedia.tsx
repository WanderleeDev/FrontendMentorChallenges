import { JSX } from 'react';
//	Images
import facebook from '../assets/images/icons/icon-facebook.svg';
import twitter from '../assets/images/icons/icon-twitter.svg';
import pinterest from '../assets/images/icons/icon-pinterest.svg';
import instagram from '../assets/images/icons/icon-instagram.svg';

export const SocialMedia = (): JSX.Element => {
	const images = [facebook, twitter, pinterest, instagram];

	return (
		<figure className='flex gap-5 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:justify-self-end'>
			{images.map((img, i) => (
				<img src={img} key={i} alt='logo' loading='lazy' />
			))}
		</figure>
	);
};
