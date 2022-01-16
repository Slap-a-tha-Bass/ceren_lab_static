import {
  CardContainer2,
  CenterDiv,
  ChangeBackgroundColor,
  P,
  PageHeader,
} from "../theme/globalStyles";

const News = () => {
  return (
    <ChangeBackgroundColor>
      <CenterDiv>
        <PageHeader>News</PageHeader>
      </CenterDiv>
      <CenterDiv>
        <CardContainer2>
          <h1>News Article 1</h1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
            magnam molestias quod expedita esse. Fuga optio, numquam blanditiis
            beatae maiores sed temporibus assumenda culpa quos.
          </P>
        </CardContainer2>
        <CardContainer2>
          <h1>News Article 2</h1>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
            magnam molestias quod expedita esse. Fuga optio, numquam blanditiis
            beatae maiores sed temporibus assumenda culpa quos.
          </P>
        </CardContainer2>
      </CenterDiv>
    </ChangeBackgroundColor>
  );
};

export default News;
