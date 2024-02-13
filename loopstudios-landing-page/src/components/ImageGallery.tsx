//	interfaces
import { ImageFormat } from '../interfaces/ImageFormat.interface';
import { JSX } from 'react';

interface Props {
	imageFormat: ImageFormat;
}

export const ImageGallery = (props: Props): JSX.Element => {
	const { imgDesktop, imgMobile, title } = props.imageFormat;

	return (
		<picture className='relative after:inset-0 after:bg-gradient-to-t from-gray-900/40 to-white/0 after:absolute'>
			<source media='(min-width: 1025px)' srcSet={imgDesktop} />
			<source media='(min-width: 1024px)' srcSet={imgMobile} />
			<img className='w-full' src={imgMobile} alt='image stock' />
			<h3 className='uppercase absolute text-white z-10 p-4 bottom-0 leading-[2rem] text-balance max-w-48 md:leading-10 sm:max-w-52 lg:max-w-60 text-heading-3'>
				{title}
			</h3>
		</picture>
	);
};
