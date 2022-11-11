import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import { Game } from './components/Game';
import { CreateAd } from './components/CreateAd';
import { useEffect, useState } from 'react';

import logoImg from './assets/Logo.svg';
import { CreateAdModal } from './components/CreateAdModal';

interface Game{
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [Games, SetGames] = useState<Game[]>([]);

  useEffect(()=>{
    fetch('http://localhost:3333/games')
      .then(res => res.json())
      .then(data =>{
        SetGames(data);
        //console.log(data);
      })
  },[])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg}/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-gradiente bg-clip-text text-transparent'> duo </span>  está aqui.
      </h1>

      <div className=' grid grid-cols-6 gap-6 mt-16'>
        { Games.length >0 ? (
            Games.map(game =>{
              return <Game key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
            }) 
          ): (
            <h1></h1>
          )
        }
      </div> 
      
      <Dialog.Root>
        <CreateAd/>

        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}

export default App
