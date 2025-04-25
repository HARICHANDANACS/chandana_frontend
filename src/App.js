import { useEffect, useState } from "react";
import { API_URL } from "./constants";
import DoctorCard from "./components/DoctorCard";
import SearchBar from "./components/SearchBar";
import FilterPanel from "./components/FilterPanel";  // Filter Panel
import SortPanel from "./components/SortPanel";    // Sort Panel

function App() {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [sortOption, setSortOption] = useState("Price"); // Default sort by price
  const [consultationType, setConsultationType] = useState("All");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setFilteredDoctors(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = doctors.filter((doctor) =>
      doctor.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredDoctors(filtered);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleConsultationChange = (e) => {
    setConsultationType(e.target.value);
  };

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties((prev) =>
      prev.includes(specialty)
        ? prev.filter((spec) => spec !== specialty)
        : [...prev, specialty]
    );
  };

  const handleClearFilters = () => {
    setSelectedSpecialties([]);
    setConsultationType("All");
  };

  return (
    <div className="container mt-4">
      <style>
        {`
          /* Container for the left panel and right content */
          .container {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            margin-top: 20px; /* Add margin at the top to avoid overlap */
          }

          /* Left panel adjustments */
          .d-flex {
            flex: 0 0 300px; /* Left panel width */
            padding-right: 20px;
          }

          /* Right content area */
          .flex-grow-1 {
            flex-grow: 1;
            padding-left: 20px;
          }

          /* Adjust the search bar */
          input[type="text"] {
            width: 100%;
            margin-bottom: 10px; /* Add some space between search bar and next content */
          }

          /* Ensure proper spacing inside filter panel */
          .border {
            border-radius: 8px;
            padding: 15px;
            background-color: #f8f9fa;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          /* Space between filter panels */
          .mb-3 {
            margin-bottom: 1.5rem;
          }

          /* Add some padding to the buttons */
          button {
            padding: 10px 15px;
          }
        `}
      </style>

      <div className="d-flex">
        {/* Left Panel - Filter and Sort */}
        <div className="d-flex flex-column" style={{ width: '300px' }}>
          <SortPanel
            sortOption={sortOption}
            onSortOptionChange={handleSortOptionChange}
          />
          <FilterPanel
            consultationType={consultationType}
            onConsultationTypeChange={handleConsultationChange}
            specialties={selectedSpecialties}
            onSpecialtyChange={handleSpecialtyChange}
            onClearFilters={handleClearFilters}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
        </div>

        {/* Right Panel - Doctor List */}
        <div className="ms-4 flex-grow-1">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />

          {loading ? (
            <p>Loading doctors...</p>
          ) : (
            <>
              {filteredDoctors
                .filter(
                  (doctor) =>
                    (consultationType === "All" ||
                      doctor.consultationType === consultationType) &&
                    (selectedSpecialties.length === 0 ||
                      doctor.specialties.some((specialty) =>
                        selectedSpecialties.includes(specialty)
                      ))
                )
                .sort((a, b) => {
                  if (sortOption === "Price") {
                    return a.fees - b.fees;
                  } else if (sortOption === "Experience") {
                    return b.experience - a.experience;
                  }
                  return 0;
                })
                .map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
