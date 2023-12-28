import './rating.css';

import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';

// Composant Rating > displays stars according to rating
// Props : rating 1 to 5
function Rating({ rating }) { 
   const stars = []; // Create an array to store stars
 
   for (let i = 1; i <= 5; i++) {
      if (i <= rating) { // As long as i is less than or equal to the note
         stars.push(<img className='Stars' key={i} src={StarActive} alt="star-filled" />);
      } else { 
         // Otherwise an empty star is displayed
         stars.push(<img className='Stars' key={i} src={StarInactive} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>;
}
export default Rating;