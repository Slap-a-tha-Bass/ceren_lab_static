import Head from "next/head";
import Image from "next/image";
import GIFImg from "../photos/bacteria-dark.webp";

import {
  CardContainer,
  CenterDiv,
  SameBackgroundColor,
  SpanHeader,
  SpanText,
  P,
} from "../theme/globalStyles";
import Mission from "./mission";
import News from "./news";
import Research from "./research";
import Resources from "./resources";

export default function Home(props) {
  console.log(
    "%c Used NextJS and Styled Components for this project.",
    "border: 1px solid rgb(31, 255, 160); padding: 10px; border-radius: 5px; color: rgb(31, 255, 160); background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
  console.log(
    "%c corey@deloach.dev",
    "border: 1px solid rgb(31, 255, 160); padding: 10px; border-radius: 5px; color: rgb(31, 255, 160); background-color: rgb(60,60,60); font-size: 20px; font-family: monospace"
  );
  return (
    <>
      <Head>
        <title>proSCI Labs</title>
      </Head>
      <SameBackgroundColor>
        <CenterDiv>
          <CardContainer className="transition">
            <h1 className="typewriter">A rebel's approach</h1>
            <P className="transition-2">
              Changing acute care and care in the chronic stages of
              <SpanText>spinal cord injury</SpanText> through using E-Stim,
              ketogenic dietary strategies, and gut microbiome modifications.
            </P>
          </CardContainer>
          <CardContainer>
            <CenterDiv>
              <Image
                className="transition-1"
                src={GIFImg}
                alt="Gif bacteria"
                layout="fixed"
                width={400}
                height={400}
                quality={100}
                priority
              />
            </CenterDiv>
          </CardContainer>
        </CenterDiv>
      </SameBackgroundColor>
      <Mission />
      <Research />
      <News />
      <Resources />
    </>
  );
}
