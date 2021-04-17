import Title from "@/components/shared/Title"
import ExternalLink from "@/components/shared/ExternalLink"

export default function Moar() {
  return (
    <>
      <Title>MOAR</Title>
      <div className="flex mb-6 space-x-6 justify-evenly flex-wrap">
        <ExternalLink
          href="/cards"
          className="shadow rounded hover:shadow-lg cursor-pointer"
        >
          <img src="/svg/card.svg" alt="" />
        </ExternalLink>
        <ExternalLink
          href="/goodies"
          className="shadow rounded hover:shadow-lg cursor-pointer"
        >
          <img src="/svg/goodies.svg" alt="" />
        </ExternalLink>
        <ExternalLink className="shadow rounded hover:shadow-lg cursor-pointer">
          <img src="/svg/vitae.svg" alt="" />
        </ExternalLink>
      </div>
    </>
  )
}
