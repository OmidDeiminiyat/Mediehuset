import React, {useState, useEffect } from 'react';
import tableStyle from './BilletList.module.scss';
import { useNavigate } from "react-router-dom";


export const BilletLists = ({ onAction }) => {
    const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.mediehuset.net/mediesuset/tickets');
        const data = await response.json();
        setTickets(data.items || []); 
        setLoading(false);
        
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    fetchData();
  }, []);

console.log(tickets);
// const filteredData = tickets.filter(item => item.name === '"Alm. Partoutbillet"');       

function handleBuyTicket(itemId) {
    let storedItems = JSON.parse(localStorage.getItem('items')) || [];
    storedItems.push(itemId);
    localStorage.setItem('items', JSON.stringify(storedItems));
    console.log("Added item:", itemId);
    myFunction()
    // Check if the item already exists
   
    console.log("Current items in local storage:", JSON.parse(localStorage.getItem('items')));
}
window.addEventListener('load', () => {
    const storedItems = JSON.parse(localStorage.getItem('items'));
    if (storedItems) {
        console.log("Items on load:", storedItems);
    } else {
        console.log("No items in local storage yet.");
    }
});

// alert if item added 
function myFunction() {
    alert('New item added');
  }


  const handleButtonClick = () => {
   document.getElementById('ticketList').style.display = 'none';
   document.getElementById('secondlist').style.display = 'none';
   onAction();
};


    return (

        <>
        <section id='ticketList' className={tableStyle.table}>
            <h3>Billeter</h3>
            <table>
            <caption>
                    <p>PARTOUT BILLET - ALLE DAGE</p>
            </caption>
            <tbody>
            {tickets.slice(0 , 2).map((items, index) => (
                <tr key={items.id} style={{ backgroundColor: index % 2 === 0 ? '#EFEFEF' : '#CFCFCF' }}>
                    <td>{items.name}</td>
                    <td>{items.price} </td>
                    <td><button onClick={() => handleBuyTicket(items.id)}>Køb billet</button></td>
                </tr>
                ))}
            </tbody>
            </table>
        </section><br />

        <section id='secondlist' className={tableStyle.table}>
            <table>
            <caption>
                    <p>ENKELTBILLETTER</p>
            </caption>
            <tbody>
            {tickets.slice(2 , 6).map((items, index) => (
                <tr key={items.id} style={{ backgroundColor: index % 2 === 0 ? '#EFEFEF' : '#CFCFCF' }}>
                    <td>{items.name}</td>
                    <td>{items.price} </td>
                    <td><button onClick={() => handleBuyTicket(items.id)}>Køb billet</button></td>
                </tr>
                ))}
            </tbody>
            </table>
            <button onClick={() => handleButtonClick()} className={tableStyle.enkeltBut}>Fortsætte.</button>
        </section>
        
        </>
    )
}