const ClothingCard = ({ clothing }) => {
  const unit = localStorage.getItem("unit") || "metric";
  const unitSymbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="clothing-card">
      <h4>{clothing.name}</h4>
      <p>
        Suitable for temperatures between {clothing.minTemp}{unitSymbol} and{" "}
        {clothing.maxTemp}{unitSymbol}.
      </p>
    </div>
  );
};

export default ClothingCard;
