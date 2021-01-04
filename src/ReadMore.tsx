import React, { PropsWithChildren, useState } from 'react';
import { useMaxCharacters } from './hooks/useMaxCharacters';
import { useMaxWords } from './hooks/useMaxWords';
import { useMaxLines } from './hooks/useMaxLines';
import { iProps } from './types';
import './ReadMore.scss';

const ReadMore: React.FC<PropsWithChildren<iProps>> = ({
    children,
    readMoreLabel,
    readLessLabel,
    maxCharacters,
    maxWords,
    maxLines,
    ellipsis = '...',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState<string>('');
    const { readMoreRef, buttonRef } = useMaxLines(maxLines, isOpen, children, setText);
    useMaxCharacters(maxCharacters, isOpen, children, setText);
    useMaxWords(maxWords, isOpen, children, setText);

    const handleClick = () => {
        setIsOpen((v) => !v);
    };

    const getLabel = isOpen ? readLessLabel : readMoreLabel;

    return (
        <div ref={readMoreRef}>
            {text}
            <span ref={buttonRef}>
                {ellipsis}
                <button className="button" type="button" onClick={handleClick}>
                    {getLabel}
                </button>
            </span>
        </div>
    );
};

export default ReadMore;
