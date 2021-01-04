import React, { useEffect } from 'react';

export const useMaxCharacters = (
    maxCharacters: number,
    isOpen: boolean,
    children: string,
    setText: React.Dispatch<React.SetStateAction<string>>,
) => {
    useEffect(() => {
        if (maxCharacters) {
            if (isOpen) {
                setText(children);
            } else {
                setText(children.substring(0, maxCharacters));
            }
        }
    }, [maxCharacters, isOpen]);
};
