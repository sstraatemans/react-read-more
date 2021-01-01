import React, { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import './ReadMore.scss';

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
  const [text, setText] = useState<string>('');

  const getLineHeight = (str) => {};

  const getButtonWidth = () => buttonRef.current.offsetWidth ?? 0;

  const getClientWidth = () => readMoreRef.current.clientWidth ?? 0;

  const createMaxLines = () => {
    const ruler = document.createElement('div');
    ruler.style.width = 'auto';
    ruler.style.position = 'absolute';
    ruler.style.whiteSpace = 'nowrap';
    readMoreRef.current?.appendChild(ruler);

    let line = '';

    const wordArray: string[] = children.split(' ');

    // you have to check by line, because when a word is to long for that line, all characters will jump to next line
    // if checking the last line, we need to take into account the width of the button
    for (let j = 0; j < maxLines; j++) {
      for (let i = 0; i < wordArray.length; i += 1) {
        const word = wordArray.shift();

        if (word) {
          const previousLine = ruler.innerHTML;
          i === 0 && j === 0 ? (ruler.innerHTML += word) : (ruler.innerHTML += ` ${word}`);

          // if the line is too long, use the previousline and break
          // and add the last line back to the wordArray;
          if (
            (j < maxLines - 1 && ruler.offsetWidth > getClientWidth()) ||
            (j === maxLines - 1 && ruler.offsetWidth > getClientWidth() - getButtonWidth())
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
    if (isOpen) {
      setText(children);
    } else {
      if (maxCharacters) {
        setText(children.substring(0, maxCharacters));
      }
      if (maxWords) {
        const wordsArray = children.split(' ');
        setText(wordsArray.slice(0, maxWords).join(' '));
      }
      if (maxLines) {
        createMaxLines();
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (maxLines) window.addEventListener('resize', debounce(createMaxLines, 300));

    return () => {
      if (maxLines) window.removeEventListener('resize', debounce(createMaxLines, 300));
    };
  });

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
        <button className='button' type='button' onClick={handleClick}>
          {getLabel(isOpen)}
        </button>
      </span>
    </div>
  );
};

export default ReadMore;
