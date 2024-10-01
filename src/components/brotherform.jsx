import { useState } from 'react';
import { createMember } from '../services/members';

const BrotherForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    email: '',
    phone: '',
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMember(formData.class, formData.name, formData.email, formData.phone)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" required />
      <input name="class" value={formData.class} onChange={handleInputChange} placeholder="Class" required />
      <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
      <input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone #" />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <button type="submit">Add Brother</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default BrotherForm;
