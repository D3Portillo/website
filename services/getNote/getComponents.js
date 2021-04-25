import PageSeparator from "@/components/PageSeparator"
import Title from "@/components/Title"
import Paragraph from "@/components/Paragraph"
import SubTitle from "@/components/SubTitle"
import Blockquote from "@/components/Blockquote"
import Link from "@/components/Link"
import NullComponent from "@/components/NullComponent"

import UnorderedList from "./components/UnorderedList"
import OrderedList from "./components/OrderedList"
import Image from "./components/Image"
import Iframe from "./components/Iframe"

export default function getComponents() {
  /**
   * List of html components to be replaced when content
   * gets parsed from MDX to JSX
   */
  return {
    h1: Title,
    h2: SubTitle,
    h3: SubTitle,
    p: Paragraph,
    ul: UnorderedList,
    ol: OrderedList,
    blockquote: Blockquote,
    a: Link.Readable,
    br: PageSeparator,
    hr: NullComponent,
    iframe: Iframe,
    img: Image,
  }
}
