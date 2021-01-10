import { useEffect } from 'react';

export const useMaxWords = (
    maxWords: number,
    isOpen: boolean,
    children: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
) => {
    useEffect(() => {
        if (maxWords) {
            if (isOpen) {
                setText(children);
            } else {
                const wordsArray = children.split(' ').filter((c) => c !== '');
                setText(wordsArray.slice(0, maxWords).join(' '));
            }
        }
    }, [maxWords, isOpen, children]);
};
