import { useHospitals } from "../context/HospitalContext";

export default function Hospitals() {
  const { hospitals, updateHospital } = useHospitals();

  const useEmergencyBed = (hospitalId: string) => {
    const hospital = hospitals.find((h) => h.id === hospitalId);

    if (!hospital) return;

    if (hospital.emergencyBeds <= 0 || hospital.availableBeds <= 0) {
      alert("No emergency beds are available.");
      return;
    }

    updateHospital({
      ...hospital,
      availableBeds: hospital.availableBeds - 1,
      emergencyBeds: hospital.emergencyBeds - 1,
      status:
        hospital.availableBeds - 1 === 0
          ? "Full"
          : "Available",
    });
  };

  const releaseEmergencyBed = (hospitalId: string) => {
    const hospital = hospitals.find((h) => h.id === hospitalId);

    if (!hospital) return;

    if (hospital.availableBeds >= hospital.totalBeds) {
      alert("All beds are already available.");
      return;
    }

    updateHospital({
      ...hospital,
      availableBeds: hospital.availableBeds + 1,
      emergencyBeds: hospital.emergencyBeds + 1,
      status: "Available",
    });
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            Hospital Management
          </h1>

          <p className="text-slate-500 mt-2">
            Monitor hospitals, bed availability and emergency capacity.
          </p>
        </div>
      </div>

      {/* Hospital Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {hospitals.map((hospital) => {
          const bedPercentage =
            hospital.totalBeds > 0
              ? (hospital.availableBeds / hospital.totalBeds) * 100
              : 0;

          return (
            <div
              key={hospital.id}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              {/* Hospital Header */}
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-slate-800">
                  {hospital.name}
                </h2>

                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    hospital.status === "Full"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {hospital.status}
                </span>
              </div>

              {/* Location */}
              <p className="text-slate-500 mt-4">
                📍 {hospital.location}
              </p>

              {/* Bed Information */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span>Total Beds</span>
                  <strong>{hospital.totalBeds}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Available Beds</span>
                  <strong className="text-green-600">
                    {hospital.availableBeds}
                  </strong>
                </div>

                <div className="flex justify-between">
                  <span>Emergency Beds</span>
                  <strong className="text-red-600">
                    {hospital.emergencyBeds}
                  </strong>
                </div>
              </div>

              {/* Bed Availability Bar */}
              <div className="mt-5">
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${bedPercentage}%`,
                    }}
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => useEmergencyBed(hospital.id)}
                  disabled={hospital.emergencyBeds === 0}
                  className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  Use Bed
                </button>

                <button
                  onClick={() => releaseEmergencyBed(hospital.id)}
                  disabled={
                    hospital.availableBeds >= hospital.totalBeds
                  }
                  className="flex-1 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
                >
                  Release
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}