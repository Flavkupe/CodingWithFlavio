import React from 'react';

export type PageSectionImage = {
    src: string;
    alt: string;
    style?: React.CSSProperties;
};

export type PageSectionProps = {
    title?: string;
    backgroundColor?: 'white' | 'lightgray';
    layout?: 'ImageOnLeft' | 'ImageOnRight';
    imageLayout?: 'Horizontal' | 'Vertical';
    text?: React.ReactNode;
    images?: PageSectionImage[];
    style?: React.CSSProperties;
};

const bgColors: Record<string, string> = {
    white: '#fff',
    lightgray: '#f7f7f9',
};

const PageSection: React.FC<PageSectionProps> = ({
    title,
    backgroundColor = 'white',
    layout = 'ImageOnRight',
    imageLayout = 'Vertical',
    text,
    images = [],
    style = {},
}) => {
    const hasImages = images && images.length > 0;
    const hasText = !!text;
    const sectionStyle: React.CSSProperties = {
        background: bgColors[backgroundColor] || bgColors.white,
        padding: '2.5rem 0',
        ...style,
    };

    // Only images or only text: center them
    if (hasImages && !hasText) {
        return (
            <section style={sectionStyle}>
                {title && <h1 style={{ textAlign: 'center', marginBottom: 24 }}>{title}</h1>}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: imageLayout === 'Horizontal' ? 'row' : 'column', gap: 24, minHeight: 180 }}>
                    {images.map((img, i) => (
                        <img key={i} src={img.src} alt={img.alt} style={{ maxWidth: 340, width: '100%', height: 'auto', borderRadius: 8, ...img.style }} />
                    ))}
                </div>
            </section>
        );
    }
    if (!hasImages && hasText) {
        return (
            <section style={sectionStyle}>
                {title && <h1 style={{ textAlign: 'center', marginBottom: 24 }}>{title}</h1>}
                <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5em', alignItems: 'center', minHeight: 180 }}>
                    {text}
                </div>
            </section>
        );
    }
    // Both images and text
    const content = (
        <div
            style={{
                display: 'flex',
                flexDirection: layout === 'ImageOnLeft' ? 'row' : 'row-reverse',
                alignItems: 'center',
                gap: 32,
                maxWidth: 1100,
                margin: '0 auto',
                flexWrap: 'wrap',
            }}
        >
            {hasImages && (
                <div style={{ display: 'flex', flexDirection: imageLayout === 'Horizontal' ? 'row' : 'column', gap: 16, flex: '0 0 auto', alignItems: 'center', justifyContent: 'center' }}>
                    {images.map((img, i) => (
                        <img key={i} src={img.src} alt={img.alt} style={{ maxWidth: 340, width: '100%', height: 'auto', borderRadius: 8, ...img.style }} />
                    ))}
                </div>
            )}
            <div style={{ flex: 1, minWidth: 260 }}>{text}</div>
        </div>
    );

    return (
        <section style={sectionStyle}>
            {title && <h1 style={{ textAlign: 'center', marginBottom: 24 }}>{title}</h1>}
            {content}
        </section>
    );
};

export default PageSection;
