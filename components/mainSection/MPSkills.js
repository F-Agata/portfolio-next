import useBetterMediaQuery from '../../hooks/useBetterMediaQuery'

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
import { useState } from 'react'

const MPSkills = () => {
  const showDecorationLine = useBetterMediaQuery('(min-width: 1080px)')

  const [isActiveSkill1, setIsActiveSkill1] = useState(false)
  const [isActiveSkill2, setIsActiveSkill2] = useState(false)

  return (
    <WrappMPSection>
      {!showDecorationLine ? <WrappLineDecoration /> : null}
      <WrappMPEssence>
        <TitleOfSection>Umiejętności</TitleOfSection>
        {showDecorationLine ? <WrappLineDecoration /> : null}
        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveSkill1(true)
          }}
          onMouseLeave={() => {
            setIsActiveSkill1(false)
          }}
        >
          <Circle isActive={isActiveSkill1} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem>Tworzenie stron www</SmallTitleMPOneItem>
          <MPText>
            Tworzenie i optymalizowanie responsywnych stron internetowych.
            <br />
            Praca z warstwą front-end, komunikacja z warstwą back-end.
            <br />
            <br />
            Budowanie nowych projektów oraz utrzymanie, rozwój, refaktor już
            istniejących. Praca w środowisku: IOS, Windows.
          </MPText>
        </WrappMPOneItem>
        <WrappMPOneItem
          onMouseEnter={() => {
            setIsActiveSkill2(true)
          }}
          onMouseLeave={() => {
            setIsActiveSkill2(false)
          }}
        >
          <Circle isActive={isActiveSkill2} />
          <DashFromTheCircle />
          <SmallTitleMPOneItem>Stack i narzędzia</SmallTitleMPOneItem>
          <MPText>
            <ul>
              <li>HTML, Responsive Web Design</li>
              <li>CSS (Sass, bem, styled components)</li>
              <li>Java script (ES6+)</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Eslint, Prettier</li>
              <li>Figma</li>
              <li>Git, Github, Vercel</li>
            </ul>
          </MPText>
        </WrappMPOneItem>
      </WrappMPEssence>
    </WrappMPSection>
  )
}

export default MPSkills
