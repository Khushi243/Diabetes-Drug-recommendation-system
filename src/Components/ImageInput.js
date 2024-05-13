import React from 'react';

const ImageInput = ({ type, placeholder, icon, onChange }) => (
  <div style={{ display: 'flex', alignItems: 'center' ,justifyContent:'center' }}>
    <img src={icon} alt="" style={{ width: 30, height: 30, marginRight: 10, marginBottom: 10}} />
    <input type={type} onChange={onChange} placeholder={placeholder} />
  </div>
);

export default ImageInput;
