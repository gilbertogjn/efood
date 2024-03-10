import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonLink = styled(Link)`
  width: 82px;
  height: 24px;
  color: ${colors.beige};
  background-color: ${colors.red};
  padding: 4px 6px;
  text-decoration: none;
  font-weight: bold;
`

export const ButtonContainer = styled.button``
