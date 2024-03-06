import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.section`
  background-color: ${colors.beige};
  height: 384px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 40px;

  h2 {
    font-size: 36px;
    font-weight: 900;
    max-width: 540px;
    text-align: center;
  }
`
