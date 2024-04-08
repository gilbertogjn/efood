import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.section`
  background-color: ${colors.beige};
  font-weight: 900;
  font-size: 18px;

  img {
    margin: 40px 0;
  }
`

export const HeaderProductInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.red};
  position: relative;

  .restaurantsBtn {
    color: ${colors.red};
    width: 197px;
  }
`

export const HeroBar = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 25px 0;
    color: ${colors.white};

    h2 {
      font-size: 36px;
      font-weight: 900;
      z-index: 1;
    }

    h3 {
      font-weight: 100;
      font-size: 32px;
      z-index: 1;
    }
  }
`
