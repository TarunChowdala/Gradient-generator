// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  width: ${props => props.width}px;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.h1`
  color: white;
  font-size: ${props => props.fontSize}px;
`

export const Para = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
`
export const Input = styled.input`
  margin-top: 10px;
`
export const Label = styled.p`
  color: ${props => props.color};
`
export const Button = styled.button`
  color: black;
  background-color: #00c9b7;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
`
