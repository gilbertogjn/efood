import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  width: 472px;
  height: 400px;
  background-color: ${colors.white};
  border: 1px solid ${colors.red};

  img {
    width: 100%;
  }

  p {
    margin: 16px 0;
    line-height: 22px;
  }
`

export const TagBar = styled.div`
  display: flex;
  position: absolute;
  gap: 8px;
  top: 8px;
  right: 8px;
`

export const Infos = styled.div`
  padding: 8px;
`

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 700;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    margin-right: 8px;
  }
`
