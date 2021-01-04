import React, { useEffect, useRef } from 'react';
import { debounce } from 'lodash';

export const useMaxLines = (
    maxLines: number,
    isOpen: boolean,
    children: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
) => {
    const readMoreRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    const getButtonWidth = () => buttonRef.current.offsetWidth ?? 0;

    const getClientWidth = () => readMoreRef.current.clientWidth ?? 0;

    const createMaxLines = () => {
        const ruler = document.createElement('div');
        ruler.style.width = 'auto';
        ruler.style.position = 'absolute';
        ruler.style.whiteSpace = 'nowrap';
        readMoreRef.current?.appendChild(ruler);

        let line = '';

        const wordArray: string[] = children.trim().split(' ');

        // you have to check by line, because when a word is to long for that line, all characters will jump to next line
        // if checking the last line, we need to take into account the width of the button
        for (let j = 0; j < maxLines; j += 1) {
            for (let i = 0; i < wordArray.length; i += 1) {
                const word = wordArray.shift();

                if (word) {
                    const previousLine = ruler.innerHTML;
                    if (i === 0 && j === 0) {
                        ruler.innerHTML += word;
                    } else {
                        ruler.innerHTML += ` ${word}`;
                    }

                    // if the line is too long, use the previousline and break
                    // and add the last line back to the wordArray;
                    if (
                        (j < maxLines - 1 && ruler.offsetWidth > getClientWidth()) ||
                        (j === maxLines - 1 &&
                            ruler.offsetWidth > getClientWidth() - getButtonWidth())
                    ) {
                        ruler.innerHTML = previousLine;
                        wordArray.unshift(word);
                        break;
                    }
                }
            }

            line += ruler.innerHTML;
            ruler.innerHTML = '';
        }
        setText(line);
        ruler.parentNode?.removeChild(ruler);
    };

    useEffect(() => {
        if (maxLines) {
            window.addEventListener('resize', debounce(createMaxLines, 300));
            if (isOpen) {
                setText(children);
            } else {
                createMaxLines();
            }
        }
        return () => {
            if (maxLines) window.removeEventListener('resize', debounce(createMaxLines, 300));
        };
    }, [maxLines, isOpen]);

    return {
        readMoreRef,
        buttonRef,
    };
};
