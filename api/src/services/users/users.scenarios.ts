import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { name: 'String', region: 9778079 } },
    two: { data: { name: 'String', region: 5204665 } },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
