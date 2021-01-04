module.exports = {
    preset: 'ts-jest',
    collectCoverageFrom: ['!src/ReadMore.stories.tsx', 'src/**/*.{ts,tsx}'],
    moduleNameMapper: {
        // match the regex to the webpack.config file loader
        '\\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
        // match the regex to the webpack.config css loaders
        '\\.(scss|css)$': '<rootDir>/__mocks__/styleMock.js',
        // match to the tsconfig file alias
        '^~source(.*)$': '<rootDir>/source$1',
    },
};
