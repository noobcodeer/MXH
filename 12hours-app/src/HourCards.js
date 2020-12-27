import React, { useState } from "react"
import TinderCard from 'react-tinder-card';
import "./HourCards.css";

function HourCards() {
const [people,setPeople]= useState([
    {
        name: "Dean",
        url:"https://i.pinimg.com/originals/ac/dd/7b/acdd7b34e53737b859f17a99c8b19a6a.jpg",
    },
    {
        name: "Zico",
        url:"https://res.heraldm.com/phpwas/restmb_idxmake_amp.php?idx=680&simg=%2Fcontent%2Fimage%2F2019%2F11%2F08%2F20191108000136_0.jpg",
    },
]);

    const swiped=(direction,nameToDelete)=>{//hieu ung vuot
        console.log("Xóa"+nameToDelete);
        //setLastDirection(direction);
    };
    const outOfFrame=(name)=>{
        console.log(name+ "Bên trái màn hình !");
    }
    return (
        <div className="hourCards">
            <div className="hourCards_cardContainer">
            {people.map((person) =>(
               <TinderCard /*cai nay phai tai react-tinder-app ve de lay hieu ung luot cua tinder*/
                   className="swipe"
                   key={person.name}
                   preventSwipe={["up","down"]}
                   onSwipe={(dir)=>swiped(dir,person.name)}//khoi tao o tren
                   onCardLeftScreen={()=>outOfFrame(person.name)}/*khoi tao o tren*/>
                       <div style={{backgroundImage:`url(${person.url})`}}
                       className="card"
                       >
                           <h3>{person.name}</h3>
                       </div>
               </TinderCard>
            ))} 
            </div>
        </div>
    );
}

export default HourCards
