import styled from 'styled-components'

const MPNavigation = ({ mpNavigationArray, setActiveTab, activeTab }) => {
  const mpNavigationItem = mpNavigationArray.map(({ id, name }) => (
    <NavigationLi
      key={id}
      onClick={() => setActiveTab(name)}
      isActive={activeTab === name}
    >
      <NavigationText>{name}</NavigationText>
    </NavigationLi>
  ))

  return (
    <WrappMPNavigation>
      <NavigationUl>{mpNavigationItem}</NavigationUl>
    </WrappMPNavigation>
  )
}

export default MPNavigation

const WrappMPNavigation = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
  min-width: 375px;
  max-width: 1440px;
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadows.shadowWhite};
  background: ${(props) => props.theme.gradients.gradientBox};
  @media (min-width: 1080px) {
    height: 90px;
  }
`

const NavigationUl = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1080px) {
    flex-direction: row;
    height: 90px;
  `

const NavigationLi = styled.div`
  list-style: none;
  cursor: pointer;
  line-height: 90px;
  text-align: center;
  transition: 0.3s;
  width: 100%;
  border-radius: 10px;
  background: ${(props) =>
    props.isActive ? props.theme.gradients.gradientBox : 'transparent'};
  box-shadow: ${(props) =>
    props.isActive ? props.theme.shadows.shadowWhite : 'none'};
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.colorPrimary
      : props.theme.colors.colorText};
  :hover {
    box-shadow: ${(props) => props.theme.shadows.shadowWhite};
    background: ${(props) => props.theme.gradients.gradientBox};
  }
  :hover p {
    color:  ${(props) => props.theme.colors.colorPrimary};
  }
  @media (min-width: 1080px) {
    height: 90px;
`

const NavigationText = styled.p`
  text-decoration: none;
  height: 60px;
  line-height: 60px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  font-weight: 700;
  letter-spacing: 2px;
  font-size: ${(props) => props.theme.fontSizes.fsB1};
  transition: 0.3s;
  @media (min-width: 992px) {
    height: 90px;
    line-height: 90px;
`
