import {
  CardContainer2,
  CenterDiv,
  ChangeBackgroundColor,
  H1,
  P,
  PageHeader,
} from "../theme/globalStyles";
import mobileSetter from "../hooks/mobileSetter";

const News = () => {
  const { isMobile } = mobileSetter();
  return (
    <ChangeBackgroundColor>
      <CenterDiv>
        <PageHeader>News</PageHeader>
      </CenterDiv>
      {isMobile ? (
        <>
          <CenterDiv>
            <CardContainer2>
              <H1>News Article 1</H1>
              <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis excepturi commodi praesentium laboriosam!
                Blanditiis magnam molestias quod expedita esse. Fuga optio,
                numquam blanditiis beatae maiores sed temporibus assumenda culpa
                quos.
              </P>
            </CardContainer2>
          </CenterDiv>
          <CenterDiv>
            <CardContainer2>
              <H1>News Article 2</H1>
              <P>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis excepturi commodi praesentium laboriosam!
                Blanditiis magnam molestias quod expedita esse. Fuga optio,
                numquam blanditiis beatae maiores sed temporibus assumenda culpa
                quos.
              </P>
            </CardContainer2>
          </CenterDiv>
        </>
      ) : (
        <CenterDiv>
          <CardContainer2>
            <H1>News Article 1</H1>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
              magnam molestias quod expedita esse. Fuga optio, numquam
              blanditiis beatae maiores sed temporibus assumenda culpa quos.
            </P>
          </CardContainer2>
          <CardContainer2>
            <H1>News Article 2</H1>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
              magnam molestias quod expedita esse. Fuga optio, numquam
              blanditiis beatae maiores sed temporibus assumenda culpa quos.
            </P>
          </CardContainer2>
        </CenterDiv>
      )}
    </ChangeBackgroundColor>
  );
};

export default News;
