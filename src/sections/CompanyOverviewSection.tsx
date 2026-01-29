import overviewImage from "../assets/images/About HydroNest.png";

const CompanyOverviewSection = () => {
  return (
    <section className="w-auto h-auto">
      <img
        src={overviewImage}
        alt="HydroNest Overview"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default CompanyOverviewSection;
