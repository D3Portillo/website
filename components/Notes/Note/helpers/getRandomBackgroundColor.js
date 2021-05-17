import chroma from "chroma-js"
const colors = ["#fdf1f4", "white", "#f6fefe", "white", "#fffbe0"]
const scale = chroma.scale(colors).colors(72)
const scaleSize = scale.length

export default function getRandomBackgroundColor() {
  const { floor, random } = Math
  return scale[floor(random() * scaleSize)]
}
