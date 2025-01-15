import React, { useState, useEffect } from 'react';
import nyStyle from './Nyheder.module.scss';
import { useNavigate } from "react-router-dom";

export const Nyheder = () => {
    const [nyheder, setNyheder] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  
    useEffect(() => {
      const fetchNyheder = async () => {
        try {
          const response = await fetch('https://api.mediehuset.net/mediesuset/news');
          const data = await response.json();
          setNyheder(data.items || []); 
          setLoading(false);
          
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  console.log(nyheder);
  
      
      fetchNyheder();
    }, []);

    const handleButtonClick = (id) => {
        navigate(`/pages/Details/${id}`); 
    };

 // i use this function to limit details
 function truncateText(text, charLimit) {
    if (text.length > charLimit) {
        return text.slice(0, charLimit) + " ..."; // Truncate and add ellipsis
    }
    return text;
}


    return (
        <>
            <section className={nyStyle.nyhed}>
                {nyheder.slice(0 , 6).map((items, index) => (
                    <figure key={items.id}>
                        <img src={items.image} alt="" />
                        <figcaption>
                            <h3>{truncateText(items.title, 20)}</h3>
                            <p>{truncateText(items.teaser, 120)}</p> 
                            <button onClick={() => handleButtonClick(items.id)}>Læs mere</button>
                        </figcaption>
                    </figure>
                ))}
            </section>
        </>
    );
    
}