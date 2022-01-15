import {
  SameBackgroundColor,
  CenterDiv,
  CardContainter,
  SpanText,
} from "../theme/globalStyles";

const People = () => {
  return (
    <SameBackgroundColor>
      <CenterDiv>
        <CardContainter className="transition">
          <h1>
            A rebel's approach to changing
            <SpanHeader>SCI</SpanHeader>
            care
          </h1>
          <div>
            Changing acute care and care in the chronic stages of
            <SpanText>spinal cord injury</SpanText> through using E-Stim,
            ketogenic dietary strategies, and gut microbiome modifications.
          </div>
        </CardContainter>
      </CenterDiv>
    </SameBackgroundColor>
  );
};

export default People;
