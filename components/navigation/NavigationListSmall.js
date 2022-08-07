import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SocialButtons from '../SocialButtons'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

const iconFaXMark = <FontAwesomeIcon icon={faTimes} />

const NavigationMainListSmall = ({ menuItems, changeMenu }) => {
  const menuItem = menuItems.map((item) => (
    <NavigationLi key={item.id}>
      <NavigationLink href={`#${item.id}`} onClick={changeMenu}>
        {item.name}
      </NavigationLink>
    </NavigationLi>
  ))

  return (
    <NavigationWrapp>
      <NavigationListWrapp>
        <TopMenu>
          <WrappLogo onClick={changeMenu}>
            <WrappLogoLink href={'#header'}>
              <Logo src={'logo.svg'} alt="logo" />
            </WrappLogoLink>
          </WrappLogo>
          <WrapIcon>
            <ToggleMenuButton onClick={changeMenu}>
              {iconFaXMark}
            </ToggleMenuButton>
          </WrapIcon>
        </TopMenu>
        <NavigationNav>
          <NavigationUl>{menuItem}</NavigationUl>
        </NavigationNav>
        <BottomMenu>
          <SocialButtons colorPrimary />
        </BottomMenu>
      </NavigationListWrapp>
    </NavigationWrapp>
  )
}

export default NavigationMainListSmall

const NavigationWrapp = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

const NavigationListWrapp = styled.div`
  background: ${(props) => props.theme.gradients.gradientBox};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 20px;
  padding-right: 30px;
`

const TopMenu = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.colorBorder};
  margin: 10px 0 30px 0;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const WrappLogo = styled.div`
  height: 45px;
  text-align: left;
`

const WrappLogoLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
`

const Logo = styled.img`
  height: 100%;
`

const WrapIcon = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.shadows.shadowWhite};
  background: ${(props) => props.theme.gradients.gradientBox};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ToggleMenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.fsB2};
  color: ${(props) => props.theme.colors.colorPrimary};
`

const NavigationNav = styled.nav`
  flex-grow: 1;
  text-align: left;
`

const NavigationUl = styled.ul`
  display: flex;
  flex-direction: column;
  height: 60px;
`

const NavigationLi = styled.li`
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  transition: 0.3s;
  :hover a {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  color: ${(props) => props.theme.colors.colorText};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  font-size: ${(props) => props.theme.fontSizes.fsB3};
  font-weight: 700;
  letter-spacing: 2px;
  transition: 0.3s;
`

const BottomMenu = styled.div`
  margin: 30px 0px 40px 0px;
  text-align: left;
`
