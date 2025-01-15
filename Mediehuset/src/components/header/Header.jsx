import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
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
        <div className={styles.head}>
        {loading === true ? (
        <p>Loading ....!</p>
      ) : (
        <img src={images[7].image} alt="" />
      )}   
        </div>
        
        </>
    )
}