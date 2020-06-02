import { addDecorator } from '@storybook/react';
import { GlobalStyleDecorator } from './decorators';
import StoryRouter from 'storybook-react-router';

addDecorator(GlobalStyleDecorator);
addDecorator(StoryRouter());
