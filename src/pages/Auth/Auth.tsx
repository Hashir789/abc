import { FlipCard, FlipCardBackSide, FlipCardFrontSide } from "../../components/FlipCard/FlipCard";

const Auth = () => {
  return (
    <FlipCard width='300px'>
      <FlipCardFrontSide>
        <div data-flip-action>Clickable Div1</div>
        <div>Non Clickable Div1</div>
      </FlipCardFrontSide>
      <FlipCardBackSide>
        <div data-flip-action>Clickable Div2</div>
        <div>Non Clickable Div2</div>
      </FlipCardBackSide>
    </FlipCard>
  )
}

export default Auth;