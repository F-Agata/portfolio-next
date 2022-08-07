import { Box } from '../styles'
import useBetterMediaQuery from '../hooks/useBetterMediaQuery'

import Navigation from '../components/navigation/Navigation'

const Home = () => {
  const modificationPage = useBetterMediaQuery('(min-width: 768px)')

  return (
    <Box>
      <Navigation />
      {/*<Header />*/}
      {/*<MainPage />*/}
      {/*<MainPortfolio />*/}
      {/*<Footer />*/}
      {/*<GoToTopOfPage />*/}
    </Box>
  )
}

export default Home
