import { useState } from 'react'

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

const MPExperience = () => {
  const showDecorationLine = useBetterMediaQuery('(min-width: 1080px)')

  const [isActiveExp1, setIsActiveExp1] = useState(false)
  const [isActiveExp2, setIsActiveExp2] = useState(false)
  const [isActiveExp3, setIsActiveExp3] = useState(false)

  return (
    <WrappMPSection>
      {!showDecorationLine ? <WrappLineDecoration /> : null}

      <WrappMPEssence>
        <TitleOfSection>Doświadczenie zawodowe</TitleOfSection>

        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveExp3(true)
          }}
          onMouseLeave={() => {
            setIsActiveExp3(false)
          }}
          presentTime
        >
          <Circle isActive={isActiveExp3} presentTime />
          <DashFromTheCircle presentTime />

          {!showDecorationLine ? (
            <SmallTitleMPOneItem>od 06.2022 do obecnie</SmallTitleMPOneItem>
          ) : null}

          <MPText presentTime>Staż w Rubinowe Sp. z o.o. </MPText>
          <MPText presentTime>
            stanowisko: <b>junior front-end developer</b>
          </MPText>
          <br />
          <MPText presentTime>Zakres obowiązków: </MPText>
          <ul>
            <li>
              kodowanie responsywnych stron internetowych na podstawie projektów
              (Figma, PSD)
            </li>
            <li>
              wykorzystywany stack i narzędzia:{' '}
              <b>
                react.js, next.js, styled-components, styled-system, github,
                vercel
              </b>
            </li>
          </ul>
          {showDecorationLine ? (
            <SmallTitleMPOneItem presentTime>
              od 06.2022 do obecnie
            </SmallTitleMPOneItem>
          ) : null}
        </WrappMPOneItem>

        {showDecorationLine ? <WrappLineDecoration /> : null}

        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveExp1(true)
          }}
          onMouseLeave={() => {
            setIsActiveExp1(false)
          }}
        >
          <Circle isActive={isActiveExp1} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 04.2011 – 12.2020 </SmallTitleMPOneItem>
          <MPText> Apteka „Avicenna” sp. j. w Tychach </MPText>
        </WrappMPOneItem>
        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveExp2(true)
          }}
          onMouseLeave={() => {
            setIsActiveExp2(false)
          }}
        >
          <Circle isActive={isActiveExp2} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 09.2011 – 06.2012 </SmallTitleMPOneItem>
          <MPText> Apteka „Św. Anny” w Tychach (praca dodatkowa)</MPText>
        </WrappMPOneItem>
      </WrappMPEssence>
    </WrappMPSection>
  )
}

export default MPExperience
