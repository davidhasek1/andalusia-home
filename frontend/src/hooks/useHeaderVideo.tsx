import { Fade } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';

export const useHeaderVideo = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [videoIndex, setVideoIndex] = useState(0);
	const [isFade, setIsFade] = useState(true);
	const videos = [
		'https://davidhasek1.github.io/andalusia-home-static/video-1.mp4',
		'https://davidhasek1.github.io/andalusia-home-static/video-3.mp4',
	];
	useEffect(() => {
		const videoPlayer = videoRef.current;

		const handleVideoEnd = () => {
			setIsFade(false);
			setTimeout(() => {
				setIsFade(true);
				setVideoIndex((prev) => (prev + 1) % videos.length);
			}, 100);
		};
		if (videoPlayer) {
			videoPlayer.addEventListener('ended', handleVideoEnd);

			return () => {
				videoPlayer.removeEventListener('ended', handleVideoEnd);
			};
		}
	}, [videoIndex, videos.length]);

	useEffect(() => {
		const videoPlayer = videoRef.current;
		if (videoPlayer) {
			videoPlayer.load();
			videoPlayer.play();
		}
	}, [videoIndex]);

	const VideoTransition: FC<{ children: JSX.Element }> = ({ children }) => (
		<Fade in={isFade} timeout={500}>
			{children}
		</Fade>
	);

	return { videoRef, videos, videoIndex, VideoTransition };
};
