import React, { PropsWithChildren, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useMaxCharacters } from './hooks/useMaxCharacters';
import { useMaxWords } from './hooks/useMaxWords';
import { useMaxLines } from './hooks/useMaxLines';
import { iProps } from './types';
import './ReadMore.scss';
import { isAllText } from './utils';

const ReadMore: React.FC<PropsWithChildren<iProps>> = ({
    children,
    readMoreLabel = 'read more',
    readLessLabel = 'read less',
    maxCharacters,
    maxWords,
    maxLines,
    ellipsis = '...',
    buttonClassName,
}) => {
    const [showButton, setShowButton] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState<string>('');
    const { readMoreRef, buttonRef } = useMaxLines(maxLines, isOpen, children, setText);
    useMaxCharacters(maxCharacters, isOpen, children, setText);
    useMaxWords(maxWords, isOpen, children, setText);

    useEffect(() => {
        if (isOpen || isAllText(text, children)) {
            setShowButton(true);
            return;
        }
        setShowButton(false);
    }, [isOpen, text, maxLines, maxWords, maxCharacters]);

    const handleClick = () => {
        setIsOpen((v) => !v);
    };

    const getLabel = isOpen ? readLessLabel : readMoreLabel;
    return (
        <div ref={readMoreRef} data-testid="wrapper">
            {text}
            {showButton && (
                <span ref={buttonRef} data-testid="button-wrapper">
                    {ellipsis}
                    <button
                        data-testid="button"
                        className={classNames('button', buttonClassName)}
                        type="button"
                        onClick={handleClick}
                    >
                        {getLabel}
                    </button>
                </span>
            )}
        </div>
    );
};

export default ReadMore;
