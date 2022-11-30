import { Select } from '@mantine/core'
import type { FindUsers } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Users from 'src/components/User/Users'

export const QUERY = gql`
  query FindUsers {
    users {
      id
      name
      region
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.newUser()} className="rw-link">
        {'Create one?'}
      </Link>
      {/* <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      /> */}
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ users }: CellSuccessProps<FindUsers>) => {
  return <Users users={users} />
}
