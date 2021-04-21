import styled from "styled-components"

const ArrowHandler = styled.div`
  transition: transform 2ms ease-in-out;
  box-shadow: white 4px 4px;
  &:active {
    box-shadow: white 0 0 !important;
    transform: translate(3px, 3px);
  }
  &:hover {
    box-shadow: white 3px 3px;
  }
`
/**
 * @param { import("react").ReactElement } Icon
 * @param { string } classNameExtra
 */
export default function getArrowHandler(Icon, classNameExtra) {
  return function ({ hidden, onClick }) {
    return (
      <ArrowHandler
        hidden={hidden}
        onClick={onClick}
        className={`${classNameExtra} arrow absolute cursor-pointer z-10 bg-black w-16 h-16 rounded-full border-2 border-white flex items-center justify-center`}
      >
        <Icon className="text-white text-2xl" />
      </ArrowHandler>
    )
  }
}