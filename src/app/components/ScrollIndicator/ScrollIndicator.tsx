import './ScrollIndicator.css';
const ScrollIndicator: React.FC = () => {
  return (
    <div className="scroll-indicator">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 18 18"
        stroke="white"
        strokeWidth="1"
      >
        <path
          fillRule="evenodd"
          fill="black"
          d="M8 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM8 0a1 1 0 0 1 1 1v5.586l1.293-1.293a1 1 0 1 1 1.414 1.414L8 10.414 4.293 6.707a1 1 0 0 1 1.414-1.414L7 6.586V1a1 1 0 0 1 1-1Z"
        />
      </svg>
    </div>
  );
};

export default ScrollIndicator;
