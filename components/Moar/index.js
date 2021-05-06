import Title from "@/components/Title"
import ExternalLink from "@/components/ExternalLink"
import PreviewPDF from "@/components/PreviewPDF"

export default function Moar({ cvURL = "" }) {
  return (
    <>
      <Title>MOAR</Title>
      <div className="flex mt-16 lg:mt-0 mb-6 space-y-12 lg:space-y-0 lg:space-x-6 justify-evenly flex-wrap">
        <ExternalLink
          title="View my presentation card : )"
          href="/cards"
          className="shadow rounded hover:shadow-lg cursor-pointer"
        >
          <img
            alt="A presentation card icon"
            width={280}
            height={260}
            src="/svg/card.svg"
          />
        </ExternalLink>
        <ExternalLink
          title="Take a look of some of my talk slides"
          href="/goodies"
          className="shadow rounded hover:shadow-lg cursor-pointer"
        >
          <img alt="A pinata" width={280} height={260} src="/svg/goodies.svg" />
        </ExternalLink>
        <PreviewPDF url={cvURL}>
          <ExternalLink
            title="Wanna see my CV?"
            className="shadow rounded hover:shadow-lg cursor-pointer"
          >
            <img
              alt="A CV Icon"
              width={280}
              height={260}
              src="/svg/vitae.svg"
            />
          </ExternalLink>
        </PreviewPDF>
      </div>
    </>
  )
}
