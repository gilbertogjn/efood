import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  width: 320px;
  height: 338px;
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 8px;

  img {
    width: 100%;
  }

  h3 {
    margin-top: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  p {
    margin: 8px 0;
    line-height: 22px;
  }
`
