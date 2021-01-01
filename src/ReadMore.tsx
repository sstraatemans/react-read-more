import React, { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';

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
    const readMoreRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState<string>(children);

    const getLineHeight = (str) => {};

    const createElement = () => {};

    useEffect(() => {
        if (isOpen) {
            setText(children);
        } else {
            if (maxCharacters) {
                setText(text.substring(0, maxCharacters));
            }
            if (maxWords) {
                const wordsArray = text.split(' ');
                setText(wordsArray.slice(0, maxWords).join(' '));
            }
            if (maxLines) {
            }
        }
    }, [isOpen]);

    const handleClick = () => {
        setIsOpen((v) => !v);
    };

    const getLabel = (open: boolean): string => {
        return isOpen ? readLessLabel : readMoreLabel;
    };

    return (
        <div ref={readMoreRef}>
            {text}

            <span ref={buttonRef}>
                {ellipsis}
                <button type="button" onClick={handleClick}>
                    {getLabel(isOpen)}
                </button>
            </span>
        </div>
    );
};

export default ReadMore;
