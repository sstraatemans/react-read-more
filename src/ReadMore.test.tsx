import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import ReadMore from './ReadMore';
import { Text } from './ReadMore.stories';

describe('ReadMore Component', () => {
    it('should', () => {
        render(<ReadMore maxLines={2}>{Text}</ReadMore>);
    });
});
