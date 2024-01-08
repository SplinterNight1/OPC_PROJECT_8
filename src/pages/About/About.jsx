import './about.scss'

import Collapse from '../../components/Collapse/Collapse'

import Banner from '../../assets/banner-about.png'
import data from '../../assets/collapse.json'


function About() {
   return (
      <section>
         <img className='BannerCont' alt='Paysage' src={Banner} />
         <Collapse data={data}/>
      </section>
   )
 }
 
 export default About