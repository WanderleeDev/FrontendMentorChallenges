import { JSX } from 'react';

export const Banner = (): JSX.Element => {
	return (
		<div className='w-full h-[100dvh] bg-no-repeat bg-cover bg-center grid place-content-center bg-mobile sm:bg-desktop'>
			<h1 className='text-white uppercase text-title border-4 p-8 leading-tight'>
				immersive experiences that deliver
			</h1>
		</div>
	);
};
