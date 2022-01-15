import Link from "next/link";
import {
  CardButton,
  CardContainter2,
  CenterDiv,
  ChangeBackgroundColor,
} from "../theme/globalStyles";

const Mission = () => {
  return (
    <ChangeBackgroundColor>
      <CenterDiv>
        <CardContainter2 className="transition">
          <h1>Who we are</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis excepturi commodi praesentium laboriosam! Blanditiis
            magnam molestias quod expedita esse. Fuga optio, numquam blanditiis
            beatae maiores sed temporibus assumenda culpa quos.
          </span>
          <div>
            <CardButton padding={16} margin={16}>
              <Link href="/people">Our Team</Link>
            </CardButton>
          </div>
        </CardContainter2>
      </CenterDiv>
    </ChangeBackgroundColor>
  );
};

export default Mission;
