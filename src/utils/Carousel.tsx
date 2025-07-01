import React, { useState } from 'react';
import ArrowButton from './ArrowButton';

export type CarouselImage = {
    src: string;
    title?: string;
    alt: string;
};

type CarouselProps = {
    images: CarouselImage[];
    visibleCount?: number;
    imageWidth?: number;
    imageHeight?: number;
};

const Carousel: React.FC<CarouselProps> = ({
    images,
    visibleCount = 3,
    imageWidth = 240,
    imageHeight = 480,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = images.length;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
    };

    const rowWidth = imageWidth * total + (total - 1) * 16;
    const visibleAreaWidth = imageWidth * visibleCount + (visibleCount - 1) * 16;
    const translateX = -(currentIndex * (imageWidth + 16));

    const buttonSize = 36;
    const buttonMargin = 24;
    const totalWidth = (imageWidth * visibleCount) + (visibleCount - 1) * 32 + (buttonSize + buttonMargin * 2);

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: totalWidth,
            margin: '0 auto',
            position: 'relative',
            minHeight: imageHeight + 60
        }}>
            <ArrowButton direction="left" onClick={handlePrev} size={buttonSize} margin={buttonMargin} />
            <div style={{ width: visibleAreaWidth, overflow: 'hidden' }}>
                <div
                    style={{
                        display: 'flex',
                        gap: 16,
                        width: rowWidth,
                        transform: `translateX(${translateX}px)`,
                        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
                        alignItems: 'center',
                    }}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                width: imageWidth,
                                maxWidth: imageWidth,
                                textAlign: 'center',
                                position: 'relative',
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    width: imageWidth,
                                    height: imageHeight,
                                    objectFit: 'cover',
                                    borderRadius: 8,
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                            {image.title && <p style={{ marginTop: 8, fontWeight: 'bold' }}>{image.title}</p>}
                        </div>
                    ))}
                </div>
            </div>
            <ArrowButton direction="right" onClick={handleNext} size={buttonSize} margin={buttonMargin} />
            {/* Dots below carousel */}
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: -24, display: 'flex', justifyContent: 'center' }}>
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        style={{
                            display: 'inline-block',
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: idx === currentIndex ? '#333' : '#bbb',
                            margin: '0 4px',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;