import { useRef } from 'react'
import { useState } from 'react'

export default function Player() {
  const playerNameRef = useRef()

  const [playerName, setPlayerName] = useState(null)
 
  function handleSubmit(){
    
    setPlayerName(playerNameRef.current.value)
  }

  return (
    <section id='player'>
      <h2>Akagami {  playerName ?? 'Kaizouku'} kaizoukudan</h2>
      <p>
        <input
        ref={playerNameRef}
          type='text'
         
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  )
}
