import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { UiButton } from './ui-button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: UiButton,
} as ComponentMeta<typeof UiButton>;

// This is the only named export in the file, and it matches the component name
export const Button: ComponentStory<typeof UiButton> = () => <UiButton>Button</UiButton>