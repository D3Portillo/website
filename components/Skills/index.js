import Title from "@/components/Title"
import { useState } from "react"
import SkillBar from "./SkillBar"
import Slider from "./Slider"

export default function Skills() {
  const [knowledgeBase, setKnowledgeBase] = useState(99)
  return (
    <>
      <Title>SOME SKILLS</Title>
      <SkillBar base={knowledgeBase} name="Web Development" />
      <SkillBar base={knowledgeBase} name="Data Visualization" />
      <SkillBar base={knowledgeBase} name="UI&Web Witchcraft" />
      <p className="text-lg text-right mt-12">
        <i>Disclaimer:</i> I randomly added up to 5 percent in my base{" "}
        <strong>{knowledgeBase}</strong> Knowledge.
      </p>

      <Slider min={85} defaultValue={99} max={99} onChange={setKnowledgeBase} />
    </>
  )
}
