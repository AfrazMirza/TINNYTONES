// PaymentPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
  const navigate = useNavigate();
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    netBankingId: '',
  });

  const handlePayment = () => {
    alert(`Payment Successful with ${selectedMethod}`);
    navigate('/'); // Redirect back to home or order confirmation page
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-8 border border-gray-300">
      <h1 className="text-2xl font-medium mb-4">Choose a Payment Method</h1>

      {!selectedMethod ? (
        <>
          <button
            onClick={() => setSelectedMethod('Credit Card')}
            className="w-full bg-blue-500 text-white py-2 my-2 rounded"
          >
            Pay with Debit and Credit Card
          </button>
          {/* <button
            onClick={() => setSelectedMethod('Debit Card')}
            className="w-full bg-green-500 text-white py-2 my-2 rounded"
          >
            Pay with Debit Card
          </button> */}
          <button
            onClick={() => setSelectedMethod('UPI')}
            className="w-full bg-yellow-500 text-black py-2 my-2 rounded"
          >
            Pay with UPI
          </button>
          <button
            onClick={() => setSelectedMethod('Net Banking')}
            className="w-full bg-purple-500 text-white py-2 my-2 rounded"
          >
            Pay with Net Banking
          </button>
          <button
            onClick={() => setSelectedMethod('Cash on Delivery')}
            className="w-full bg-gray-700 text-white py-2 my-2 rounded"
          >
            Cash on Delivery
          </button>
        </>
      ) : (
        <>
          {selectedMethod === 'Credit Card' || selectedMethod === 'Debit Card' ? (
            <div>
              <h2 className="text-xl font-semibold mt-4 mb-2">Enter {selectedMethod} Details</h2>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="Card Number"
                className="w-full p-2 mb-2 border border-gray-400 rounded"
              />
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="Expiry Date (MM/YY)"
                className="w-full p-2 mb-2 border border-gray-400 rounded"
              />
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="CVV"
                className="w-full p-2 mb-2 border border-gray-400 rounded"
              />
            </div>
          ) : null}

          {selectedMethod === 'UPI' && (
            <div>
              <h2 className="text-xl font-semibold mt-4 mb-2">Enter UPI ID</h2>
              <input
                type="text"
                name="upiId"
                value={formData.upiId}
                onChange={handleInputChange}
                placeholder="UPI ID"
                className="w-full p-2 mb-2 border border-gray-400 rounded"
              />
            </div>
          )}

          {selectedMethod === 'Net Banking' && (
            <div>
              <h2 className="text-xl font-semibold mt-4 mb-2">Enter Net Banking ID</h2>
              <input
                type="text"
                name="netBankingId"
                value={formData.netBankingId}
                onChange={handleInputChange}
                placeholder="Net Banking ID"
                className="w-full p-2 mb-2 border border-gray-400 rounded"
              />
            </div>
          )}

          {selectedMethod === 'Cash on Delivery' && (
            <div>
              <h2 className="text-xl font-semibold mt-4 mb-2">Cash on Delivery Selected</h2>
              <p className="text-gray-600">You will pay at the time of delivery.</p>
            </div>
          )}

          <button
            onClick={handlePayment}
            className="w-full bg-green-600 text-white py-2 mt-4 rounded"
          >
            Confirm Payment
          </button>
          <button
            onClick={() => setSelectedMethod(null)}
            className="w-full bg-gray-500 text-white py-2 mt-2 rounded"
          >
            Go Back
          </button>
        </>
      )}
    </div>
  );
}

export default PaymentPage;
