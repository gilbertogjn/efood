import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${colors.beige};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;

  img {
    width: 125px;
  }

  p {
    width: 480px;
    font-size: 10px;
    text-align: center;
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 32px 0 80px;

  img {
    width: 24px;
  }
`
