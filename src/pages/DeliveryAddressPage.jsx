// DeliveryAddressPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DeliveryAddressPage() {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    name: '',
    addressLine: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleConfirmAddress = () => {
    // Confirm the address and navigate to the Payment page
    navigate('/payment');
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 border border-gray-300">
      <h1 className="text-2xl font-medium mb-4">Delivery Address</h1>
      <input
        type="text"
        name="name"
        value={address.name}
        onChange={handleInputChange}
        placeholder="Full Name"
        className="w-full p-2 mb-2 border border-gray-400 rounded"
      />
      <input
        type="text"
        name="addressLine"
        value={address.addressLine}
        onChange={handleInputChange}
        placeholder="Address Line"
        className="w-full p-2 mb-2 border border-gray-400 rounded"
      />
      <input
        type="text"
        name="city"
        value={address.city}
        onChange={handleInputChange}
        placeholder="City"
        className="w-full p-2 mb-2 border border-gray-400 rounded"
      />
      <input
        type="text"
        name="postalCode"
        value={address.postalCode}
        onChange={handleInputChange}
        placeholder="Postal Code"
        className="w-full p-2 mb-2 border border-gray-400 rounded"
      />
      <input
        type="text"
        name="phoneNumber"
        value={address.phoneNumber}
        onChange={handleInputChange}
        placeholder="Phone Number"
        className="w-full p-2 mb-2 border border-gray-400 rounded"
      />

      <button
        onClick={handleConfirmAddress}
        className="w-full bg-green-600 text-white py-2 mt-4 rounded"
      >
        Confirm Address
      </button>
      <button
        onClick={() => navigate(-1)} // Go back to Cart for editing
        className="w-full bg-gray-500 text-white py-2 mt-2 rounded"
      >
        Edit Address
      </button>
    </div>
  );
}

export default DeliveryAddressPage;
