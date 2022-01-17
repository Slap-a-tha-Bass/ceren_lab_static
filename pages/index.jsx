import Head from "next/head";
import Image from "next/image";
import GIFImg from "../photos/bacteria-dark.webp";
import { useState, useEffect } from "react";
import {
  CardContainer,
  CenterDiv,
  SameBackgroundColor,
  SpanHeader,
  SpanText,
  P,
  H1,
} from "../theme/globalStyles";
import Mission from "./mission";
import News from "./news";
import Research from "./research";
import Resources from "./resources";
import mobileSetter from "../hooks/mobileSetter";

export default function Home() {

  const { isMobile } = mobileSetter();

  return (
    <>
      <Head>
        <title>proSCI Labs</title>
      </Head>
      <SameBackgroundColor>
        {isMobile ? (
          <>
            <CenterDiv>
              <CardContainer className="transition">
                <H1 className="typewriter">A rebel's approach</H1>
                <P className="transition-2">
                  Changing <SpanText>spinal cord injury</SpanText>, acute and
                  chronic care, through using E-Stim, ketogenic dietary
                  strategies, and gut microbiome modifications.
                </P>
              </CardContainer>
            </CenterDiv>
            <CenterDiv>
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
          </>
        ) : (
          <CenterDiv>
            <CardContainer className="transition">
              <H1 className="typewriter">A rebel's approach</H1>
              <P className="transition-2">
                Changing <SpanText>spinal cord injury</SpanText>, acute and
                chronic care, through using E-Stim, ketogenic dietary
                strategies, and gut microbiome modifications.
              </P>
              <H1>Testing...</H1>
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
        )}
      </SameBackgroundColor>
      {!isMobile && <Mission />}
      {!isMobile && <Research />}
      {!isMobile && <News />}
      {!isMobile && <Resources />}
    </>
  );
}
