import { useState } from 'react'
// import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data'
import Header from './components/Header.jsx'
import CoreConcepts from './components/CoreConcepts.jsx'
import TabButton from './components/TabButton.jsx'
import { EXAMPLES } from './data.js'
//import './App.css'

function App() {

  const [selectedTopic, setSelectedTopic] = useState('');

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    //console.log(selectedButton);
}

  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core React Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((conceptItem) => ( <CoreConcepts key={conceptItem.title} {...conceptItem} /> ))}
  
          </ul>
        </section>       
        <h2>Time to get Started! Yay!</h2>

        <section id='examples'>
        <h2>Examples</h2>
        <menu>
        <TabButton isSelected = {selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
        <TabButton isSelected = {selectedTopic === 'jsx'} onSelect={() =>handleSelect('jsx')}>JSX</TabButton>
        <TabButton isSelected = {selectedTopic === 'props'} onSelect={() =>handleSelect('props')}>Props</TabButton>
        <TabButton isSelected = {selectedTopic === 'state'} onSelect={() =>handleSelect('state')}>State</TabButton>
        </menu>

        {!selectedTopic ? <p>Please select a topic</p> : (<div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
        </div>)}

        </section>
      </main>
    </>
  )
}

export default App
