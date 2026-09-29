import { Suspense, useState } from 'react'
import Nav from '../components/nav'
import Players from '../components/players/players'
import type Iplayers from './type/playerType'

const playersFetch = async (): Promise<Iplayers[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}


function App() {
    const [players] = useState(()=> playersFetch());
    const [coin,setCoin] = useState(500000);
  
  return (
    <>
    <Nav coin={coin}  />
    <Suspense fallback={<div>Loading...</div>}>
    <Players playersFetch={players} coin={coin} setCoin={setCoin} />
    </Suspense>
    </>
  )
}

export default App
