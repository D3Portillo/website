const translate = "transform translate-x-2 translate-y-2"
function random5() {
  const { random, round } = Math
  return round(random() * 5)
}

export default function SkillBar({ base = 99, name = "" }) {
  const myKnowledge = base + random5()
  const width = `${myKnowledge}%`
  return (
    <div style={{ height: "3.5rem" }} className="bg-cyan relative w-full my-8">
      <div
        style={{ width, borderWidth: 3 }}
        className={`border-black transition-all duration-150 ease-out flex items-center justify-between px-4 absolute inset-0 ${translate} font-bold text-xl`}
      >
        <div>{name}</div>
        <div>{myKnowledge}%</div>
      </div>
    </div>
  )
}
