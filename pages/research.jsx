import Link from "next/link";
import {
  CardContainer,
  CenterDiv,
  P,
  SameBackgroundColor,
  SpanText,
  Button,
  H1,
  H6,
} from "../theme/globalStyles";

const Research = () => {
  return (
    <SameBackgroundColor>
      <CenterDiv>
        <H1>Resources</H1>
      </CenterDiv>
      <CenterDiv>
        <CardContainer>
          <H6>
            Gut Microbiome Composition and Serum Metabolome Profile Among
            Individuals With Spinal Cord Injury and Normal Glucose Tolerance or
            Prediabetes/Type 2 Diabetes
          </H6>
          <P>
            Jia Li, PhD, Casey Morrow, PhD, Stephen Barnes, PhD, Landon Wilson,
            BSc, Erika D. Womack, PhD, Amie McLain, MD, Ceren Yarar-Fisher, PT,
            PhD
          </P>
          <Button>View full article</Button>
        </CardContainer>
        <CardContainer>
          <H6>
            Comparison of the gut microbiome composition among individuals with
            acute or long-standing spinal cord injury vs. able-bodied controls
          </H6>
          <P>
            Jia Li, William Van Der Pol, Mualla Eraslan, Amie McLain, Hatice
            Cetin, Baris Cetin, Casey Morrow, Tiffany Carson, Ceren Yarar-Fisher
          </P>
          <Button>View full article</Button>
        </CardContainer>
      </CenterDiv>
    </SameBackgroundColor>
  );
};

export default Research;
