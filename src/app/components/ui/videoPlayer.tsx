import { useState, useEffect } from 'react'

type VideoPlayerProps = {
    src: string;
    title: string;
};

export function VideoPlayer({ src, title }: VideoPlayerProps) {
    const [iframeKey, setIframeKey] = useState(0);

    useEffect(() => {
        setIframeKey(prevKey => prevKey + 1);
    }, [src]);

    return (
        <div className="w-full h-full">
            <iframe
                key={iframeKey}
                src={src}
                title={title}
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
            />
        </div>
    )
}