import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonLink = styled(Link)`
  height: 24px;
  width: 94px;
  color: ${colors.beige};
  background-color: ${colors.red};
  padding: 4px 6px;
  text-decoration: none;
  font-weight: bold;
`

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${colors.beige};
  color: ${colors.red};
  padding: 4px 0;
  text-decoration: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
`
