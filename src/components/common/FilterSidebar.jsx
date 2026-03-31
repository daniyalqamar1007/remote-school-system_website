import { Select } from "antd";
import { IoClose } from "react-icons/io5";

// Filter Sidebar Component
const FilterSidebar = ({ isOpen, onClose, filters, setFilters, onApply }) => {
  const regions = ["North", "South", "East", "West", "Central"];
  const breeds = [
    "Golden Retriever",
    "Labrador",
    "German Shepherd",
    "Beagle",
    "Poodle",
  ];
  const genders = ["Male", "Female"];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <h2 className="text-32 font-bold text-black">Filters</h2>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center hover:bg-[#f2e9e7] rounded-full transition-colors"
            >
              <IoClose className="text-primary text-2xl" />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Region Filter */}
              <div>
                <label className="block text-[0.875rem] font-semibold text-[#151515] mb-2">
                  Region
                </label>
                <Select
                  placeholder="Select Region"
                  value={filters.region}
                  onChange={(value) =>
                    setFilters({ ...filters, region: value })
                  }
                  className="w-full"
                  size="large"
                  //   suffixIcon={<span className="text-[#7A1F12]">▼</span>}
                  options={regions.map((region) => ({
                    label: region,
                    value: region,
                  }))}
                />
              </div>

              {/* Breed Filter */}
              <div>
                <label className="block text-[0.875rem] font-semibold text-[#151515] mb-2">
                  Breed
                </label>
                <Select
                  placeholder="Select Breed"
                  value={filters.breed}
                  onChange={(value) => setFilters({ ...filters, breed: value })}
                  className="w-full"
                  size="large"
                  options={breeds.map((breed) => ({
                    label: breed,
                    value: breed,
                  }))}
                />
              </div>

              {/* Gender Filter */}
              <div>
                <label className="block text-[0.875rem] font-semibold text-[#151515] mb-2">
                  Gender
                </label>
                <Select
                  placeholder="Select Gender"
                  value={filters.gender}
                  onChange={(value) =>
                    setFilters({ ...filters, gender: value })
                  }
                  className="w-full"
                  size="large"
                  options={genders.map((gender) => ({
                    label: gender,
                    value: gender,
                  }))}
                />
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={onApply}
                className="w-full h-12 bg-town-gradient text-white text-[1rem] font-semibold rounded-full transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;