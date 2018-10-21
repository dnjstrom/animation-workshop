import React from "react"
import { Heading, Slide, List, ListItem, Appear, Layout, Fill } from "spectacle"
import toClass from "recompose/toClass"
import styled from "react-emotion"
import { Text } from "../components"

const Wrapper = styled("div")`
  margin: 0.5rem;
`

const Agenda = () => (
  <Slide>
    <Heading size={6} textColor="tertiary" textFont="secondary">
      How to make stuff
    </Heading>
    <Layout>
      <Fill>
        <Heading size={3} textColor="secondary" caps>
          move
        </Heading>
        <Text>CSS Animation</Text>
        <Text>Web Animation API</Text>
        <Text>Vanilla JS</Text>
      </Fill>
      <Fill>
        <Heading size={3} textColor="secondary" caps>
          snappy
        </Heading>
        <Text>Rendering pipeline</Text>
        <Text>Chrome DevTools</Text>
      </Fill>
    </Layout>
  </Slide>
)

export default toClass(Agenda)
