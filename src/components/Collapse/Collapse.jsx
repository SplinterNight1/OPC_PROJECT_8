import { useState } from 'react'
import './Collapse.scss'

import ArrowDown from '../../assets/arrow-down.png'
import ArrowUp from '../../assets/arrow-up.png'


function Collapse({ data }) {
  const [openIndexes, setOpenIndexes] = useState([])

  const toggleCollapse = (index) => {
    const currentIndex = openIndexes.indexOf(index)
    //3 points =  créer une copie superficielle / spread syntax / syntaxe de propagation
    /* 
      vous pouvez rencontrer des problèmes liés à la mutabilité. 
      Cela signifie que si vous modifiez la nouvelle copie du tableau, 
      les changements peuvent également se répercuter sur le tableau d'origine, 
      car ils partagent la même référence mémoire.

      En utilisant les trois points, vous créez une nouvelle référence mémoire 
      pour le tableau openIndexes, évitant ainsi les problèmes de mutabilité. 
      Ainsi, les modifications apportées à newOpenIndexes n'affecteront pas le 
      tableau openIndexes d'origine, et vice versa.
    */
    const newOpenIndexes = [...openIndexes]

    if (currentIndex === -1) {
      newOpenIndexes.push(index)
    } else {
      newOpenIndexes.splice(currentIndex, 1)
    }

    setOpenIndexes(newOpenIndexes)
  }

  const numCollapses = data.length
  /*
    En fonction du nombre d'éléments dans data,
    une classe CSS différente est attribuée à la div principale (containerClass). 
    Cela permet d'appliquer un style spécifique en fonction du nombre d'éléments 
    à afficher.
  */
  const containerClass = numCollapses === 2 ? 'CollapseHomeTwo' : 'CollapseHome'

  return (
    <div className={containerClass}>
      {data.map((collapse, index) => (
        <div className="ContCollapse" key={index}>
          <div className="TittleCont" onClick={() => toggleCollapse(index)}>
            <h3 className='TittleCollapse'>{collapse.title}</h3>

            {/* Affichage conditionnel du contenu */}

            {openIndexes.includes(index) ? (
              <img src={ArrowDown} alt="Arrow" />
            ) : (
             
               <img src={ArrowUp} alt="Arrow" />
            )}

          </div>
          
          {openIndexes.includes(index) && (
            <div className="TextCollapse">{collapse.text}</div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Collapse