let message = "Hello service world!";

const getHello = () => {
  if (message === "secrets") {
    return "Here are the secrets";
  }
  return message;
};

const setHello = (newMessage) => {
  message = newMessage;
};

export { getHello, setHello };