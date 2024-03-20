import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 80px 0;
  gap: 32px;
`
