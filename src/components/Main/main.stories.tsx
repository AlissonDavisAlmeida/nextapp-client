// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Main } from '.';

export default {
  /* 👇 The title prop is optional.
          * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
          * to learn how to generate automatic titles
          */
  title: 'Main',
  //   decorators: [
  //     (Story) => (
  //       <>
  //         <GlobalStyles />
  //         <Story />
  //       </>
  //     ),
  //   ],
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'Title Default',
};
