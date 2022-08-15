import { useState } from 'react'
import styled from 'styled-components'

import DivToNavigation from '../DivToNavigation'
import { TitleOfSection } from '../../styles'
import NextLink from 'next/link'

const portfolioArray = [
  {
    name: 'Viar website',
    id: 'viar',
    path: '/projects/viar-website.png',
    stack: 'react, next, styled components, styled system',
    github: 'https://github.com/F-Agata/viar-next',
  },
  {
    name: 'Rubinowe website',
    id: 'rubinowe',
    path: '/projects/rubinowe-website.png',
    stack: 'react, next, styled components, sendgrid',
    github: 'https://github.com/F-Agata/rubinowe',
  },
  {
    name: 'Finsweet website',
    id: 'finsweet-website',
    path: '/projects/finsweet-website.png',
    stack: 'react, next, styled components',
    github: 'https://github.com/F-Agata/finsweet',
  },
  // {
  //   name: 'Quiz template',
  //   id: 'quiz',
  //   path: '/projects/quiz.png',
  //   skills: 'html, css, jsx',
  // },
  // {
  //   name: 'form',
  //   id: 'form',
  //   path: '/projects/form.png',
  //   skills: 'html, css, jsx',
  // },
  {
    name: 'Memory game',
    id: 'memory',
    path: '/projects/memory.png',
    stack: 'create react app, react',
    github: 'https://github.com/F-Agata/memory-game',
  },
  // {
  //   name: 'quiz1',
  //   id: 'quiz1',
  //   path: '/projects/quiz.png',
  //   skills: 'html, css, jsx',
  // },
  // {
  //   name: 'form1',
  //   id: 'form1',
  //   path: '/projects/form.png',
  //   skills: 'html, css, jsx',
  // },
]

const MainPortfolio = () => {
  const [isActiveProjects, setIsActiveProject] = useState({
    isActiveProject1: false,
    isActiveProject2: false,
    isActiveProject3: false,
  })

  const onMouseEnterChangeActive = (e, isActiveProject) => {
    setIsActiveProject({
      ...isActiveProjects,
      [isActiveProject]: true,
    })
  }

  const onMouseLeaveChangeActive = (e, isActiveProject) => {
    setIsActiveProject({
      ...isActiveProjects,
      [isActiveProject]: false,
    })
  }

  const oneProject = portfolioArray.map((item, index) => {
    const isActive = isActiveProjects[`isActiveProject${index + 1}`]

    return (
      <WrappOneProject
        key={item.id}
        onMouseEnter={(e) =>
          onMouseEnterChangeActive(e, `isActiveProject${index + 1}`)
        }
        onMouseLeave={(e) =>
          onMouseLeaveChangeActive(e, `isActiveProject${index + 1}`)
        }
        dataIsActiv={isActive}
      >
        <WrappInfo>
          <Title dataIsActiv={isActive}>{item.name}</Title>
          <Skills>{item.stack}</Skills>
        </WrappInfo>
        <WrappImgPF>
          <NextLink href={item.github}>
            <ImgPF src={item.path} alt={item.name} dataIsActiv={isActive} />
          </NextLink>
        </WrappImgPF>
        <GithubWrapper>
          <NextLink href={item.github}>{item.github}</NextLink>
        </GithubWrapper>
      </WrappOneProject>
    )
  })

  return (
    <>
      <DivToNavigation id={'mainPortfolio'} />
      <WrappMainPortfolio>
        <TitleOfSection>Portfolio</TitleOfSection>
        {oneProject}
      </WrappMainPortfolio>
    </>
  )
}

export default MainPortfolio

const GithubWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  font-weight: bold;
  justify-content: center;
  width: 100%;
`

const WrappMainPortfolio = styled.section`
  margin: 0 40px 0 40px;
  padding-bottom: 40px;
  min-width: 375px;
  max-width: 1440px;
  border-bottom: 1px solid ${(props) => props.theme.colors.colorBorder};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const WrappOneProject = styled.div`
  width: 100%;
  margin: 0 0 40px 0px;
  box-shadow: ${(props) => props.theme.shadows.shadowWhite};
  background: ${(props) => props.theme.gradients.gradientBox};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px;
  border-radius: 10px;
  transition: 0.3s;
  @media (min-width: 500px) {
    width: 80%;
  }
  @media (min-width: 600px) {
    width: 70%;
  }
  @media (min-width: 700px) {
    flex-direction: row;
    width: 49%;
    justify-content: space-between;
    align-self: stretch;
  }
  @media (min-width: 900px) {
    width: 46%;
  }
  @media (min-width: 1080px) {
    width: 32%;
  }
`

const WrappImgPF = styled.div`
  cursor: pointer;
  width: 100%;
  height: 300px;
  border-radius: 10px;
  align-self: stretch;
  overflow: hidden;
  @media (min-width: 500px) {
    height: 300px;
  }
  @media (min-width: 700px) {
    height: 250px;
  }
  @media (min-width: 900px) {
    height: 300px;
    padding: 0 20px;
  }
`

const ImgPF = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  transition: 0.3s;
  transform: ${(props) => (props.dataIsActiv ? 'scale(1.1, 1.1)' : null)};
`

const WrappInfo = styled.div`
  width: 100%;
  align-self: stretch;
  padding: 0 0 10px 0;
`

const Skills = styled.p`
  color: ${(props) => props.theme.colors.colorPrimary};
  font-size: ${(props) => props.theme.fontSizes.fsB3};
  font-family: ${(props) => props.theme.fonts.fontPrimary};
  text-align: center;
  letter-spacing: 1px;
`

const Title = styled.p`
  text-decoration: none;
  text-align: center;
  color: ${(props) =>
    props.dataIsActiv
      ? props.theme.colors.colorPrimary
      : props.theme.colors.colorText};
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  font-weight: 700;
  letter-spacing: 2px;
  font-size: ${(props) => props.theme.fontSizes.fsB1};
  transition: 0.3s;
`
