import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => (!props.isVisited ? '#3b82f6' : 'transparent')};
  color: ${props => (!props.isVisited ? '#ffffff' : '#94a3b8')};
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 9px;
  padding: 0.3rem 1rem 0.3rem 1rem;
`
export const Para = styled.p`
  font-size: 1rem;

  color: #94a3b8;
  font-weight: bold;
  padding: 0.3rem 1rem 0.3rem 1rem;
`
