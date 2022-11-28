// import type {
//   FindEmployeeQuery,
//   FindEmployeeQueryVariables,
// } from 'types/graphql'

// import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  # query FindEmployeeQuery($id: Int!) {
  #   employee: employee(id: $id) {
  #     id
  #   }
  # }
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
  return (
    <ul>
      {employee.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
