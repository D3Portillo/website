import chroma from "chroma-js"
// [red, white, cyan, white, yellow]
const colors = ["#fdf5f7", "white", "#f7fefe", "white", "#fffdf1"]
const scale = chroma.scale(colors).colors(80)
const scaleSize = scale.length

export default function getRandomBackgroundColor() {
  const { floor, random } = Math
  return scale[floor(random() * scaleSize)]
}
