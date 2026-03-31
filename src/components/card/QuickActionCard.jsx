import { Typography } from "antd";

const QuickActionCard = ({ icon: Icon, title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-rosePrimary border-2 border-primary/20 rounded-2xl p-5 hover:border-primary transition-colors cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div>
          <Icon className="text-32 text-primary" />
          <Typography className="text-20 font-semi text-primary my-2 font-sans">
            {title}
          </Typography>
          <p className="text-18 text-gray leading-6 font-sans">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActionCard;
