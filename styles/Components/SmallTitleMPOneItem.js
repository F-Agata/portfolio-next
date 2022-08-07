import styled from 'styled-components'

export const SmallTitleMPOneItem = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.fsB1};
  font-weight: 400;
  color: ${(props) => props.theme.colors.colorText};
  border-bottom: solid ${(props) => props.theme.colors.colorPrimary};
  border-top: solid ${(props) => props.theme.colors.colorPrimary};
  border-bottom-width: ${(props) => (props.presentTime ? '0px' : '1px')};
  border-top-width: ${(props) => (props.presentTime ? '1px' : '0px')};
  margin-bottom: 10px;
  @media (min-width: 1080px) {
    margin-bottom: ${(props) => (props.presentTime ? 'unset' : '10px')};
    margin-top: ${(props) => (props.presentTime ? '10px' : '0px')};
  }
`
