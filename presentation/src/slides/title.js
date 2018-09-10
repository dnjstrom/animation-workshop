import React from "react"
import { Heading, Slide } from "spectacle"
import toClass from "recompose/toClass"
import { Text } from "../components"

const Title = () => (
  <Slide>
    <Heading
      size={1}
      fit
      caps
      lineHeight={1}
      textColor="secondary"
      textFont="tertiary"
    >
      Animating the Web
    </Heading>
    <Text textFont="secondary" margin="10px 0 0" textColor="tertiary" size={1}>
      while keeping it snappy
    </Text>
  </Slide>
)

export default toClass(Title)
