import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Container,
  Ul,
  Text,
  Input,
  Label,
  Button,
  Para,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    generate: false,
    color1: '#8ae323',
    color2: '#014f7b',
    direction: 'left',
    selectedSide: 'top',
  }

  sideSelected = eachItem => {
    this.setState({direction: eachItem.value})
    const clickedSide = gradientDirectionsList.find(
      eachSide => eachSide.directionId === eachItem.directionId,
    )
    this.setState({selectedSide: clickedSide.value})
  }

  onSelectColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onSelectColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickGenerate = () => {
    this.setState({generate: true})
  }

  render() {
    let {color1, color2, direction} = this.state
    const {generate, selectedSide} = this.state
    if (!generate) {
      color1 = '#8ae323'
      color2 = '#014f7b'
      direction = 'top'
    }
    return (
      <Container
        data-testid="gradientGenerator"
        direction={direction}
        color1={color1}
        color2={color2}
      >
        <Text fontSize={20}>Generate a CSS Color Gradient</Text>
        <Para fontSize={15}>Choose Direction</Para>
        <Ul width={400}>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              eachItem={eachItem}
              sideSelected={this.sideSelected}
              selectedSide={selectedSide}
            />
          ))}
        </Ul>
        <Para fontSize={15}>Pick the Colors</Para>
        <Ul width={200}>
          <div>
            <Label color={color1}>{color1}</Label>
            <Input value={color1} onChange={this.onSelectColor1} type="color" />
          </div>
          <div>
            <Label color={color2}>{color2}</Label>
            <Input value={color2} onChange={this.onSelectColor2} type="color" />
          </div>
        </Ul>
        <Button onClick={this.onClickGenerate}>Generate</Button>
      </Container>
    )
  }
}

export default GradientGenerator
