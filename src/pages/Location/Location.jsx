// IMPORTS
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './location.css';

import Error from '../../pages/Error/Error';
import Slider from '../../components/Slider/Slider';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/Collapse'

import DataLocation from '../../assets/location.json';

function Logement() {
   const [logement, setLogement] = useState(null); 
   const { id } = useParams(); 

   useEffect(() => {  
      const data = DataLocation.find(location => location.id === id);
      if (data) {
      setLogement(data);
   } else { 
      setLogement(null);
   }
   }, [id]);

   if (!logement) {
      return (<Error />);
   }

   const data = [
      {
         title: 'Description',
         text: logement.description
      },
      {
         title: 'Equipements',
         text: logement.equipments.map(equipment => (
            <p className='TextCollapse' key={equipment}>{equipment}</p>
         ))
      }
   ]


   return ( 
      <>
         {logement.pictures && <Slider images={logement.pictures} />}

         <section className='ContInfo'>

            <div className='ContInfoLogement'>
               <h1 className='TittleInfo'>{logement.title}</h1>
               <p className='TextInfo'>{logement.location}</p>
               <ul className='TagUl'>
                  {logement.tags.map(tag => (
                     <li className='TagLi' key={tag}>{tag}</li>
                  ))}
               </ul>
            </div>

            <div className='ContInfoOwner'>
               <div className='TEST'>
                  <p className='TextInfoOwner'>{logement.host.name}</p>
                  <img className='ImgOwner' src={logement.host.picture} alt={logement.host.name} />
               </div>

               <Rating rating={logement.rating} />
            </div>

         </section>

         <Collapse data={data}/>

      </>
  );
}


export default Logement;