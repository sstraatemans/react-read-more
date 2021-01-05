// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReadMore from '.';
import { Text } from './Text';

describe('ReadMore Component', () => {
    it('should show the correct text when maxLines', () => {
        render(<ReadMore maxLines={2}>{Text}</ReadMore>);

        expect(screen.getByTestId('wrapper')).toHaveTextContent(
            'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum...read more',
        );

        fireEvent.click(screen.getByTestId('button'));

        expect(screen.getByTestId('wrapper')).toHaveTextContent(
            'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies....read less',
        );
    });

    it('should show the correct text when maxCharacters', () => {
        render(<ReadMore maxCharacters={50}>{Text}</ReadMore>);

        expect(screen.getByTestId('wrapper')).toHaveTextContent(
            'Lorem ipsum dolor sit amet, consectetur adippscing...read more',
        );

        fireEvent.click(screen.getByTestId('button'));

        expect(screen.getByTestId('wrapper')).toHaveTextContent(
            'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies....read less',
        );
    });

    it('should show the correct text when maxWords', () => {
        render(<ReadMore maxWords={8}>{Text}</ReadMore>);

        expect(screen.getByTestId('wrapper')).toHaveTextContent(
            'Lorem ipsum dolor sit amet, consectetur adippscing elit....read more',
        );

        fireEvent.click(screen.getByTestId('button'));

        expect(screen.getByTestId('wrapper')).toHaveTextContent(
            'Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies. Lorem ipsum dolor sit amet, consectetur adippscing elit. Duis eu neque lacus. Mauris scelerisque sed arcu vel pharetra. Aenean nec nulla sed nulla viverra cursus at et lacus. Etiam accumsan turpis ac consequat sodales. In sollicitudin egestas arcu, et vulputate nunc semper in. Praesent interdum odio ac tempor feugiat. Integer id sapien a enim iaculis fringilla sed ac lacus. Vivamus odio enim, faucibus vitae nibh malesuada, semper dapibus massa. Fusce ligula lorem, dictum sit amet elit sit amet, tempor feugiat nulla. Vestibulum non luctus dolor. Vestibulum consectetur ipsum nec sem eleifend ultricies....read less',
        );
    });

    it('should have the correct more label', () => {
        render(
            <ReadMore maxCharacters={8} readMoreLabel="Lees meer">
                {Text}
            </ReadMore>,
        );
        expect(screen.getByTestId('button')).toHaveTextContent('Lees meer');
    });

    it('should have the correct less label', () => {
        render(
            <ReadMore maxCharacters={8} readLessLabel="Lees minder">
                {Text}
            </ReadMore>,
        );

        fireEvent.click(screen.getByTestId('button'));
        expect(screen.getByTestId('button')).toHaveTextContent('Lees minder');
    });

    it('should have given ellipsis', () => {
        render(
            <ReadMore maxCharacters={8} ellipsis="****">
                {Text}
            </ReadMore>,
        );

        expect(screen.getByTestId('button-wrapper')).toHaveTextContent('****read more');
    });

    it('should have default ellipsis', () => {
        render(<ReadMore maxCharacters={8}>{Text}</ReadMore>);

        expect(screen.getByTestId('button-wrapper')).toHaveTextContent('...read more');
    });

    it('should add className for the buttons', () => {
        render(
            <ReadMore maxCharacters={8} buttonClassName="testClass">
                {Text}
            </ReadMore>,
        );

        expect(screen.getByTestId('button').className).toEqual('button testClass');
    });
});
