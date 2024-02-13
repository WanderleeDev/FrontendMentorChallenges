import { JSX } from 'react';

export const SocialMedia = (): JSX.Element => {
	const images = [
		'/src/assets/images/icons/icon-facebook.svg',
		'/src/assets/images/icons/icon-twitter.svg',
		'/src/assets/images/icons/icon-pinterest.svg',
		'/src/assets/images/icons/icon-instagram.svg',
	];

	return (
		<figure className='flex gap-5 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:justify-self-end'>
			{images.map((img, i) => (
				<img src={img} key={i} alt='logo' loading='lazy' />
			))}
		</figure>
	);
};
