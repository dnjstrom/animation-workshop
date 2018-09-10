import { createElement } from "react"
import * as spectacle from "spectacle"
import { colors } from "./globals"

export const Text = props =>
  createElement(spectacle.Text, { textColor: colors.secondary, ...props })
