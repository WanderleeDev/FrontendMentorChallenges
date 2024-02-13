import { JSX } from 'react';
//	Images
import { images } from '../data/images';
//	Components
import { ImageGallery } from './ImageGallery';
import { BasicBtn } from './BasicBtn';

export const Gallery = (): JSX.Element => {
	const imagesCard = [...images];

	return (
		<section className='grid lg:grid-cols-2'>
			<h2 className='uppercase p-8 py-12 text-center text-subTitle lg:col-start-1 lg:col-end-2 lg:justify-self-start lg:px-0'>
				Our creations
			</h2>
			<div className='grid gap-8 text-heading-3  sm:grid-cols-2 lg:grid-cols-4  lg:col-start-1 lg:col-end-3 lg:col-row-2 lg:col-row-3'>
				{imagesCard.map((img, i) => (
					<ImageGallery imageFormat={img} key={i} />
				))}
			</div>
			<BasicBtn />
		</section>
	);
};
