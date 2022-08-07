import styled from 'styled-components'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import Navigation from '../components/navigation/Navigation'
import Header from '../components/header/Header'

const Home = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  return (
    <MainContainer>
      <Navigation />
      <Header />
      {/*<MainPage />*/}
      {/*<MainPortfolio />*/}
      {/*<Footer />*/}
      {/*<GoToTopOfPage />*/}
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
