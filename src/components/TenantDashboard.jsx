import React, { useEffect, useState } from "react";
import axios from "axios";

const TenantDashboard = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/properties");
        setProperties(res.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleSendRequest = async (propertyId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `http://localhost:5000/api/requests`,
        { propertyId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Request sent successfully!");
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
      <div className="grid grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property._id} className="border p-4 rounded shadow">
            <img src={`http://localhost:5000/${property.image}`} alt={property.name} className="w-full h-40 object-cover" />
            <h3 className="text-lg font-bold mt-2">{property.name}</h3>
            <p>Location: {property.location}</p>
            <p>Price: ${property.price}</p>
            <button
              onClick={() => handleSendRequest(property._id)}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
              Send Request
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantDashboard;
