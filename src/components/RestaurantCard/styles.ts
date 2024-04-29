import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  width: 472px;
  background-color: ${colors.white};
  border: 1px solid ${colors.red};

  .photo {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  @media screen and (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media only screen and (max-width: ${breakpoints.tablet}) {
    width: 100%;
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
  display: flex;
  flex-direction: column;
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

  img {
    height: 14px;
  }
`

export const Description = styled.p`
  margin: 16px 0;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`
