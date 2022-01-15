import Image from "next/image";
import Ceren from "../photos/Ceren.jpg";
import Erika from "../photos/Erika-headshot.jpg";

import {
  SameBackgroundColor,
  CenterDiv,
  CardContainter,
  SpanText,
  SpanHeader,
  P,
} from "../theme/globalStyles";

const People = () => {
  return (
    <SameBackgroundColor>
      <CenterDiv>
        <CardContainter className="transition">
          <CenterDiv>
            <h3>Ceren Yarar-Fisher</h3>
          </CenterDiv>
          <CenterDiv>
            <h6>Principal Investigator</h6>
          </CenterDiv>
          <CenterDiv>
            <Image
              src={Ceren}
              alt="Ceren"
              layout="fixed"
              width={300}
              height={300}
              priority
            />
          </CenterDiv>
          <P>
            Dr. Yarar-Fisher is an Associate Professor at the UAB Department of
            Physical Medicine and Rehabilitation in the UAB Heersink School of
            Medicine. Her translational research program focuses on
            understanding the pathophysiology of traumatic spinal cord injury
            (SCI) in the acute and chronic stages with the purpose of developing
            novel dietary and rehabilitation strategies to improve
            neuro-recovery, metabolism, and bowel function. Thus, her laboratory
            is currently developing and testing therapeutic diets and electrical
            stimulation programs to evaluate new ways to prevent neuronal death
            and promote recovery and function in the acute stages and improve
            body composition, gut microbiome composition, and skeletal muscle
            and metabolic health in the chronic stages of SCI. She has received
            several NIH and NIDILRR funding to support her investigations in
            SCI. She recently selected as one of the 10 Outstanding Young
            Persons of Turkey by Junior Chamber International for her work in
            Academic leadership and/or accomplishment. She served two years as
            Treasurer, Chair-Elect, and Chair in American Congress of
            Rehabilitation Medicine (ACRM) SCI-Special Interest Group, and is a
            member of ACRM, Academy of Spinal Cord Injury Professionals,
            American College of Sports Medicine and American Physiological
            Society. Dr. Yarar-Fisher has had the privilege of mentoring a wide
            variety of students and trainees, including 3 high school students,
            5 medical students, 3 Physical Medicine and Rehabilitation
            residents, 10 physical therapy students, 2 doctoral students, and 1
            post-doctoral trainee. She has also mentored 4 international
            visiting doctoral students and 2 visiting faculty from Hacettepe
            University/Turkey via Erasmus International Credit Mobility Program.
            Among her students, over 70% are racial ethnic minorities.
          </P>
        </CardContainter>
      </CenterDiv>
      <CenterDiv>
        <CardContainter className="transition">
          <CenterDiv>
            <h3>Erika Womack, PhD</h3>
          </CenterDiv>
          <CenterDiv>
            <h6>Laboratory Manager</h6>
          </CenterDiv>
          <CenterDiv>
            <Image
              src={Erika}
              alt="Erika"
              layout="fixed"
              width={300}
              height={300}
            />
          </CenterDiv>
          <P>
            I grew up in Cleveland, MS (home of the Fighting Okra, yes look it
            up). I attended Mississippi State University for my undergraduate
            degree in Biological Sciences and Mississippi College for my
            master’s degree in Biomedical Sciences. I have worked for the
            University of Mississippi Medical Center (UMMC) as a researcher for
            7 years studying adolescent pediatric scoliosis in the pediatric
            population before returning to Mississippi State University for my
            doctorate degree in molecular biology and biochemistry. I worked for
            the USDA-ARS as a post-doctoral f ellow for 3 years as a geneticist
            prior to joining Dr. Yarar-Fisher’s team where I am the laboratory
            manager and a researcher. Dr. Yarar-Fisher’s program investigating
            spinal cord injury compliments some techniques that I have learned
            along my academic and professional career but, most importantly, has
            encompassed many new and exciting disciplines and techniques
            including bioinformatics, tissue culture, RNAseq, metabolic
            profiling, immunohistochemistry, and other procedures to study
            individuals with SCI. As a researcher, I contribute to running
            experiments, data analysis and writing and editing of manuscripts.
            My laboratory manager duties include keeping the laboratory safe and
            legal, reconciliation of accounts, and mentorship and training of
            physicians and medical, physical therapy, undergraduate, and high
            school students in the laboratory. Some of my interests outside of
            the lab include playing sports, hanging out with family and friends,
            home improvement, traveling domestically to explore different cities
            along with their food and culture, tailgating, and relaxing.
          </P>
        </CardContainter>
      </CenterDiv>
    </SameBackgroundColor>
  );
};

export default People;
