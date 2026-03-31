const GenderButtons = ({ value, onChange }) => {
  return (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => onChange("Male")}
        className={`flex-1 py-3 rounded-full font-medium text-14 transition-all ${
          value === "Male"
            ? "bg-primary text-white"
            : "bg-white border border-silverGray text-gray-700"
        }`}
      >
        ♂ Male
      </button>

      <button
        type="button"
        onClick={() => onChange("Female")}
        className={`flex-1 py-3 rounded-full font-medium text-14 transition-all ${
          value === "Female"
            ? "bg-primary text-white"
            : "bg-white border border-silverGray text-gray-700"
        }`}
      >
        ♀ Female
      </button>
    </div>
  );
};

export default GenderButtons;