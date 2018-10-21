import React from "react"
import { Deck, MarkdownSlides } from "spectacle"
import createTheme from "spectacle/lib/themes/default"
import "normalize.css"

import { colors, fonts } from "./globals"
import Title from "./slides/title"
import AboutMe from "./slides/about-me"
import "./fonts/index.css"
import Agenda from "./slides/agenda"

const theme = createTheme(colors, fonts)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme} transition={["slide"]}>
        <Title />
        <AboutMe />
        <Agenda />
      </Deck>
    )
  }
}
