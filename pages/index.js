import React, {Component} from 'react'
import {keyframes} from 'emotion'
import styled from 'react-emotion'
import axios from 'axios'
import Typist from 'react-typist'

import App from '../components/App'
import Card from '../components/Card'

// prettier-ignore
import {Page, Tagline, Bold, Character, Title, subjects} from '../components/Landing'

const Logo = styled.h1`
  font-family: Helvetica Neue;
  font-size: 4.6em;
  font-weight: 300;
  color: #555;
`

const Fold = ({index}) => (
  <Page>
    <Logo>WHY LEARN</Logo>
    <Tagline>
      Why do we learn
      <Title index={index} />
    </Tagline>
    <div />
  </Page>
)

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
    <div>
      <Fold index={this.state.chara} />
      <div>
        <Card
          title="Developer"
          url="https://www.w3schools.com/w3images/lights.jpg"
        />
      </div>
    </div>
  )
}

export default App(Landing)
