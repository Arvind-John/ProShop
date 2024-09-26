import { Alert } from "react-bootstrap";

const Message = ({ variant: info, children }) => {
  return <Alert variant={info}>{children}</Alert>;
};

export default Message;
