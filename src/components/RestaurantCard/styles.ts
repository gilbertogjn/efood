import styled from 'styled-components'
import { colors } from '../../styles'
import Button from '../Button'

export const Card = styled.div`
  position: relative;
  width: 472px;
  height: 424px;
  background-color: ${colors.white};
  border: 1px solid ${colors.red};

  .photo {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  p {
    margin: 16px 0;
    line-height: 24px;
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
  height: 202px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
