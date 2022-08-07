import styled from 'styled-components'

export const WrappMPEssence = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  @media (min-width: 1080px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
