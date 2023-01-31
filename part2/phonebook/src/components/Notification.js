import { HttpStatusCode } from "axios";

const Notification = (props) => {
  const { type, message } = props;
  let colour = null;

  if (type === null) return null;

  if (type === HttpStatusCode.Created) {
    colour = "#1a7009";
  } else if (type === HttpStatusCode.BadRequest) {
    colour = "#b00000";
  } else {
    colour = "#000";
  }

  const notification = {
    div: {
      width: "300px",
      border: `5px solid ${colour}`,
      borderRadius: "5px",
    },
  };

  return (
    <div style={notification.div}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
