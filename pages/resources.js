import {
  SameBackgroundColor,
  CenterDiv,
  PageHeader,
  CardContainer,
  P
} from "../theme/globalStyles";

const Resources = () => {
  return (
    <SameBackgroundColor>
      <CenterDiv>
        <h1>Resources</h1>
      </CenterDiv>
      <CenterDiv>
        <CardContainer>
          <h1>Resource 1</h1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
            magnam molestias quod expedita esse. Fuga optio, numquam blanditiis
            beatae maiores sed temporibus assumenda culpa quos.
          </P>
        </CardContainer>
        <CardContainer>
          <h1>Resource 2</h1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
            magnam molestias quod expedita esse. Fuga optio, numquam blanditiis
            beatae maiores sed temporibus assumenda culpa quos.
          </P>
        </CardContainer>
      </CenterDiv>
    </SameBackgroundColor>
  );
};

export default Resources;
