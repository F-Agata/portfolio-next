import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faReact,
  faSass,
  faJsSquare,
  faApple,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'

const iconReact = <FontAwesomeIcon icon={faReact} />
const iconSass = <FontAwesomeIcon icon={faSass} />
const jsSquare = <FontAwesomeIcon icon={faJsSquare} />
const apple = <FontAwesomeIcon icon={faApple} />
const figma = <FontAwesomeIcon icon={faFigma} />

const skillIconsArray = [
  {
    name: iconReact,
    id: 'iconReact',
    path: '#',
  },
  {
    name: iconSass,
    id: 'iconSass',
    path: '#',
  },
  {
    name: jsSquare,
    id: 'jsSquare',
    path: '#',
  },
  {
    name: apple,
    id: 'apple',
    path: '#',
  },
  {
    name: figma,
    id: 'figma',
    path: '#',
  },
]

const SkillButtons = () => {
  const skillIcon = skillIconsArray.map((item) => (
    <WrappIcon key={item.id} href={item.path}>
      {item.name}
    </WrappIcon>
  ))

  return (
    <WrappSkillButtons>
      <Invitation>Pracuję z</Invitation>
      <WrappIcons>{skillIcon}</WrappIcons>
    </WrappSkillButtons>
  )
}

export default SkillButtons

const WrappSkillButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 2;
  width: 200px;
  margin-top: 40px;
  @media (min-width: 550px) {
    margin-left: 100px;
    margin-top: 0px;
  }
`
const Invitation = styled.p`
  width: 100%;
  color: ${(props) => props.theme.colors.colorText};
  font-size: ${(props) => props.theme.fontSizes.fsB3};
  font-family: ${(props) => props.theme.fonts.fontPrimary};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-weight: 700;
`

const WrappIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const WrappIcon = styled.a`
  flex-basis: 50px;
  height: 50px;
  border: none;
  box-shadow: ${(props) => props.theme.shadows.shadowWhite};
  background: ${(props) => props.theme.gradients.gradientBox};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.fsB2};
  color: ${(props) => props.theme.colors.colorText};
  margin-right: 20px;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`
