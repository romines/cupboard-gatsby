import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <h1>Whoops!</h1>
    <p>That page was not found. Return <Link to="/">home</Link>?</p>
  </Layout>
)

export default NotFoundPage
