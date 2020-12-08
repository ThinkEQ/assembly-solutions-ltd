import React from 'react'

import Layout from '../../components/Layout'
import NewsRoll from '../../components/NewsRoll'

export default class NewsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <h1>
            Latest Stories
          </h1>
        <section>
            <NewsRoll />
        </section>
      </Layout>
    )
  }
}