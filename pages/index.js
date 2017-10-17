import React, {Component} from 'react'
import {injectGlobal, keyframes} from 'emotion'
import styled from 'react-emotion'
import axios from 'axios'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

import App from '../components/App'
import Avgle from '../components/Avgle.js'

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  min-height: 100vh;
`

const blinking = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Tagline = styled.h1`
  display: flex;
  color: #555;
  font-family: Helvetica Neue;
  font-weight: 300;
  font-size: 3.9em;
  margin-top: 3em;

  > span > .Typist > .Cursor {
    display: inline-block;
  }

  > span > .Typist > .Cursor.Cursor--blinking {
    opacity: 1;
    animation: ${blinking} 1s linear infinite;
  }
`

const Bold = styled.strong`
  margin-left: 0.3em;
  font-weight: 400;
`

const Character = styled.img`
  position: absolute;
  bottom: 1.5em;

  width: 9.5em;
  height: 16.5em;
`

const subjects = [
  {
    name: 'Mathematics',
    image: 'swordsman'
  },
  {
    name: 'Computer',
    image: 'wizard'
  },
  {
    name: 'Science',
    image: 'swordsman'
  },
  {
    name: 'Programming',
    image: 'wizard'
  }
]

class Landing extends Component {
  state = {character: 0}

  componentDidMount() {
    setInterval(() => {
      const {character} = this.state

      if (character < subjects.length) {
        this.setState({character: character + 1})
      } else {
        this.setState({character: 0})
      }
    }, 4000)
  }

  render = () => (
    <Page>
      <Tagline>
        Why do we learn
        <TypistLoop interval={4000}>
          {subjects.map(subject => (
            <Typist key={subject.name}>
              <Bold>{subject.name}?</Bold>
            </Typist>
          ))}
        </TypistLoop>
      </Tagline>
      <div>{subjects[this.state.character].image}</div>
      <Character src={`/static/${subjects[this.state.character].image}.png`} />
    </Page>
  )
}

export default App(Landing)
