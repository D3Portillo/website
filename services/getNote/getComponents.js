import Link from "@/components/Link"
import PageSeparator from "@/components/PageSeparator"
import Title from "@/components/Title"
import Text from "@/components/Text"
import SubTitle from "@/components/SubTitle"
import Blockquote from "@/components/Blockquote"

import Image from "./components/Image"
import Iframe from "./components/Iframe"
import Ul from "./components/Ul"
import Ol from "./components/Ol"

export default function getComponents() {
  /**
   * List of html components to be replaced when content
   * gets parsed from MDX to JSX
   */
  return {
    h1: Title,
    h2: SubTitle,
    h3: SubTitle,
    p: Text,
    ul: Ul,
    ol: Ol,
    img: Image,
    blockquote: Blockquote,
    a: Link.Minimal,
    br: PageSeparator,
    hr: () => null,
    iframe: Iframe,
  }
}
