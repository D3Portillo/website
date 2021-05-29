import styled from "styled-components"

const ArrowHandler = styled.div`
  transition: margin 120ms ease-in-out;
  box-shadow: black 4px 4px;
  &:focus {
    box-shadow: transparent 0 0 !important;
    margin-top: 3px;
    margin-left: 3px;
  }
  &:hover {
    box-shadow: black 3px 3px;
  }
`
/**
 * @param { import("react").ReactElement } Icon
 * @param { string } classNameExtra
 */
export default function getArrowHandler(Icon, classNameExtra, style) {
  return function ({ hidden, onClick }) {
    return (
      <ArrowHandler
        tabIndex="-1"
        onTransitionEnd={({ currentTarget }) => currentTarget.blur()}
        hidden={hidden}
        style={style}
        onClick={onClick}
        className={`${classNameExtra} arrow absolute cursor-pointer z-10 bg-white w-16 h-16 rounded-full border-2 border-black flex items-center justify-center select-none`}
      >
        <Icon className="text-black text-3xl" />
      </ArrowHandler>
    )
  }
}
