import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [-(y - 320) / 20, (x - 270) / 20, 1.05]
const trans = (x, y, z) =>
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${z})`

const HeaderPartPhoto = ({ showIcons }) => {
  const [spring, setSpring] = useSpring(() => ({
    xyz: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }))

  const handleMouseMove = (event) => {
    const {
      nativeEvent: { offsetX: ox, offsetY: oy },
    } = event
    setSpring({ xyz: calc(ox, oy) })
  }

  return (
    <>
      {showIcons ? (
        <WrappBigPhoto
          onMouseMove={(event) => handleMouseMove(event)}
          onMouseLeave={() => setSpring({ xyz: [0, 0, 1] })}
          style={{ transform: spring.xyz.interpolate(trans) }}
        >
          <ShadowDiv />
          <WrappSmallPhoto>
            <PhotoMy src={'agata.png'} alt={"I'm"} />
          </WrappSmallPhoto>
        </WrappBigPhoto>
      ) : null}
    </>
  )
}

export default HeaderPartPhoto

const WrappBigPhoto = styled(animated.div)`
  max-width: 900px;
  position: relative;
  cursor: pointer;
`

const WrappSmallPhoto = styled.div`
  max-width: 900px;
  line-height: 0;
  position: relative;
  top: 0;
  bottom: 0px;
  left: 0px;
  right: 0;
  z-index: 1;
`
const PhotoMy = styled.img`
  width: 100%;
`

const ShadowDiv = styled.div`
  max-width: 900px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 20%;
  z-index: 0;
  box-shadow: ${(props) => props.theme.shadows.shadowWhite};
  background: ${(props) => props.theme.gradients.gradientBox};
  border-radius: 5px;
`
