import type { ComponentMeta, ComponentStory } from '@storybook/react'

import UserLayout from './UserLayout'

export const generated: ComponentStory<typeof UserLayout> = (args) => {
  return <UserLayout {...args} />
}

export default {
  title: 'Layouts/UserLayout',
  component: UserLayout,
} as ComponentMeta<typeof UserLayout>
