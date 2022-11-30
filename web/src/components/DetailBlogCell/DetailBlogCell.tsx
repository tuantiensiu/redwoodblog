import type {
  FindDetailBlogQuery,
  FindDetailBlogQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindDetailBlogQuery($id: Int!) {
    detailBlog: post(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindDetailBlogQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  detailBlog,
}: CellSuccessProps<FindDetailBlogQuery, FindDetailBlogQueryVariables>) => {
  return (
    <div>
      <h1>{detailBlog.title}</h1>
      <p>{detailBlog.body}</p>
    </div>
  )
}
