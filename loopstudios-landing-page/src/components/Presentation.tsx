//	Image
import img from '../assets/images/mobile/image-interactive.webp';
//	Interfaces
import { JSX } from 'react';

export const Presentation = (): JSX.Element => {
	return (
		<section className='min-h-[70dvh] grid gap-10 place-content-center  lg:grid-cols-8 lg:grid-rows-5 lg:gap-0 lg:py-12'>
			<img
				className='w-full lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-6 lg:h-full'
				src={img}
				alt='image stock'
			/>
			<div className='flex flex-col gap-4 justify-between bg-white lg:col-start-5 lg:col-end-9 lg:row-start-3 lg:row-end-6 h-full lg:pt-24 lg:pl-24'>
				<h2 className='text-center uppercase text-subTitle lg:font-medium lg:leading-tight lg:text-left'>
					The leader in interactive vr
				</h2>
				<p className='text-center text-[#8c8c8c] leading-loose lg:text-left lg:text-pretty'>
					Founded in 2011, Loopstudios has been producing world-class virtual
					reality projects for some oh the best companies around the globe. Our
					award-winning creations have transformed businesses through digital
					experiences that bind to their brand.
				</p>
			</div>
		</section>
	);
};
