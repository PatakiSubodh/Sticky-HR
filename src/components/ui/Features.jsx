import feature1 from '../../assets/images/features-img/feature1.gif';
import feature2 from '../../assets/images/features-img/feature2.gif';
import feature3 from '../../assets/images/features-img/feature3.gif';
import feature4 from '../../assets/images/features-img/feature4.gif';
import feature5 from '../../assets/images/features-img/feature5.gif';
import feature6 from '../../assets/images/features-img/feature6.gif';
import feature7 from '../../assets/images/features-img/feature7.gif';
import feature8 from '../../assets/images/features-img/feature8.gif';
import FadeInUp from '../FadeInUp';

const ProductFeatures = () => {
  const features = [
    { image: feature1, title: "Employees", bg: "bg-[#F3F9FF]", circle: "bg-[#CCE7FF]", borderRadius: "border-2 border-[#CCE7FF]" },
    { image: feature2, title: "Leave", bg: "bg-[#FEF6EC]", circle: "bg-[#FEEAD0]", borderRadius: "border-2 border-[#FEEAD0]" },
    { image: feature3, title: "Reimbursement", bg: "bg-[#FCEEEF]", circle: "bg-[#FFD7DA]", borderRadius: "border-2 border-[#FFD7DA]" },
    { image: feature4, title: "Compensation", bg: "bg-[#EEF9F2]", circle: "bg-[#C4F8D6]", borderRadius: "border-2 border-[#C4F8D6]" },
    { image: feature5, title: "User Management", bg: "bg-[#FCEEEF]", circle: "bg-[#FFD7DA]", borderRadius: "border-2 border-[#FFD7DA]" },
    { image: feature6, title: "Document Management", bg: "bg-[#EEF9F2]", circle: "bg-[#C4F8D6]", borderRadius: "border-2 border-[#C4F8D6]" },
    { image: feature7, title: "Expense Management", bg: "bg-[#F3F9FF]", circle: "bg-[#CCE7FF]", borderRadius: "border-2 border-[#CCE7FF]" },
    { image: feature8, title: "Payroll Management", bg: "bg-[#FEF6EC]", circle: "bg-[#FEEAD0]", borderRadius: "border-2 border-[#FEEAD0]" },
  ];

  return (
    <div className="text-center py-8 sm:py-12 lg:py-16">
      {/* Section Title */}
      <FadeInUp delay={0.1}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 lg:mb-12">
          Our Product Features
        </h2>
      </FadeInUp>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-8 lg:px-16">
        {features.map((feature, index) => (
          <FadeInUp key={index} delay={0.15 * (index + 1)} duration={0.7}>
            <div
              className={`p-4 sm:p-6 lg:p-8 rounded-2xl shadow-md ${feature.bg} ${feature.borderRadius} sm:flex sm:items-center sm:justify-center sm:flex-col grid grid-cols-2 place-items-center transition-all duration-300 hover:shadow-xl hover:scale-105 min-h-[100px] sm:min-h-[180px] lg:min-h-[220px]`}
            >
              {/* Circle Image */}
              <div className={`w-12 sm:w-20 h-12 sm:h-20 flex items-center justify-center rounded-full ${feature.circle} sm:mb-4`}>
                <img src={feature.image} alt={feature.title} className="w-8 sm:w-14 h-8 sm:h-14 object-contain" />
              </div>

              {/* Feature Title */}
              <p className="text-xs sm:text-base lg:text-lg font-medium text-gray-700">{feature.title}</p>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;