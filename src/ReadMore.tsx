import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
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
    // remove all kinds of extra spaces in the string
    const cleanedChildren = useMemo(() => {
        return children.replace(/\s+/g, ' ').trim();
    }, [children]);
    const [isOpen, setIsOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [text, setText] = useState<string>('');
    const { readMoreRef, buttonRef } = useMaxLines(maxLines, isOpen, cleanedChildren, setText);
    useMaxCharacters(maxCharacters, isOpen, cleanedChildren, setText);
    useMaxWords(maxWords, isOpen, cleanedChildren, setText);

    useEffect(() => {
        if (!isOpen && isAllText(text, cleanedChildren)) {
            setShowButton(false);
        } else {
            setShowButton(true);
        }
    }, [text]);

    const handleClick = () => {
        setIsOpen((v) => !v);
    };

    const getLabel = isOpen ? readLessLabel : readMoreLabel;
    return (
        <div ref={readMoreRef} data-testid="wrapper">
            {text}

            <span
                className="button-wrapper"
                data-visible={showButton}
                ref={buttonRef}
                data-testid="button-wrapper"
            >
                {!isOpen && ellipsis}
                <button
                    data-testid="button"
                    className={classNames('button', buttonClassName)}
                    type="button"
                    onClick={handleClick}
                >
                    {getLabel}
                </button>
            </span>
        </div>
    );
};

export default ReadMore;
