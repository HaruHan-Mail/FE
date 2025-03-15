import '../css/SubmitButton.css';

const SubscriptionButton = ({ onClick, text, size = "medium" }) => {
  return (
    <button
      onClick={onClick}
      className={`subscription-button ${size.toLowerCase()}`}
    >
      {text}
    </button>
  );
};

export default SubscriptionButton;
