import React from "react";

const Contact = ({ contact, onClose }) => {
  if (!contact) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h2 className="text-xl font-bold mb-3 text-center">Owner Details</h2>
        <img
          src={contact.imageUrl}
          alt="item"
          className="w-full h-32 object-cover rounded-lg mb-3"
        />
        <p>
          <b>Name:</b> {contact.owner?.name}
        </p>
        <p>
          <b>Email:</b> {contact.owner?.email}
        </p>
        <p>
          <b>Phone:</b> {contact.owner?.phone}
        </p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Contact;
