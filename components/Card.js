import React from 'react'
import styled from 'react-emotion'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
  width: 12em;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 1.5px 1px rgba(0, 0, 0, 0.12);
`

const Text = styled.h1`
  font-family: Helvetica Neue;
  font-size: 1.4em;
  font-weight: 300;
`

const Card = ({title, url}) => (
  <Wrapper>
    <Image src={url} />
    <Text>{title}</Text>
  </Wrapper>
)

export default Card
