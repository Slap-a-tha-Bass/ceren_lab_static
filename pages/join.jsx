import {
  Button,
  Label,
  Input,
  FormGroup,
  Textarea,
  CenterDiv,
  H1,
} from "../theme/globalStyles";

const Join = () => {
  return (
    <>
      <CenterDiv>
        <H1>Join our team</H1>
      </CenterDiv>
      <FormGroup>
        <Label htmlFor="">Name</Label>
        <Input type="text" />
        <Label htmlFor="">Email</Label>
        <Input type="text" />
        <Label htmlFor="">Message</Label>
        <Textarea name="" id="" cols="30" rows="10"></Textarea>
      </FormGroup>
      <CenterDiv>
        <Button>Submit</Button>
      </CenterDiv>
    </>
  );
};

export default Join;
