import { useState } from 'react'
import reactLogo from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data'

//import './App.css'

const reactDescriptions = ['Fundamental','Crucial' ,'Core']

function getRandInt(max) {
  return Math.floor(Math.random() * (max+1));
}



function Header(){
  const word = reactDescriptions[getRandInt(2)];
  return(
    <header>
    <div>
    <img src={reactLogo} alt="logo"></img>
      <h1>React Essentials</h1>
      <p>
        {word} React concepts you will need to build any react apps
      </p>        
      </div>
  </header>
  )

}

function CoreConcepts(props){
  return (
    <li>
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>

    </li>
  )
}



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core React Concepts</h2>
          <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]} />
          <CoreConcepts {...CORE_CONCEPTS[1]} />
          <CoreConcepts {...CORE_CONCEPTS[2]} />
          <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        
        <h2>Time to get Started!</h2>
      </main>
    </>
  )
}

export default App
