import './rating.scss';

import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';

// Composant Rating > affiche les étoiles en fonction du rating
// Props : note de 1 à 5

function Rating({ rating }) { 
   const stars = []; // Créer un tableau pour stocker les étoiles
 
   for (let i = 1; i <= 5; i++) {
      if (i <= rating) { // Tant que i est inférieur ou égal à la note
         stars.push(<img className='Stars' key={i} src={StarActive} alt="star-filled" />);
      } else { 
        // Sinon, une étoile vide est affichée
         stars.push(<img className='Stars' key={i} src={StarInactive} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>;
}
export default Rating;