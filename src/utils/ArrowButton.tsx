import React from 'react';

type ArrowButtonProps = {
    direction: 'left' | 'right';
    onClick: () => void;
    size: number;
    margin: number;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick, size, margin }) => (
    <button
        onClick={onClick}
        aria-label={direction === 'left' ? 'Previous images' : 'Next images'}
        style={{
            background: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: size,
            height: size,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: direction === 'left' ? margin : 0,
            marginLeft: direction === 'right' ? margin : 0,
            padding: 0,
        }}
    >
        <span style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            fontSize: 28,
            lineHeight: 0,
            userSelect: 'none',
        }}>{direction === 'left' ? '<' : '>'}</span>
    </button>
);

export type { ArrowButtonProps };
export default ArrowButton;