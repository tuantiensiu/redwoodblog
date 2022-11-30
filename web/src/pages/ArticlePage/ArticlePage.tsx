import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import DetailBlogCell from 'src/components/DetailBlogCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />
      <DetailBlogCell id={id} />
    </>
  )
}

export default ArticlePage
