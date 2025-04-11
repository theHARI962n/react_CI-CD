import reactLogo from '../assets/react-core-concepts.png'
import './Header.css'

const reactDescriptions = ['Fundamental','Crucial' ,'Core']

function getRandInt(max) {
  return Math.floor(Math.random() * (max+1));
}

export default function Header(){
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