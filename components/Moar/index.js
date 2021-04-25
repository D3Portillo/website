import Title from "@/components/Title"
import ExternalLink from "@/components/ExternalLink"

export default function Moar() {
  return (
    <>
      <Title>MOAR</Title>
      <div className="flex mt-16 lg:mt-0 mb-6 space-y-12 lg:space-y-0 lg:space-x-6 justify-evenly flex-wrap">
        <ExternalLink
          href="/cards"
          className="shadow rounded hover:shadow-lg cursor-pointer"
        >
          <img src="/svg/card.svg" />
        </ExternalLink>
        <ExternalLink
          href="/goodies"
          className="shadow rounded hover:shadow-lg cursor-pointer"
        >
          <img src="/svg/goodies.svg" />
        </ExternalLink>
        <ExternalLink className="shadow rounded hover:shadow-lg cursor-pointer">
          <img src="/svg/vitae.svg" />
        </ExternalLink>
      </div>
    </>
  )
}
