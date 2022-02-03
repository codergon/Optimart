const Currency = ({ size = 20 }) => {
  return (
    <div
      className="currency_type"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <img src="https://svgshare.com/i/dxL.svg" alt="" />
    </div>
  );
};

export default Currency;
