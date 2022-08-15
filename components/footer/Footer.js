import styled from 'styled-components'

import SocialButtons from '../SocialButtons'

import DivToNavigation from '../DivToNavigation'

const Footer = ({ showIcons }) => {
  return (
    <>
      <DivToNavigation id={'footer'} />
      <WrappFooter>
        <WrappLogo>
          <WrappLogoLink href={'#header'}>
            <Logo src={'logo.svg'} alt="logo" />
          </WrappLogoLink>
        </WrappLogo>
        {showIcons && <SocialButtons footerAlignCenter />}
        <WrappContact>
          <p>609 594 597</p>
          <p>hello@agataf.pl</p>
        </WrappContact>
      </WrappFooter>
    </>
  )
}

export default Footer

const WrappFooter = styled.footer`
  margin: 0 40px;
  padding: 40px;
  min-width: 375px;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const WrappLogo = styled.div`
  height: 60px;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 0px;
  }
  img {
    height: 28px;
  }
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

const WrappContact = styled.div`
  margin-top: 30px;
  text-align: center;
  @media (min-width: 992px) {
    margin-top: 0px;
    text-align: right;
  }
`
