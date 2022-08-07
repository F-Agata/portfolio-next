import styled from 'styled-components'

export const WrappMPOneItem = styled.div`
  margin: 0 0 40px 0px;
  box-shadow: ${(props) => props.theme.shadows.shadowWhite};
  background: ${(props) => props.theme.gradients.gradientBox};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 40px;
  align-self: stretch;
  position: relative;
  @media (min-width: 1080px) {
    margin-left: ${(props) => (props.presentTime ? '0px' : '40px')};
    width: ${(props) => (props.presentTime ? '100%' : '45%')};
  }
`
