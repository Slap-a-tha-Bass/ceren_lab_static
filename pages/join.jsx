import {
  Button,
  Label,
  Input,
  FormGroup,
  Textarea,
  CenterDiv,
} from "../theme/globalStyles";

const Join = () => {
  return (
    <>
      <CenterDiv>
        <h1>Join our team</h1>
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
