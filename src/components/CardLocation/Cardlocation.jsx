import { Link } from 'react-router-dom'
import './CardLocation.scss'

import DataLocation from '../../assets/location.json'

function Cardlocation() {
   return (
      <section className='ContLocation'>
         {DataLocation.map((location) => (

         /*
          Link est utilisée pour créer des liens de navigation entre différentes vues de mon application
          Evite les refresh de page
         */
            <Link to={`/location/${location.id}`} key={location.id} >
               <figure className='ContCard'>
                  <img className='ImgLocation' src={location.cover} alt={location.title}/>
                  <div className='GradientLocation'></div>          
                  <figcaption className='TitleLocation'>{location.title}</figcaption>
               </figure>
            </Link>

         ))}
      </section>
   )
}
export default Cardlocation