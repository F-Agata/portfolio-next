import { useState, useEffect } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const iconFaArrowUp = <FontAwesomeIcon icon={faArrowUp} />

const GoToTopOfPage = () => {
  const [scrollY, setScrollY] = useState(0)
  const [showArrow, setShowArrow] = useState(false)

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleArrow = () => {
    setScrollY(window.pageYOffset)
    if (scrollY > 120) {
      setShowArrow(true)
    } else setShowArrow(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleArrow)
    return () => window.removeEventListener('scroll', toggleArrow)
  }, [scrollY, showArrow])

  return (
    <>
      {showArrow ? (
        <WrappGoToTopOfPage onClick={scrollTop}>
          <BackgraundButtonArrow />
          <WrappArrow>{iconFaArrowUp}</WrappArrow>
        </WrappGoToTopOfPage>
      ) : null}
    </>
  )
}

export default GoToTopOfPage

const WrappGoToTopOfPage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: 1px solid ${(props) => props.theme.colors.colorBorder};
  cursor: pointer;
  z-index: 10;
  overflow: hidden;
  background-color: transparent;
`

const BackgraundButtonArrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.gradients.gradientBox};
  opacity: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`

const WrappArrow = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  font-family: ${(props) => props.theme.fonts.fontSecondary};
  color: ${(props) => props.theme.colors.colorPrimary};
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
`
