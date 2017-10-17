import React, {Component} from 'react'
import {keyframes} from 'emotion'
import styled from 'react-emotion'
import axios from 'axios'
import Typist from 'react-typist'

import App from '../components/App'

// prettier-ignore
import {Page, Tagline, Bold, Character, Title, subjects} from '../components/Landing'

class Landing extends Component {
  state = {
    chara: 0
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const {chara} = this.state

      this.setState({chara: chara < subjects.length - 1 ? chara + 1 : 0})
    }, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render = () => (
    <Page>
      <Tagline>
        Why do we learn
        <Title index={this.state.chara} />
      </Tagline>
      <Character index={this.state.chara} />
    </Page>
  )
}

export default App(Landing)
