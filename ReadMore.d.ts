import React, { PropsWithChildren } from 'react';
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
declare type iProps = iMaxChars | iMaxWords | iMaxLines;
declare const ReadMore: React.FC<PropsWithChildren<iProps>>;
export default ReadMore;
