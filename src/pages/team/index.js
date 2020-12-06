import React from 'react'

import Layout from '../../components/Layout'
import TeamRoll from '../../components/TeamRoll'

export default class TeamIndexPage extends React.Component {
  render() {
    return (
      <Layout>
          <h1>
            Team
          </h1>
        <section>
            <TeamRoll />
        </section>
      </Layout>
    )
  }
}