export const isAllText = (truncatedText, text) => {
    return (
        truncatedText &&
        truncatedText.split('').filter((c) => c !== ' ').length ===
            text.split('').filter((c) => c !== ' ').length
    );
};
