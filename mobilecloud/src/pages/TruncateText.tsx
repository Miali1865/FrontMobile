import React from 'react';

interface TruncateTextProps {
    text: string;
    limit: number;
}

const TruncateText: React.FC<TruncateTextProps> = ({ text, limit }: TruncateTextProps) => {
    if (text.length <= limit) {
        return <span>{text}</span>;
    } else {
        const truncatedText = text.substring(0, limit - 3) + '...';
        return <span>{truncatedText}</span>;
    }
}

export default TruncateText;
