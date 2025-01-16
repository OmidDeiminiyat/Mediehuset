import { BilletLists } from "../components/billetList/BilletList"
import { BuyTickets } from "../components/buyTicket/BuyTickets"
import { Header } from "../components/header/Header"
import React, { useState } from "react";

export const Billet = () => {
    const [isTable2Visible, setIsTable2Visible] = useState(false);

    const handleTable1Action = () => {
      setIsTable2Visible(true); // Change Table2's display to 'block'
    };
      

    return (

        <>
        < Header />
        < BilletLists onAction={handleTable1Action} />
        < BuyTickets isVisible={isTable2Visible}  />
        </>
    )
}