import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

import './ReadMore.scss';
import { useMaxCharacters } from './hooks/useMaxCharacters';
import { useMaxWords } from './hooks/useMaxWords';
import { useMaxLines } from './hooks/useMaxLines';

interface iBase {
    children: string;
    readMoreLabel: string;
    readLessLabel: string;
    maxCharacters?: number;
    maxWords?: number;
    maxLines?: number;
    ellipsis?: string;
}

interface iMaxChars extends iBase {
    maxCharacters: number;
}

interface iMaxWords extends iBase {
    maxWords: number;
}

interface iMaxLines extends iBase {
    maxLines: number;
}

type iProps = iMaxChars | iMaxWords | iMaxLines;

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
    useMaxCharacters(maxCharacters, isOpen, children, setText);
    useMaxWords(maxWords, isOpen, children, setText);
    const { readMoreRef, buttonRef } = useMaxLines(maxLines, isOpen, children, setText);

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
