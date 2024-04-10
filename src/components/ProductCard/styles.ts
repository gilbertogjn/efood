import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  position: relative;
  width: 320px;
  height: 338px;
  background-color: ${colors.red};
  color: ${colors.beige};
  padding: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
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

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Número de linhas desejado */
  -webkit-box-orient: vertical;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  z-index: 1;

  &.visible {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .container {
    position: relative;
    display: flex;
    gap: 24px;
    padding: 32px;
    background-color: ${colors.red};
    color: ${colors.beige};

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: start;
    }

    img {
      width: 280px;
      height: 280px;
      object-fit: cover;
    }

    .close {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  ${ButtonContainer} {
    width: auto;
    padding: 4px 7px;
  }
`
