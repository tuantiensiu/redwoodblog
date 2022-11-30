// import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

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
    <>
      <ul>
        {article.map((item) => {
          return (
            <li key={item.id}>
              <Link to={routes.article({ id: item.id })}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
