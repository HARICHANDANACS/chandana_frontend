import { FaBuilding, FaMapMarkerAlt } from 'react-icons/fa'; // for clinic and location icons

function DoctorCard({ doctor }) {
  // Ensure doctor.specialties is an array, defaulting to an empty array if undefined
  const specialties = Array.isArray(doctor.specialities) ? doctor.specialities.map(spec => spec.name) : [];
  const [specialty, degree] = specialties; // Assuming first specialty for simplicity

  // Extract years from experience (assuming it follows the format "XX Years of experience")
  const experienceYears = doctor.experience.split(" ")[0]; // Extract the number before "Years"

  return (
    <div className="card mb-3" data-testid="doctor-card">
      <div className="card-body d-flex">
        {/* Left side: Doctor's Info */}
        <div className="d-flex align-items-center">
          <img 
            src={doctor.photo} 
            alt={doctor.name} 
            className="doctor-photo" 
            style={{ width: '60px', height: '60px', borderRadius: '50%' }}
          />
          <div className="ms-3">
            <h5 className="fw-bold" data-testid="doctor-name">{doctor.name}</h5>
            <p data-testid="doctor-specialty" className="mb-1">{specialty}</p>
            <p data-testid="doctor-degree" className="mb-1">
  {doctor.doctor_introduction.split(",")[1]?.trim()}
</p>

            <p data-testid="doctor-experience">{experienceYears} Years Exp.</p> {/* Display years only */}
          </div>
        </div>

        {/* Right side: Fee and Button */}
        <div className="d-flex flex-column align-items-end" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>

          <div className="d-flex align-items-center mb-2">
            <p data-testid="doctor-fee" className="fw-bold mb-0">{doctor.fees}</p>
          </div>

          <button 
            className="btn btn-outline-primary ms-3"
            style={{ minWidth: '150px' }}
            data-testid="book-appointment-btn"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Clinic and Location Info (Left side) */}
      <div className="d-flex flex-column ms-3">
        <div className="d-flex align-items-center mb-1">
          <FaBuilding className="me-2" />
          <p className="mb-0">{doctor.clinic.name}</p>
        </div>
        <div className="d-flex align-items-center mb-1">
          <FaMapMarkerAlt className="me-2" />
          <p className="mb-0">{doctor.clinic.address.locality}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
