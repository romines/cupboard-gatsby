import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const menuItems = this.props.data.allWordpressWpApiMenusMenusItems.edges[0].node.items
    const pages = this.props.data.allWordpressPage.edges

    return (
      <Layout
        activePage={'aasdflk'}
        menuItems={menuItems}>

      { pages.map(({ node }) => <div key={node.id}>{ node.title }</div>)}

      </Layout>
    )
  }
}

export const query = graphql`
query wordPressMenuAndWordPressData {
  allWordpressPage {
    edges {
      node {
        id
        title
        content
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
  allWordpressWpApiMenusMenusItems {
    edges {
      node {
        name
        count
        items {
          wordpress_id
          order
          title
          object_slug
        }
      }
    }
  }
}
`

IndexPage.propTypes = {
  data: PropTypes.any.isRequired
}

export default IndexPage
