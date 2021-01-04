import React from 'react';
import { Meta } from '@storybook/react';
import ReadMore from './ReadMore';
import './storybook.scss';
import { Text } from './Text';

interface iStory<P = unknown> extends React.VFC<P> {
    args: { [key: string]: string | number };
    storyName: string;
}

const templateDecorator = (Story) => (
    <div className="wrapper">
        <Story />
    </div>
);

const Template = (args) => <ReadMore {...args}>{Text}</ReadMore>;

export const MaxCharacters: iStory = Template.bind({});
MaxCharacters.storyName = 'Max Characters';
MaxCharacters.args = { readMoreLabel: 'read more', maxCharacters: 50, readLessLabel: 'read less' };

export const MaxWords: iStory = Template.bind({});
MaxWords.storyName = 'Max Words';
MaxWords.args = { readMoreLabel: 'read more', maxWords: 20, readLessLabel: 'read less' };

export const MaxLines: iStory = Template.bind({});
MaxLines.storyName = 'Max Lines';
MaxLines.args = { readMoreLabel: 'read more', maxLines: 2, readLessLabel: 'read less' };

export default {
    title: 'ReadMore',
    component: ReadMore,
    decorators: [templateDecorator],
} as Meta;
