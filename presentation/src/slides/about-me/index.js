import React from "react"
import { Heading, Slide, Image, Layout, Fill } from "spectacle"
import styled from "react-emotion"
import toClass from "recompose/toClass"
import imgMe from "./me.jpg"
import { Text } from "../../components"

const Name = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

const AboutMe = () => (
  <Slide>
    <Layout>
      <Fill>
        <Image src={imgMe} width="400px" />
      </Fill>
      <Fill align="center center">
        <Name>
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            fit
            lineHeight="0.8"
          >
            Daniel
          </Heading>
          <Heading
            size={3}
            textColor="tertiary"
            textFont="secondary"
            fit
            lineHeight="0.8"
          >
            Ström
          </Heading>
          <Text margin="0.25rem auto 0.25rem 0">Tech Lead, Web</Text>
          <Text margin="0.25rem auto 0.25rem 0">iZettle</Text>
        </Name>
      </Fill>
    </Layout>
  </Slide>
)

export default toClass(AboutMe)
