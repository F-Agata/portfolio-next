import styled from 'styled-components'

export const Circle = styled.div`
  width: ${(props) => props.theme.fontSizes.fsB2};
  height: ${(props) => props.theme.fontSizes.fsB2};
  border: 4px solid ${(props) => props.theme.colors.colorGrayLighter};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.colors.colorPrimary
      : props.theme.colors.colorGray};
  position: absolute;
  left: -66px;
  @media (min-width: 1080px) {
    left: 31px;
    top: ${(props) => (props.presentTime ? 'none' : '-53px')};
    bottom: ${(props) => (props.presentTime ? '-53px' : 'none')};
  }
`
