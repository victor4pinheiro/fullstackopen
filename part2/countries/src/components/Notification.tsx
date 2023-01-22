interface NotificationProps {
  error: string;
}

const Notification = (props: NotificationProps) => {
  const { error } = props;
  if (error === "") return null;

  return <div>{error}</div>;
};

export default Notification;
