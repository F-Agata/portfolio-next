import styled from 'styled-components'

const NavigationMainListBig = ({ menuItems, setAddShadow }) => {
  const menuItem = menuItems.map((item, index) => (
    <NavigationLi key={item.id} onClick={() => setAddShadow(index !== 0)}>
      <NavigationLink href={index === 0 ? '/' : `#${item.id}`}>
        {item.name}
      </NavigationLink>
    </NavigationLi>
  ))

  return (
    <NavigationWrapp>
      <nav>
        <NavigationUl>{menuItem}</NavigationUl>
      </nav>
    </NavigationWrapp>
  )
}

export default NavigationMainListBig

const NavigationWrapp = styled.div`
  align-self: center;
`

const NavigationUl = styled.ul`
  display: flex;
  height: 60px;
  justify-content: right;
  transition: 0.3s;
  :hover a {
    color:  ${({ theme: { colors } }) => colors.colorGrayMid};
`

const NavigationLi = styled.li`
  margin-left: 30px;
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  text-align: right;
  transition: 0.3s;
  :hover a {
    color: ${({ theme: { colors } }) => colors.colorText};
  }
`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  transition: 0.3s;

  ${({ theme: { colors, fonts, fontSizes } }) => `
    color: ${colors.colorText}; 
    font-family: ${fonts.fontSecondary};
    font-size: ${fontSizes.fsB1};
    :active {
      color: ${colors.colorPrimary};
    }
  `};
`
