import { Fade } from '@mui/material';
import { FC, useEffect, useRef, useState } from 'react';
import { LoadingScreen } from '../components/LoadingScreen';

export const useHeaderVideo = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [videoIndex, setVideoIndex] = useState(0);
	const [isFade, setIsFade] = useState(true);
	const [showImage, setShowImage] = useState(false);

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
				setVideoIndex((prev) => prev + 1 /* % videos.length */); //@note: comment out if want to have infinit loop of videos
				if (videoIndex === videos.length - 1) {
					setShowImage(true);
					return;
				}
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

	const VideoTransition: FC = () => {
		const [isVideoLoading, setIsVideoLoading] = useState(true);

		if (isVideoLoading) {
			<LoadingScreen />;
		}
		return (
			!showImage && (
				<Fade in={isFade} timeout={500}>
					<video
						ref={videoRef}
						width={'100%'}
						height={'100%'}
						style={{
							position: 'absolute',
							left: 0,
							top: 0,
							objectFit: 'cover',
							backgroundColor: 'rgb(0, 0, 0)',
						}}
						autoPlay
						playsInline
						muted
						controls={false}
						onLoadedData={() => setIsVideoLoading(false)}
					>
						<source src={videos[videoIndex]} type={'video/mp4'} style={{ backgroundColor: '#000' }} />
					</video>
				</Fade>
			)
		);
	};

	return { showImage, VideoTransition };
};
