import { useState } from 'react'
import styled from 'styled-components'

import WrappLineDecoration from '../WrappLineDecoration'
import {
  WrappMPOneItem,
  TitleOfSection,
  SmallTitleMPOneItem,
  Circle,
  DashFromTheCircle,
  WrappMPEssence,
  WrappMPSection,
  MPText,
} from '../../styles'
import useBetterMediaQuery from '../../hooks/useBetterMediaQuery'

const MPEducation = () => {
  const showDecorationLine = useBetterMediaQuery('(min-width: 1080px)')

  const [isActiveEdu1, setIsActiveEdu1] = useState(false)
  const [isActiveEdu2, setIsActiveEdu2] = useState(false)
  const [isActiveEdu3, setIsActiveEdu3] = useState(false)

  return (
    <WrappMPSection>
      {!showDecorationLine ? <WrappLineDecoration /> : null}
      <WrappMPEssence>
        <TitleOfSection>Edukacja</TitleOfSection>

        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveEdu3(true)
          }}
          onMouseLeave={() => {
            setIsActiveEdu3(false)
          }}
          presentTime
        >
          <Circle isActive={isActiveEdu3} presentTime />
          <DashFromTheCircle presentTime />
          {!showDecorationLine ? (
            <SmallTitleMPOneItem>2021 – 2022</SmallTitleMPOneItem>
          ) : null}

          <MPText presentTime>
            {' '}
            Przygotowanie do pracy jako front-end developer. Nauka i rozwój
            niezbędnych umiejętności.
          </MPText>
          <MPText presentTime>
            {' '}
            Część kursów i materiałów z których korzystałam:
          </MPText>
          <ul>
            <li>What The Frontend - co ten frontend</li>
            <li>Cykl kursów Samuraj programowania</li>
            <li>Kurs Gita - Maciej Aniserowicz</li>
            <li>Materiały uzupełniające z Udemy, Pluralsight</li>
            <li>Epic React by Kent C. Dodds</li>
          </ul>
          {showDecorationLine ? (
            <SmallTitleMPOneItem presentTime>2021 – 2022</SmallTitleMPOneItem>
          ) : null}
        </WrappMPOneItem>

        {showDecorationLine ? <WrappLineDecoration /> : null}

        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveEdu1(true)
          }}
          onMouseLeave={() => {
            setIsActiveEdu1(false)
          }}
        >
          <Circle isActive={isActiveEdu1} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011 </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText>
            {' '}
            Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w
            Sosnowcu
          </MPText>
          <Mgrfarm> mgr farmacji </Mgrfarm>
        </WrappMPOneItem>
        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveEdu2(true)
          }}
          onMouseLeave={() => {
            setIsActiveEdu2(false)
          }}
        >
          <Circle isActive={isActiveEdu2} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2002 – 2005 </SmallTitleMPOneItem>
          <MPText>
            {' '}
            I Liceum Ogólnokształcące im. Leona Kruczkowskiego w Tychach
          </MPText>
        </WrappMPOneItem>
      </WrappMPEssence>
    </WrappMPSection>
  )
}

export default MPEducation

const Mgrfarm = styled(SmallTitleMPOneItem)`
  font-weight: 700;
  margin-top: 10px;
  border-bottom: none;
  font-size: ${(props) => props.theme.fontSizes.fsB3};
  border-top: 1px solid ${(props) => props.theme.colors.colorPrimary};
`
