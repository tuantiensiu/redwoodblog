// import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

// import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticleQuery {
    article: posts {
      id
      title
      body
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => {
  ;<div style={{ color: 'red' }}>Error: {error?.message}</div>
}
export const Success = ({ article }) => {
  return (
    <ul>
      {article.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
