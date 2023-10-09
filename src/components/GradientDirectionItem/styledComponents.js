// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  cursor: pointer;
  margin-bottom: 15px;
  margin-right: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.opacity};
`

export const Button = styled.button`
  border-style: none;
  background-color: transparent;
`
