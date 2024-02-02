import React, { useState } from 'react';
import './Item.css'



function ProductForm() {
const formData = new FormData();

const handleInputChange = (e) => {
    const { name, value } = e.target;
    formData.set(name, value);
};

const handleFileChange = (e) => {
    const file = e.target.files[0];
    formData.set('image', file);
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
};

return (
    <div className='main-content'>
        <div className='left'></div>
        <div className='inside-box'>
            <h1>Selling Item</h1>
            <table className='form'>
                <tbody>
                    <tr>
                        <td>Title:</td>
                        <td>
                            <input type="text" name="title" onChange={handleInputChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Subheader:</td>
                        <td>
                            <input type="text" name="subheader" onChange={handleInputChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image:</td>
                        <td>
                            <input type="file" name="image" onChange={handleFileChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>
                            <textarea name="description" onChange={handleInputChange} style={{ resize: 'none' }} />
                        </td>
                    </tr>
                    <tr>
                        <td>Cost:</td>
                        <td>
                            <input type="number" name="cost" onChange={handleInputChange} />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="submit" onClick={handleSubmit}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default function MyProductPage() {
  return (
    <div>
      <ProductForm />
    </div>
  );
}