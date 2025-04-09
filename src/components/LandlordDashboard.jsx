import React, { useEffect, useState } from "react";
import axios from "axios";

const LandlordDashboard = () => {
  const [status, setStatus] = useState("available");
  const [landlord, setLandlord] = useState(null);
  const [properties, setProperties] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [newProperty, setNewProperty] = useState({
    name: "",
    location: "",
    price: "",
    status: "",
    image: "",
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/landlord/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setLandlord(res.data.landlord);
        setProperties(
          Array.isArray(res.data.properties) ? res.data.properties : []
        );
      } catch (error) {
        console.error("Error fetching dashboard:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);
  const handleEditClick = (property) => {
    setCurrentProperty(property);
    setEditModalOpen(true);
  };

  const handleUpdateProperty = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:5000/api/properties/${currentProperty._id}`,
        currentProperty,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditModalOpen(false);
      fetchProperties();
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleDelete = async (propertyId) => {
    try {
      await axios.delete(`http://localhost:5000/api/properties/${propertyId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProperties(
        properties.filter((property) => property._id !== propertyId)
      );
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty({ ...newProperty, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("name", newProperty.name);
    formData.append("location", newProperty.location);
    formData.append("price", newProperty.price);
    formData.append("status", newProperty.status);

    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:5000/api/properties", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Property added successfully!");
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/properties", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Fetched Properties from API:", res.data); //  Debugging
      setProperties(res.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:5000/api/properties",
        newProperty,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProperties([...properties, res.data]);
      setNewProperty({
        name: "",
        location: "",
        price: "",
        status: "",
        image: "",
      });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding property:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Landlord Dashboard</h2>
      {loading ? (
        <p>Loading...</p>
      ) : landlord ? (
        <div>
          <p>Welcome, {landlord.name}</p>
          <p>Email: {landlord.email}</p>

          <button
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Add New Property"}
          </button>

          {showForm && (
            <form
              onSubmit={handleAddProperty}
              className="mt-4 p-4 border rounded shadow"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newProperty.name}
                onChange={handleInputChange}
                className="border p-2 w-full mb-2"
                required
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                value={newProperty.location}
                onChange={handleInputChange}
                className="border p-2 w-full mb-2"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={newProperty.price}
                onChange={(e) =>
                  setNewProperty({ ...newProperty, price: e.target.value })
                }
                className="border p-2 w-full mb-2"
                required
              />
              <select
                name="status"
                value={newProperty.status}
                onChange={handleInputChange}
                className="border p-2 rounded w-full mb-2"
              >
                <option value="">--Select status--</option>
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
              </select>

              <input
                type="file"
                name="image"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="border p-2 w-full mb-2"
                required
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Property
              </button>
            </form>
          )}

          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Image</th>
                <th className="border p-2">Name</th>
                <th className="border p-2">Location</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.length > 0 ? (
                properties.map((property) => (
                  <tr key={property._id} className="border">
                    <td className="border p-2">
                      <img
                        src={`http://localhost:5000/${property.image}`}
                        alt={property.name}
                        className="w-32 h-32 object-cover"
                      />
                    </td>

                    <td className="border p-2">{property.name}</td>
                    <td className="border p-2">{property.location}</td>
                    <td className="border p-2">${property.price}</td>
                    <td className="border p-2">{property.status}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => handleEditClick(property)}
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(property._id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center p-4">
                    No properties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {editModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Property</h2>
            <input
              type="text"
              value={currentProperty.name}
              onChange={(e) => setCurrentProperty({ ...currentProperty, name: e.target.value })}
              className="block w-full border p-2 mb-2"
              placeholder="Property Name"
            />
            <input
              type="text"
              value={currentProperty.location}
              onChange={(e) => setCurrentProperty({ ...currentProperty, location: e.target.value })}
              className="block w-full border p-2 mb-2"
              placeholder="Location"
            />
            <input
              type="number"
              value={currentProperty.price}
              onChange={(e) => setCurrentProperty({ ...currentProperty, price: e.target.value })}
              className="block w-full border p-2 mb-2"
              placeholder="Price"
            />
            <select
              value={currentProperty.status}
              onChange={(e) => setCurrentProperty({ ...currentProperty, status: e.target.value })}
              className="block w-full border p-2 mb-4"
            >
              <option value="available">Available</option>
              <option value="rented">Rented</option>
            </select>
            <button onClick={handleUpdateProperty} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
              Update
            </button>
            <button onClick={() => setEditModalOpen(false)} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      )}
        </div>
      ) : (
        <p>Error loading dashboard.</p>
      )}
    </div>
  );
};

export default LandlordDashboard;
