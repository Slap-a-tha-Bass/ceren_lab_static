import Head from "next/head";
import Image from "next/image";
import GIFImg from "../photos/7Gob.gif";

import {
  CardContainter,
  CenterDiv,
  SameBackgroundColor,
  SpanHeader,
  SpanText,
  P,
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
            <h1 className="typewriter">A rebel's approach</h1>
            <P className="transition-2">
              Changing acute care and care in the chronic stages of
              <SpanText>spinal cord injury</SpanText> through using E-Stim,
              ketogenic dietary strategies, and gut microbiome modifications.
            </P>
          </CardContainter>
          <CardContainter>
            <Image
              className="transition-1"
              src={GIFImg}
              alt="Gif bacteria"
              priority
            />
          </CardContainter>
        </CenterDiv>
      </SameBackgroundColor>
      <Mission />
    </>
  );
}
