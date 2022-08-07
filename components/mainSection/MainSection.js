import { useState } from 'react'
import styled from 'styled-components'

import MPEducation from './MPEducation'
import MPExperience from './MPexperience'
import MPNavigation from './MPNavigation'
import MPSkills from './MPSkills'
import DivToNavigation from '../DivToNavigation'

const mpNavigationArray = [
  {
    name: 'doświadczenie zawodowe',
    id: 'MPNavigation2',
  },
  {
    name: 'edukacja',
    id: 'MPNavigation1',
  },
  {
    name: 'umiejętności',
    id: 'MPNavigation3',
  },
]

const MainSection = () => {
  const [activeTab, setActiveTab] = useState('doświadczenie zawodowe')

  return (
    <>
      <DivToNavigation id={'mainPage'} />
      <WrappMainSection>
        <MPNavigation
          setActiveTab={setActiveTab}
          mpNavigationArray={mpNavigationArray}
          activeTab={activeTab}
        />
        {activeTab === 'edukacja' && <MPEducation />}
        {activeTab === 'doświadczenie zawodowe' && <MPExperience />}
        {activeTab === 'umiejętności' && <MPSkills />}
      </WrappMainSection>
    </>
  )
}

export default MainSection

const WrappMainSection = styled.main`
  margin: 40px 40px 0 40px;
  padding-bottom: 40px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${(props) => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 992px) {
  }
`
