import React, { useState } from 'react';

function FilterPanel({
  consultationType,
  onConsultationTypeChange,
  specialties,
  onSpecialtyChange,
  onClearFilters,
  searchQuery,
  onSearchChange
}) {
  // Sample specialties, should ideally be fetched from the API
  const specialtiesList = [
    "Dentist",
    "Cardiologist",
    "Pediatrician",
    "Dermatologist",
    "Gynecologist",
    "Physiotherapist",
    "ENT",
    "Neurologist",
  ];

  return (
    <div className="border p-3 mb-3" style={{ borderRadius: '8px' }}>
      <h5>Filters</h5>

      {/* Specialities Section */}
      <div className="mb-3">
        <h6>Specialities</h6>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Search Specialities"
          value={searchQuery}
          onChange={onSearchChange}
        />
        {specialtiesList
          .filter((specialty) =>
            specialty.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((specialty) => (
            <div className="form-check" key={specialty}>
              <input
                type="checkbox"
                className="form-check-input"
                checked={specialties.includes(specialty)}
                onChange={() => onSpecialtyChange(specialty)}
              />
              <label className="form-check-label">
                {specialty}
              </label>
            </div>
          ))}
      </div>

      {/* Mode of Consultation Section */}
      <div className="mb-3">
        <h6>Mode of Consultation</h6>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="consultationType"
            value="Video"
            checked={consultationType === "Video"}
            onChange={onConsultationTypeChange}
          />
          <label className="form-check-label">
            Video Consultation
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="consultationType"
            value="In-clinic"
            checked={consultationType === "In-clinic"}
            onChange={onConsultationTypeChange}
          />
          <label className="form-check-label">
            In-clinic Consultation
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="consultationType"
            value="All"
            checked={consultationType === "All"}
            onChange={onConsultationTypeChange}
          />
          <label className="form-check-label">
            All
          </label>
        </div>
      </div>

      {/* Clear All Filters Button */}
      <button className="btn btn-outline-danger" onClick={onClearFilters}>
        Clear All
      </button>
    </div>
  );
}

export default FilterPanel;
