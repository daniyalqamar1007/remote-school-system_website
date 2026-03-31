import { useTranslation } from "react-i18next";
import { Typography } from "antd";

const ClientLogo = ({ name, logo }) => (
  <div className="bg-white rounded-lg p-2 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
    <div className="w-44 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <img src={logo} alt={name} className="w-full h-full object-contain" />
    </div>
  </div>
);

const OurClientsSection = () => {
  const { t } = useTranslation();
  const schoolLogos = [];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Typography className="md:text-5xl text-4xl font-bold text-dark-5 mb-3">
            {t("ourClients.title")}
          </Typography>
          <p className="text-sm sm:text-base text-dark-2 max-w-2xl mx-auto leading-relaxed">
            {t("ourClients.subtitle")}
          </p>
        </div>
        {schoolLogos.length > 0 && (
          <div className="space-y-6 my-12">
            {schoolLogos.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
              >
                {row.map((client, clientIndex) => (
                  <ClientLogo
                    key={clientIndex}
                    logo={client.logo}
                    name={client.name}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurClientsSection;
