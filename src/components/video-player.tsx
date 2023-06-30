'use client'

import React, { useRef, useEffect, useState } from 'react';

type VideoPlayerProps = {
    src: string[]
}

export default function VideoPlayer ({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [sources, setSources] = useState(src);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('play', () => {
                video.muted = false;
            });

            video.addEventListener('ended', () => {
                console.log("ended")
                setSources(prevSources => prevSources.slice(1));
            });

            // cleanup function
            return () => {
                video.removeEventListener('play', () => {
                    video.muted = false;
                });

                video.removeEventListener('ended', () => {
                    setSources(prevSources => prevSources.slice(1));
                });
            };
        }
    }, []);

    return (
        sources[0] && (
            <video key={sources[0]} ref={videoRef} autoPlay muted controls>
                <source src={sources[0]} type="video/mp4" />
            </video>
        )
    );
};
