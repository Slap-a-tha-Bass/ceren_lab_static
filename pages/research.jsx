import Link from "next/link";
import {
  CardContainer,
  CenterDiv,
  P,
  SameBackgroundColor,
  SpanText,
  Button,
} from "../theme/globalStyles";

const Research = () => {
  return (
    <SameBackgroundColor>
      <CenterDiv>
        <h1>Resources</h1>
      </CenterDiv>
      <CenterDiv>
        <CardContainer>
          <h6>
            Gut Microbiome Composition and Serum Metabolome Profile Among
            Individuals With Spinal Cord Injury and Normal Glucose Tolerance or
            Prediabetes/Type 2 Diabetes
          </h6>
          <p>
            Jia Li, PhD, Casey Morrow, PhD, Stephen Barnes, PhD, Landon Wilson,
            BSc, Erika D. Womack, PhD, Amie McLain, MD, Ceren Yarar-Fisher, PT,
            PhD
          </p>
          <Button>
            <Link href="">View full article</Link>
          </Button>
        </CardContainer>
        <CardContainer>
          <h6>
            Comparison of the gut microbiome composition among individuals with
            acute or long-standing spinal cord injury vs. able-bodied controls
          </h6>
          <p>
            Jia Li, William Van Der Pol, Mualla Eraslan, Amie McLain, Hatice
            Cetin, Baris Cetin, Casey Morrow, Tiffany Carson, Ceren Yarar-Fisher
          </p>
          <Button>
            <Link href="">View full article</Link>
          </Button>
        </CardContainer>
      </CenterDiv>
    </SameBackgroundColor>
  );
};

export default Research;
