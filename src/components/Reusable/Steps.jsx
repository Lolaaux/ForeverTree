function Steps({ step, fillColor }) {
  return (
    <div className="flex flex-row">
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 md:w-25"
      >
        <circle cx="50" cy="50" r="25" fill={fillColor} />
        <text
          x="50"
          y="58"
          fill="white"
          textAnchor="middle"
          fontSize="25px"
          fontWeight="600"
        >
          0{step}
        </text>
      </svg>
    </div>
  );
}

export default Steps;
