// Write your code here
import {ListItem, Button} from './styledComponents'

const gradientDirectionItem = props => {
  const {eachItem, sideSelected, selectedSide} = props
  console.log(selectedSide)
  const onClickSide = () => {
    sideSelected(eachItem)
  }

  const opacity = eachItem.value === selectedSide ? '1' : '0.5'

  return (
    <ListItem opacity={opacity}>
      <Button onClick={onClickSide} type="button">
        {eachItem.displayText}
      </Button>
    </ListItem>
  )
}

export default gradientDirectionItem
