export const isAllText = (truncatedText, text) => {
    return (
        truncatedText &&
        truncatedText
            .trim()
            .split('')
            .filter((c) => c !== ' ').length ===
            text
                .trim()
                .split('')
                .filter((c) => c !== ' ').length
    );
};
