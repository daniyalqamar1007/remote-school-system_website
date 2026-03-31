import { image } from "../../assets/image";

const AuthRightPanel = () => {
  return (
    <div className="w-full md:w-1/2 h-screen bg-town-gradient  md:flex items-center justify-center hidden overflow-hidden">
          <img className="w-1/2 mx-auto" src={image.logo} alt="Patterdale Pedigree Logo" />
    </div>
  );
};

export default AuthRightPanel;
