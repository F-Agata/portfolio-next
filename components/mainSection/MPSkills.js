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

const MPSkills = () => {
  const showDecorationLine = useBetterMediaQuery('(min-width: 1080px)')

  return (
    <WrappMPSection>
      <WrappMPEssence>
        <TitleOfSection>Umiejętności</TitleOfSection>
        {showDecorationLine ? <WrappLineDecoration /> : null}
        <WrappMPOneItem mpskills>
          <Circle />
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
        <WrappMPOneItem mpskills>
          <Circle />
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
