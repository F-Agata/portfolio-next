import styled from 'styled-components'

const WrappLineDecoration = () => {
  return (
    <LineDecoration>
      <Line />
    </LineDecoration>
  )
}

export default WrappLineDecoration

const LineDecoration = styled.div`
  width: 60px;
  margin-bottom: 40px;
  align-self: stretch;
  @media (min-width: 1080px) {
    width: 100%;
    height: 4px;
  }
`

const Line = styled.div`
  height: 100%;
  width: 4px;
  background-color: ${(props) => props.theme.colors.colorGrayLighter};
  @media (min-width: 1080px) {
    width: 100%;
    height: 4px;
  }
`
