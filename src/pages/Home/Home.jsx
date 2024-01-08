import './home.css'

import Banner from '../../assets/banner-home.png'

import Cardlocation from '../../components/CardLocation/Cardlocation'

/* Page Home 
  Contient une bannière et le composant Cardlocation
*/
function Home() {
   return (
      <section>
         
         <div className='BannerCont'>
            <img className='BannerImg' src={Banner} alt='Paysage' />
         </div>
         
         <Cardlocation />

      </section>
   )
 }
 
 export default Home