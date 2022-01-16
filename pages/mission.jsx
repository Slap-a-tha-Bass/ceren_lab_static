import Link from "next/link";
import {
  CardButton,
  CardContainer2,
  CenterDiv,
  ChangeBackgroundColor,
  H1,
  P,
  PageHeader,
} from "../theme/globalStyles";

const Mission = () => {
  return (
    <ChangeBackgroundColor>
      <CenterDiv>
        <PageHeader>Mission</PageHeader>
      </CenterDiv>
      <CenterDiv>
        <CardContainer2 className="transition">
          <H1 className="transition-1">Who we are</H1>
          <P className="transition-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
            magnam molestias quod expedita esse. Fuga optio, numquam blanditiis
            beatae maiores sed temporibus assumenda culpa quos.
          </P>
          <div>
            <CardButton padding={16} margin={16}>
              <Link href="/people">Our Team</Link>
            </CardButton>
          </div>
        </CardContainer2>
      </CenterDiv>
    </ChangeBackgroundColor>
  );
};

export default Mission;
