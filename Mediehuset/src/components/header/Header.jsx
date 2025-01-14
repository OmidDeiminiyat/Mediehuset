import React, { useState, useEffect } from 'react';
import { Login } from '../../pages/Login';

export const Header = () => {

    const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.mediehuset.net/mediesuset/images');
        const data = await response.json();
        setImages(data.items || []); 
        setLoading(false);
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

    return (
        <>
        <div>
            <img src={images[0].image} alt="" />
        </div>
        
        </>
    )
}