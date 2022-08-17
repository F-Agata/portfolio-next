import styled from 'styled-components'

import HeaderPartPhoto from './HeaderPartPhoto'
import HeaderPartText from './HeaderPartText'
import DivToNavigation from '../DivToNavigation'

const Header = ({ showIcons }) => {
  return (
    <>
      <DivToNavigation id={'header'} />
      <WrappHeader>
        <WrappHeaderPartPhoto>
          <HeaderPartPhoto showIcons={showIcons} />
        </WrappHeaderPartPhoto>
        <WrappHeaderPartText>
          <HeaderPartText showIcons={showIcons} />
        </WrappHeaderPartText>
      </WrappHeader>
    </>
  )
}

export default Header

const WrappHeader = styled.header`
  margin: 100px 40px 0 40px;
  padding-bottom: 40px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${(props) => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    margin: 100px 40px 0 40px;
    padding-top: 40px;
  }
`

const WrappHeaderPartPhoto = styled.div`
  max-width: 900px;
  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`

const WrappHeaderPartText = styled.div`
  max-width: 700px;
  @media (min-width: 992px) {
    flex-basis: 50%;
    max-width: 900px;
  }
`
