import {useEffect, useRef, useState} from "react";

// Выбираем ближайшее разрешение к ширине контейнера
const pickBestVersion = (versions, containerWidth) => {
    return versions.reduce((prev, curr) =>
        Math.abs(curr - containerWidth) < Math.abs(prev - containerWidth) ? curr : prev
    );
};

const VideoSource = ({path, name, className, text, width, url}) => {
    const [videoWidth, setVideoWidth] = useState(1080);
    const [isVisible, setIsVisible] = useState(false);
    const [availableWidths, setAvailableWidths] = useState(width || [1080])
    const containerRef = useRef(null);

    // Lazy-load
    useEffect(() => {
        setAvailableWidths(width)
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {threshold: 0.1}
        );

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    // Обновляем ширину видео при изменении размера контейнера
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const updateVideoWidth = () => {
            if (!el) return;
            const containerWidth = el.offsetWidth;
            const best = pickBestVersion(availableWidths, containerWidth);
            setVideoWidth(best);
        };

        updateVideoWidth();

        const ro = new ResizeObserver(updateVideoWidth);
        ro.observe(el);

        return () => ro.disconnect();
    }, [availableWidths]);

    const poster = `${path}/${name}_${videoWidth}.jpg`;
    // console.log(`${path}/${name}_${videoWidth}.mp4`)
    return (
        <div ref={containerRef} className={`${className} relative darken`}>
            {isVisible && (
                <video
                    className="video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={poster}
                    controls={false}
                    preload="none"
                >
                    {/*<source src={`${path}/${name}_${videoWidth}.webm`} type="video/webm"/>*/}
                    <source src={`${path}/${name}_${videoWidth}.mp4`} type="video/mp4"/>
                </video>
            )}
            {text && <span className="home__card-span-text fs-36">{text.toUpperCase()}</span>}
        </div>
    );
};

export default VideoSource;
