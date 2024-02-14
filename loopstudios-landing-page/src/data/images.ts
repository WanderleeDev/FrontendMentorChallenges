import { ImageFormat } from '../interfaces/ImageFormat.interface';
import deepEarth from '../assets/images/desktop/image-deep-earth.webp';
import deepEarthMobile from '../assets/images/mobile/image-deep-earth.webp';
import arcade from '../assets/images/desktop/image-night-arcade.webp';
import arcadeMobile from '../assets/images/mobile/image-night-arcade.webp';
import soccer from '../assets/images/desktop/image-soccer-team.webp';
import soccerMobile from '../assets/images/mobile/image-soccer-team.webp';
import grid from '../assets/images/desktop/image-grid.webp';
import gridMobile from '../assets/images/mobile/image-grid.webp';
import vr from '../assets/images/desktop/image-from-above.webp';
import vrMobile from '../assets/images/mobile/image-from-above.webp';
import pocket from '../assets/images/desktop/image-pocket-borealis.webp';
import pocketMobile from '../assets/images/mobile/image-pocket-borealis.webp';
import curiosity from '../assets/images/desktop/image-curiosity.webp';
import curiosityMobile from '../assets/images/mobile/image-curiosity.webp';
import fishEye from '../assets/images/desktop/image-fisheye.webp';
import fishEyeMobile from '../assets/images/mobile/image-fisheye.webp';

export const images: ImageFormat[] = [
	{
		imgDesktop: deepEarth,
		imgMobile: deepEarthMobile,
		title: 'deep earth',
	},
	{
		imgDesktop: arcade,
		imgMobile: arcadeMobile,
		title: 'night arcade',
	},
	{
		imgDesktop: soccer,
		imgMobile: soccerMobile,
		title: 'soccer team vr',
	},
	{
		imgDesktop: grid,
		imgMobile: gridMobile,
		title: 'the grid',
	},
	{
		imgDesktop: vr,
		imgMobile: vrMobile,
		title: 'from up above vr',
	},
	{
		imgDesktop: pocket,
		imgMobile: pocketMobile,
		title: 'pocket borealis',
	},
	{
		imgDesktop: curiosity,
		imgMobile: curiosityMobile,
		title: 'the curiosity',
	},
	{
		imgDesktop: fishEye,
		imgMobile: fishEyeMobile,
		title: 'make it fisheye',
	},
];
