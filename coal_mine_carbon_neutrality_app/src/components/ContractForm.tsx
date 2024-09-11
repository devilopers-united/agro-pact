"use client";

const ContractForm = () => {
  return (
    <form className="space-y-4 p-4 bg-white-100 rounded-lg">
      <div>
        <label
          htmlFor="cropType"
          className="block text-sm font-medium text-gray-700"
        >
          Crop Type
        </label>
        <input
          type="text"
          id="cropType"
          name="cropType"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700"
        >
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="pricePerUnit"
          className="block text-sm font-medium text-gray-700"
        >
          Price per Unit
        </label>
        <input
          type="number"
          id="pricePerUnit"
          name="pricePerUnit"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="deliveryDeadline"
          className="block text-sm font-medium text-gray-700"
        >
          Delivery Deadline
        </label>
        <input
          type="date"
          id="deliveryDeadline"
          name="deliveryDeadline"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div>
        <label
          htmlFor="paymentTerms"
          className="block text-sm font-medium text-gray-700"
        >
          Payment Terms
        </label>
        <input
          type="text"
          id="paymentTerms"
          name="paymentTerms"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Create Contract
      </button>
    </form>
  );
};

export default ContractForm;
