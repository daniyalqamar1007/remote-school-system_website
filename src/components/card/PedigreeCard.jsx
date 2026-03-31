import React from "react";
import { useNavigate } from "react-router-dom";
import { image } from "../../assets/image";

const PedigreeCard = ({ id, name, age, gender, code, pedigreeImage }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/pedigree/" + id)}
      className="bg-lightPrimary rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="w-14 h-14 border border-primary/30 bg-white rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={pedigreeImage || image.placeholder}
          alt="pedigree"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-18 font-bold text-black mb-0.5">{name}</h3>
        <p className="text-14 font-semi text-primary mb-1">
          {age} ({gender})
        </p>
        <p className="text-12 text-gray">{code}</p>
      </div>
    </div>
  );
};

export default PedigreeCard;
