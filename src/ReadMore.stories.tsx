import React from 'react';
import ReadMore from './ReadMore';
import { storiesOf, action } from '@storybook/react';
import { Wrapper } from './storybook';

const Text = `
        Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris
        scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus.
        Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc
        semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis
        fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus
        massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum
        non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies.Lorem ipsum dolor
        sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel
        pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac
        consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent
        interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus.
        Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem,
        dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum
        consectetur ipsum nec sem eleifend ultricies.`;

storiesOf('Read more', module)
  .addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>)
  .add('max characters', () => (
    <ReadMore maxCharacters={50} readMoreLabel='read more' readLessLabel='read less'>
      {Text}
    </ReadMore>
  ))
  .add('max words', () => (
    <ReadMore maxWords={20} readMoreLabel='read more' readLessLabel='read less'>
      {Text}
    </ReadMore>
  ))
  .add('max lines', () => (
    <ReadMore maxLines={2} readMoreLabel='read more' readLessLabel='read less'>
      {Text}
    </ReadMore>
  ));
