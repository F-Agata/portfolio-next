import styled from 'styled-components'
import TypeIt from 'typeit-react'

import SkillButtons from '../SkillButtons'
import SocialButtons from '../SocialButtons'

const HeaderPartText = () => {
  return (
    <WrappHeaderInformations>
      <Welcome>
        <TypeWrapper>
          <TypeIt
            getBeforeInit={(instance) => {
              instance
                .type('Cześć,')
                .pause(300)
                .type(
                  ' jestem <span style="color: #ff014f; font-size: 30px; font-weight: 700; letter-spacing: 2px">Agata</span> ',
                )
                .break()
                .type('Moim')
                .pause(300)
                .delete(3)
                .type('ój cel zawodowy, to dalszy rozwój')
                .break()
                .type(
                  'jako <span style="color: #ff014f; font-size: 28px; letter-spacing: 2px">Front-end developer </span>',
                )
              return instance
            }}
          />
        </TypeWrapper>
      </Welcome>
      <InformationAboutMeTop>
        <p>
          Moim pierwszym wyborem jest <b>React</b>
        </p>
        <p>
          Cały czas rozwijam swoją wiedzę oraz umiejętności, w codziennej pracy
          z tą biblioteką.
        </p>
      </InformationAboutMeTop>
      <InformationAboutMeBottom>
        <p>Aktualnie projekty piszę w stacku:</p>
        <p>
          - <b>react</b> + <b>next.js</b>
        </p>
        <p>
          - <b>styled components</b> + <b>styled-system</b>
        </p>
      </InformationAboutMeBottom>
      <WrappSocialAndSkillButtons>
        <SocialButtons />
        <SkillButtons />
      </WrappSocialAndSkillButtons>
    </WrappHeaderInformations>
  )
}

export default HeaderPartText

const WrappHeaderInformations = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 50px 0 30px 0;
  @media (min-width: 992px) {
    margin: 0;
  }
`

const Welcome = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  font-size: ${(props) => props.theme.fontSizes.fsB1};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const InformationAboutMeTop = styled.div`
  width: 100%;
  margin: 30px 0 0 0;
`

const InformationAboutMeBottom = styled(InformationAboutMeTop)`
  margin: 10px 0 30px 0;
`

const WrappSocialAndSkillButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 30px;
  @media (min-width: 550px) {
    flex-direction: row;
  }
`

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`
