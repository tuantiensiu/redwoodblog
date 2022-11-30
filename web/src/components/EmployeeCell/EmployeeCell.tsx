import { useState } from 'react'

import { Select } from '@mantine/core'

export const QUERY = gql`
  query EmployeeQuery {
    employee: users {
      name
      region
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  ;<div style={{ color: 'red' }}>Error: {error?.message}</div>
}
export const Success = ({ employee }) => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: '1', label: 'Region 1' },
          { value: '2', label: 'Region 2' },
        ]}
      />

      <ul>
        {employee.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
    </>
  )
}

export const beforeQuery = (props) => {
  console.log(`props:`, JSON.stringify(props, null, 2))
  return { variables: { region: 1 }, fetchPolicy: 'network-only' }
}

export const afterQuery = (data) => {
  // I need my Props here !!

  return data
}
