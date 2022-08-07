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
          <SmallTitleMPOneItem> 2005 – 2011 </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText>
            {' '}
            Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w
            Sosnowcu
          </MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011 </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText>
            {' '}
            Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w
            Sosnowcu
          </MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011 </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText>
            {' '}
            Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w
            Sosnowcu
          </MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011 </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText>
            {' '}
            Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w
            Sosnowcu
          </MPText>
        </WrappMPOneItem>
        <WrappMPOneItem mpskills>
          <Circle />
          <DashFromTheCircle />
          <SmallTitleMPOneItem> 2005 – 2011 </SmallTitleMPOneItem>
          <MPText> Śląski Uniwersytet Medyczny w Katowicach </MPText>
          <MPText>
            {' '}
            Wydział Farmaceutyczny z Oddziałem Medycyny Laboratoryjnej w
            Sosnowcu
          </MPText>
        </WrappMPOneItem>
      </WrappMPEssence>
    </WrappMPSection>
  )
}

export default MPSkills
