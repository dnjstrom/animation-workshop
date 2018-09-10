import React from "react"
import { Deck } from "spectacle"
import createTheme from "spectacle/lib/themes/default"
import "normalize.css"

import { colors, fonts } from "./globals"
import Title from "./slides/title"
import Generic from "./slides/generic"
import "./fonts/index.css"

const theme = createTheme(colors, fonts)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Title />
        <Generic />
      </Deck>
    )
  }
}
