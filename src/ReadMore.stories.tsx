import React from 'react';
import { Meta } from '@storybook/react';
import ReadMore from './ReadMore';
import './storybook.scss';

interface iStory<P = unknown> extends React.VFC<P> {
    args: { [key: string]: string | number };
    storyName: string;
}

export const Text = `
        Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
        scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
        Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
        semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
        fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
        massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
        non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor
        sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel
        pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac
        consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent
        interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus.
        Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem,
        dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum
        consectetur ipsum nec sem eleifend ultricies.`;

const templateDecorator = (Story) => (
    <div className="wrapper">
        <Story />
    </div>
);

const Template = (args) => <ReadMore {...args}>{Text}</ReadMore>;

export const MaxCharacters: iStory = Template.bind({});
MaxCharacters.storyName = 'Max Characters';
MaxCharacters.args = {
    readMoreLabel: 'read more',
    maxCharacters: 50,
    maxLines: null,
    maxWords: null,
    readLessLabel: 'read less',
};

export const MaxWords: iStory = Template.bind({});
MaxWords.storyName = 'Max Words';
MaxWords.args = {
    readMoreLabel: 'read more',
    maxWords: 20,
    maxLines: null,
    maxCharacters: null,
    readLessLabel: 'read less',
};

export const MaxLines: iStory = Template.bind({});
MaxLines.storyName = 'Max Lines';
MaxLines.args = {
    readMoreLabel: 'read more',
    maxWords: null,
    maxLines: 2,
    maxCharacters: null,
    readLessLabel: 'read less',
};

export default {
    title: 'ReadMore',
    component: ReadMore,
    decorators: [templateDecorator],
} as Meta;
