import styled from 'styled-components'
import { colors } from '../../styles'

export const Viewport = styled.div`
  z-index: 3;
  display: none;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`

export const CartContainer = styled.aside`
  z-index: 2;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background-color: ${colors.red};
  padding: 32px 8px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      display: flex;
      width: 100%;
      background-color: ${colors.beige};
      padding: 8px;
      position: relative;

      h3 {
        margin-bottom: 16px;
      }

      .itemImg {
        width: 80px;
        height: 80px;
        object-fit: cover;
        margin-right: 8px;
      }

      .removeItem {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 16px;
        cursor: pointer;
      }
    }
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.beige};
  font-weight: bold;
  font-size: 14px;
  margin: 40px 0 16px;
`
