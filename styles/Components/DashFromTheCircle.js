import styled from 'styled-components'

export const DashFromTheCircle = styled.div`
  height: 4px;
  width: 46px;
  background-color: ${(props) => props.theme.colors.colorGrayLighter};
  position: absolute;
  left: -46px;
  top: 49px;
  @media (min-width: 1080px) {
    left: 40px;
    top: ${(props) => (props.presentTime ? 'unset' : '-32px')};
    bottom: ${(props) => (props.presentTime ? '-32px' : 'none')};
    height: 32px;
    width: 4px;
  }
`
