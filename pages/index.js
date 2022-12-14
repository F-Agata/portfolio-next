import styled from 'styled-components'

import Navigation from '../components/navigation/Navigation'
import Header from '../components/header/Header'
import MainSection from '../components/mainSection/MainSection'
import MainPortfolio from '../components/mainPortfolio/MainPortfolio'
import Footer from '../components/footer/Footer'
import GoToTopOfPage from '../components/GoToTopOfPage'
import { useEffect, useState } from 'react'

const Home = () => {
  const [showIcons, setShowIcons] = useState(false)

  useEffect(() => {
    setShowIcons(true)
  }, [])

  return (
    <MainContainer>
      <Navigation showIcons={showIcons} />
      <Header showIcons={showIcons} />
      <MainSection />
      <MainPortfolio />
      <Footer showIcons={showIcons} />
      <GoToTopOfPage />
    </MainContainer>
  )
}

export default Home

const MainContainer = styled.div`
  min-width: 375px;
  max-width: 1440px;
  margin: 0 auto;
  text-align: left;
  min-height: 200vh;
  font-size: 16px;
  background-color: transparent;
  font-family: ${(props) => props.theme.fonts.fontPrimary};
  line-height: 30px;
  color: ${(props) => props.theme.colors.colorText};
  overflow: hidden;
`
