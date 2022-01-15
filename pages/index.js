import Head from "next/head";
import {
  CardContainter,
  CenterDiv,
  SameBackgroundColor,
  SpanHeader,
  SpanText,
} from "../theme/globalStyles";
import Mission from "./mission";

export default function Home(props) {
  return (
    <>
      <Head>
        <title>proSCI Labs</title>
      </Head>
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
      <Mission />
    </>
  );
}
