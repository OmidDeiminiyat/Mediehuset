import React, { useState } from 'react';
import axios from 'axios';
import style from './BiletUserForm.module.scss';
import { CiAt } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { Modal } from '../modal/Modal';


export const UserTicketForm = ({ isVisible }) => {
  const storedItems = JSON.parse(localStorage.getItem('items')) || []; 
  const numericItems = storedItems.map(item => Number(item)); 
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    zipcode: '',
    city: '',
    ticket_id: storedItems,
    camp_id: '',
    quantity: 1,
    type: 'Print',
  });


  


  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email address';
    if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (formData.zipcode <= 0) newErrors.zipcode = 'Zipcode must be a positive number';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.ticket_id.trim()) newErrors.ticket_id = 'Ticket ID is required';
    if (!formData.camp_id.trim()) newErrors.camp_id = 'Camp ID is required';
    if (formData.quantity <= 0) newErrors.quantity = 'Quantity must be a positive number';
    if (!['print', 'paper'].includes(formData.type))
      newErrors.type = 'Type must be either "print" or "paper"';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      console.log('validate');
      
      const urlencoded = new URLSearchParams();
      urlencoded.append("email", formData.email);
      urlencoded.append("password", formData.password);
      urlencoded.append("name", formData.name);
      urlencoded.append("address", formData.address);
      urlencoded.append("zipcode", formData.zipcode);
      urlencoded.append("city", formData.city);
      urlencoded.append("ticket_id", formData.ticket_id);
      urlencoded.append("camp_id", formData.camp_id);
      urlencoded.append("quantity", formData.quantity);
      urlencoded.append("type", formData.type);

      const requestOptions = {
        method: 'POST',
        body: urlencoded,
        redirect: 'follow'
      };

      fetch("https://api.mediehuset.net/mediesuset/usertickets", requestOptions)
        .then(response => response.text())
        .then(result => console.log('Form submitted successfully:', result))
        .catch(error => console.error('Error submitting form:', error));

  };

  return (
    <>
    <form id='Ufrom' style={{ display: isVisible ? "grid" : "none" }} className={style.userForm} onSubmit={handleSubmit}>
        <section>
            <label for="pet-select">Vælg Camp:</label>
                <select id="pet-select" name="camp_id" value={formData.camp_id} onChange={handleChange}>
                <option value="">--Vælg Camp--</option>
                <option value="Camp Colorit">Camp Colorit</option>
                <option value="Camp Kultunaut">Camp Kultunaut</option>
                <option value="Camp De Luxe">Camp De Luxe</option>
            </select>
            <div>
            <label>Email:</label>
              <div className={style.inputContainer}>
               <span>< CiAt /></span>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            </div>

            <div>
                <label>Adgangscode:</label>
                <div className={style.inputContainer}>
                  <span>< CiAt /></span>
                    <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>
            </div>
            
            <div>
                <label>Navn:</label>
                <div className={style.inputContainer}>
                  <span>< CiAt /></span>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                </div>
            </div>

            <div>
                <label>Addresse:</label>
                <div className={style.inputContainer}>
               <span>< CiAt /></span>
                    <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    />
                    {errors.address && <p style={{ color: 'red' }}>{errors.address}</p>}
                </div>
            </div>

            <div>
                <label>Postnummer:</label>
                <div className={style.inputContainer}>
               <span>< CiAt /></span>
                    <input
                    type="number"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                    />
                    {errors.zipcode && <p style={{ color: 'red' }}>{errors.zipcode}</p>}
                </div>
            </div>

            <div>
                <label>By:</label>
                <div className={style.inputContainer}>
               <span>< CiAt /></span>
                    <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    />
                    {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
                </div>
            </div>

            <div>
                <label>Ticket ID:</label>
                <div className={style.inputContainer}>
               <span>< CiAt /></span>
                    <input
                    type="number"
                    name="ticket_id"
                    value={formData.ticket_id}
                    onChange={handleChange}
                    />
                    {errors.ticket_id && <p style={{ color: 'red' }}>{errors.ticket_id}</p>}
                </div>
            </div>
            <div>
                <label>Quantity:</label>
                <div className={style.inputContainer}>
                  <span>< CiAt /></span>
                    <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    />
                    {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity}</p>}
                </div>
            </div>
        </section>
        <section>
            <fieldset>
             <legend>Vælg forsendelsesmetode:</legend>
                <div>
                    <input type="radio" id="huey" name="type"  value={formData.type} onChange={handleChange}/>
                    <label for="tilsendt">Jeg ønsker billetterne tilsendt</label>
                </div>
                <div>
                    <input type="radio" id="dewey" name="type" value={formData.type} onChange={handleChange} />
                    <label for="selv">Jeg udskriver billetterne selv</label>
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </section>
    </form>
    </>
  );
};

