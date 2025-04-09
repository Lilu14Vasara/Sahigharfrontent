import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userType, setUserType] = useState(""); // Role Selection
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("🟡 Login Request Started");
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
        role: userType, 
      });
  
      console.log("Login Response:", res.data); 
  
      const { token, role } = res.data;
  
      if (!role) {
        console.error("🚨 Role not found in response!");
        return;
      }
  
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);  
  
      console.log("🔹 Stored Role in localStorage:", role); // Debugging log
  
      if (role === "landlord") navigate("/landlord/dashboard");
      else if (role === "tenant") navigate("/tenant/dashboard");
      else if (role === "maintenance") navigate("/maintenance/dashboard");
  
    } catch (err) {
      console.error("❌ Login error:", err.response?.data);
      setError(err.response?.data?.message || "Login failed");
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Login to SahiGhar</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-600">Select User Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            >
              <option value="">-- Select User Type --</option>
              <option value="tenant">Tenant</option>
              <option value="landlord">Landlord</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600"
            disabled={!userType}
          >
            Login as {userType ? userType.charAt(0).toUpperCase() + userType.slice(1) : "..."}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to="/Signup" className="text-yellow-500">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
