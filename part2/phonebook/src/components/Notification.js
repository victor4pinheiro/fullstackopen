import { HttpStatusCode } from "axios";

const Notification = (props) => {
  const { type, message } = props;
  let colour = null;

  if (type === null) return null;

  if (type === HttpStatusCode.Created) {
    colour = "#1a7009";
  } else if (type === HttpStatusCode.BadRequest) {
    colour = "#702109";
  } else {
    colour = "#000";
  }

  const notification = {
    div: {
      border: `1px solid ${colour}`,
    },
    p: {
      colour,
    },
  };

  return (
    <div style={notification.div}>
      <p style={notification.p}>{message}</p>
    </div>
  );
};

export default Notification;
