import styled from "styled-components"
import typography from "../constants/typography"

// const Header = (props) => <h1>{props.children}</h1>
const Header = styled.h1` 
    ${props => props.variant ? typography.header[props.variant] : typography.header.h2 };
    color: ${props => props.color};
`

export default Header