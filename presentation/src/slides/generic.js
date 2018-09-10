import React from "react"
import { Heading, Slide } from "spectacle"
import toClass from "recompose/toClass"
import { Text } from "../components"

const Generic = () => (
  <Slide>
    <Heading size={6} textColor="tertiary" textFont="secondary">
      Lorem ipsum
    </Heading>
    <Text>Dolor sit amet.</Text>
  </Slide>
)

export default toClass(Generic)
