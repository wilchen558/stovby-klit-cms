import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Hero from '../components/Hero'

export default class IndexPage extends React.Component {
    render() {
        const {data} = this.props
        const {edges: posts} = data.allMarkdownRemark

        return (
            <React.Fragment>
                <Hero title={'Title'} subtitle={'subtitle'} />
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1 className="has-text-weight-bold is-size-2">Seneste Nyheder</h1>
                        </div>
                        {posts
                            .map(({node: post}) => (
                                <div
                                    className="content"
                                    style={{border: '1px solid #eaecee', padding: '2em 4em'}}
                                    key={post.id}
                                >
                                    <p>
                                        <Link className="has-text-primary is-size-4" to={post.fields.slug}>
                                            {post.frontmatter.title}
                                        </Link>
                                        <span> &bull; </span>
                                        <small>{post.frontmatter.date}</small>
                                    </p>
                                    <p>
                                        {post.excerpt}
                                        <br/>
                                        <br/>
                                        <Link className="button is-small" to={post.fields.slug}>
                                            Læs Mere →
                                        </Link>
                                    </p>
                                </div>
                            ))}
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
