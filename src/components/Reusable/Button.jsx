function Button({ children, weight, handleClick, color, hoverColor }) {
  return (
    <button
      onClick={handleClick}
      style={{
        fontWeight: weight,
        backgroundColor: color,
        borderRadius: "8px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = color;
      }}
    >
      <div className="flex items-center justify-center w-fit p-3 text-[white] font-[500] text-[18px]">
        {children}
      </div>
    </button>
  );
}

export default Button;
