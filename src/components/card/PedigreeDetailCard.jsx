import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { image } from "../../assets/image";

const PedigreeDetailCard = ({ pedigree }) => {
  const navigate = useNavigate();

  if (!pedigree) {
    return <p className="text-center text-gray-500">Pedigree not found</p>;
  }

  // Calculate age from dateOfBirth
  let age = "-";
  if (pedigree.dateOfBirth) {
    const birthDate = new Date(pedigree.dateOfBirth);
    const today = new Date();
    age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) age--;
  }

  // Format registration ID
  const registration = pedigree._id
    ? `PTPD-O-${pedigree._id.slice(-4).toUpperCase()}`
    : "-";

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Image + Name */}
      <div className="flex flex-col md:flex-row w-full justify-between gap-6">
        <div className="md:w-1/2 h-64 md:h-80 relative rounded-xl overflow-hidden">
          <img
            src={pedigree.photo || image.placeholder}
            alt={pedigree.name}
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-20 font-bold">{pedigree.name}</h2>
            <Typography className="text-14 font-medium text-white">
              {pedigree.color || "-"} ({pedigree.gender || "-"})
            </Typography>
          </div>
        </div>

        {/* Detailed Info */}
        <div className="md:w-1/2 flex flex-col justify-between w-full border border-silverGray p-4 rounded-xl">
          <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-black w-full">
            <div>
              <Typography className="text-16 font-semibold">
                Registration #
              </Typography>
              <Typography className="text-14">{registration}</Typography>
            </div>
            <div>
              <Typography className="text-16 font-semibold">Breed</Typography>
              <Typography className="text-14">
                {pedigree.name || "N/A"}
              </Typography>
            </div>
            <div>
              <Typography className="text-16 font-semibold">Gender</Typography>
              <Typography className="text-14">
                {pedigree.gender || "-"}
              </Typography>
            </div>
            <div>
              <Typography className="text-16 font-semibold">
                Coat Color
              </Typography>
              <Typography className="text-14">
                {pedigree.color || "-"}
              </Typography>
            </div>
            <div>
              <Typography className="text-16 font-semibold">
                Birthdate
              </Typography>
              <Typography className="text-14">
                {pedigree.dateOfBirth
                  ? new Date(pedigree.dateOfBirth).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "-"}{" "}
                ({age} yrs)
              </Typography>
            </div>
            <div>
              <Typography className="text-16 font-semibold">Breeder</Typography>
              <Typography className="text-14">
                {pedigree.breederName || "-"}
              </Typography>
            </div>
            <div>
              <Typography className="text-16 font-semibold">Father</Typography>
              <Typography className="text-14">
                {pedigree.fatherName || "-"}
              </Typography>
            </div>
            <div>
              <Typography className="text-16 font-semibold">Mother</Typography>
              <Typography className="text-14">
                {pedigree.motherName || "-"}
              </Typography>
            </div>
            <div className="col-span-2">
              <Typography className="text-16 font-semibold">
                Grandparents
              </Typography>
              <Typography className="text-14">
                Father's Side: {pedigree.father_grandfather || "-"} /{" "}
                {pedigree.father_grandmother || "-"} <br />
                Mother's Side: {pedigree.mother_grandfather || "-"} /{" "}
                {pedigree.mother_grandmother || "-"}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <Button
        onClick={() => navigate("/view-pedigrees/" + pedigree._id)}
        className="mt-6 w-full md:w-1/2 bg-town-gradient text-white font-semibold py-2 h-12 rounded-full hover:bg-red-700 transition"
      >
        View Pedigree
      </Button>
    </div>
  );
};

export default PedigreeDetailCard;
