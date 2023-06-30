'use client'

import React, { useRef, useEffect } from 'react';

type VideoPlayerProps = {
    src: string
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            console.log("jojo")
            video.addEventListener('playing', () => {
                console.log("asdf")
                video.muted = false;
            });

            // cleanup function
            return () => {
                console.log("clean up")
                video.removeEventListener('play', () => {
                    video.muted = false;
                });
            };
        }

    }, []);

    return (
        <video ref={videoRef} autoPlay muted controls loop>
            <source src={src} type="video/mp4" />
        </video>
    );
};

export default VideoPlayer;
