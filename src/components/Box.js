import styled from "styled-components"
import {motion} from "framer-motion"

const Box = styled(motion.div)`
  display: ${props => props.display ? props.display : "block"};
  position: ${props => props.position ? props.position : "relative"};
  background-color: ${props => props.bc};
  border-radius: ${props => props.br};

  width: ${props => props.w};
  height: ${props => props.h};
  max-width: ${props => props.mw};

  left: ${props => props.l};
  right: ${props => props.r};
  top: ${props => props.t};
  bottom: ${props => props.b};
  
  padding: ${props => props.p};
  padding-top: ${props => props.pt};
  padding-right: ${props => props.pr};
  padding-bottom: ${props => props.pb};
  padding-left: ${props => props.pl};

  margin: ${props => props.m};
  margin-top: ${props => props.mt};
  margin-right: ${props => props.mr};
  margin-bottom: ${props => props.mb};
  margin-left: ${props => props.ml};
`

export default Box

