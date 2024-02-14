import { JSX } from 'react';

export const Banner = (): JSX.Element => {
	return (
		<div className='w-full h-[100dvh] bg-no-repeat bg-cover bg-center bg-mobile sm:bg-desktop'>
			<div className='max-w-screen-xl mx-auto grid items-center h-full px-4'>
				<h1 className='text-white max-w-xl uppercase text-title border-4 p-4 sm:p-8 leading-tight'>
					immersive experiences that deliver
				</h1>
			</div>
		</div>
	);
};
