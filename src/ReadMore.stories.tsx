import React from 'react';
import { Meta } from '@storybook/react';
import ReadMore from './ReadMore';
import './storybook.scss';
import { Text } from './Text';

interface iStory<P = unknown> extends React.VFC<P> {
    args: { [key: string]: string | number };
    storyName: string;
    argTypes: {
        [key: string]: {
            control?: {
                type: string;
                options?: string[] | string | number;
            };
            table?: {
                disable: boolean;
            };
        };
    };
}

const templateDecorator = (Story) => (
    <div className="wrapper">
        <Story />
    </div>
);

const Template = (args) => <ReadMore {...args}>{Text}</ReadMore>;

const defaultArgs = {
    maxWords: {
        table: { disable: true },
    },
    maxCharacters: {
        table: { disable: true },
    },
    readMoreLabel: {
        table: { disable: true },
    },
    readLessLabel: {
        table: { disable: true },
    },
    maxLines: {
        table: { disable: true },
    },
    ellipsis: {
        table: { disable: true },
    },
    buttonClassName: {
        table: { disable: true },
    },
};

export const MaxCharacters: iStory = Template.bind({});
MaxCharacters.storyName = 'Max Characters';
MaxCharacters.argTypes = {
    ...defaultArgs,
    maxCharacters: {
        control: {
            type: 'number',
        },
    },
};
MaxCharacters.args = {
    maxCharacters: 50,
};

export const MaxWords: iStory = Template.bind({});
MaxWords.storyName = 'Max Words';
MaxWords.argTypes = {
    ...defaultArgs,
    maxWords: {
        control: {
            type: 'number',
        },
    },
};
MaxWords.args = {
    maxWords: 20,
};

export const MaxLines: iStory = Template.bind({});
MaxLines.storyName = 'Max Lines';
MaxLines.argTypes = {
    ...defaultArgs,
    maxLines: {
        control: {
            type: 'number',
        },
    },
};
MaxLines.args = {
    maxLines: 3,
};

export const ChooseClassName: iStory = Template.bind({});
ChooseClassName.storyName = 'Overwrite button style';
ChooseClassName.argTypes = {
    ...defaultArgs,
    buttonClassName: {
        control: {
            type: 'select',
            options: ['button-class-button', 'button-class-withicon'],
        },
    },
};
ChooseClassName.args = {
    maxLines: 3,
};

export const ChooseLabels: iStory = Template.bind({});
ChooseLabels.storyName = 'Overwrite default labels';
ChooseLabels.argTypes = {
    ...defaultArgs,
    readMoreLabel: {
        control: { type: 'text' },
    },
    readLessLabel: {
        control: { type: 'text' },
    },
    ellipsis: {
        control: { type: 'text' },
    },
};
ChooseLabels.args = { maxLines: 3 };

export default {
    title: 'ReadMore',
    component: ReadMore,
    decorators: [templateDecorator],
} as Meta;
