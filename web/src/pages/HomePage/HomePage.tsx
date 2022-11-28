import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ArticleCell from 'src/components/ArticleCell/ArticleCell'
import EmployeeCell from 'src/components/EmployeeCell/EmployeeCell'
const HomePage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <>
        <ArticleCell />
        <EmployeeCell />
      </>
    </>
  )
}

export default HomePage
