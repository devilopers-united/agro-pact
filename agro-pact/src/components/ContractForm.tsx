"use client";
import { useState } from "react";

const ContractForm = () => {
  const [formData, setFormData] = useState({
    walletAddress: "",
    cropType: "",
    quantity: "",
    deadline: "",
    pricePerKg: "",
    phoneNumber: "", // Ensure this field is included
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert quantity and pricePerKg to numbers
    const dataToSend = {
      ...formData,
      quantity: parseInt(formData.quantity, 10),
      pricePerKg: parseFloat(formData.pricePerKg),
    };

    const response = await fetch("/api/contracts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Contract created successfully:", result);
    } else {
      const errorResult = await response.json();
      console.error("Failed to create contract:", errorResult);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="walletAddress"
        value={formData.walletAddress}
        onChange={handleChange}
        placeholder="Wallet Address"
        required
      />
      <input
        type="text"
        name="cropType"
        value={formData.cropType}
        onChange={handleChange}
        placeholder="Crop Type"
        required
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        required
      />
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        step="0.01"
        name="pricePerKg"
        value={formData.pricePerKg}
        onChange={handleChange}
        placeholder="Price per Kg"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Create Contract</button>
    </form>
  );
};

export default ContractForm;
