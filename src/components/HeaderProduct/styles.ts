import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.section`
  background-color: ${colors.beige};

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
  font-weight: 900;
  font-size: 18px;
  position: relative;

  .restaurantsBtn {
    color: ${colors.red};
    width: 153px;
  }
`

export const HeroBar = styled.div`
  width: 100%;
  height: 280px;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 25px 0;
    color: ${colors.white};

    h2 {
      font-size: 36px;
      font-weight: 900;
    }

    h3 {
      font-weight: 100;
      font-size: 32px;
    }
  }
`
