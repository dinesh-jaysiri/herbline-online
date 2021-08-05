const ErrorMessage = ({ error, errorVisible, message }) => {
  return (
    <>
      {error && errorVisible ? (
        <article className="error_message">{error}</article>
      ) : (
        <article className="input_message">{message}</article>
      )}
    </>
  );
};

export default ErrorMessage;
