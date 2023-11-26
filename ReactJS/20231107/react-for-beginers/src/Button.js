import PropTypes from "prop-types"
// import "./style.css"
// css 파일을 통해서 style을 inline으로 작성해주지 않아도 됨
import styled from "./Button.module.css"

function Button({ text }) {
  return <button className={styled.btn}>{ text }</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button;