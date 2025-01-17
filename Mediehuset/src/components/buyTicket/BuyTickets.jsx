import style from './BuyTickets.module.scss';
import React, { useState } from 'react';


export const BuyTickets = ({ isVisible }) => {
  return (
    <>
    <section className={style.ticketInfo} style={{ display: isVisible ? "block" : "none" }}>
      <h2>Billetter</h2>
      <div>
        <p>PARTOUT BILLET - ALLE DAGE</p>
      </div>
      <article>
        <h4>name of ticket</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur expedita sint. Similique quia necessitatibus, ad soluta cupiditate ipsa voluptate nesciunt illum laborum facilis. Laudantium reiciendis quaerat voluptatibus qui itaque!</p>
      </article>
      <div>
        <p>Bestelling</p>
      </div>
      <section id='ticketList' className={style.table}>
            <table>
            <tbody>
                <tr>
                    <td>Antal:</td>
                    <td>2</td>
                    <td>Name of ticket</td>
                    <td>DKK 149,00</td>
                    <td>DKK 299,00</td>
                </tr>
            </tbody>
            </table>
           
        </section>
        <hr />
        <section id='ticketList' className={style.table}>
            <table>
              <tbody>
                  <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className={style.summery} >DKK 149,00</td>
                      <td className={style.summery}>DKK 299,00</td>
                  </tr>
              </tbody>
            </table>
           
        </section>
        <hr />
    </section>
    </>
  );
};



