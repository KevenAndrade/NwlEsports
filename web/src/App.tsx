import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import { Game } from './components/game';
import { CreateAd } from './components/CreateAd';
import { useEffect, useState } from 'react';

import logoImg from './assets/Logo.svg';
import { GameController } from 'phosphor-react';
import { Input } from './components/Inputs';

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

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 insert-0 fixed'/>

          <Dialog.Content className='fixed bg-[#2A2634] py-10 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúcio</Dialog.Title>

              <form action="" className='mt-8 flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                  <label htmlFor="game" className='text-semiblod'>Qual o game?</label>
                  <Input id='game' placeholder='Selecione o Game a jogar'/>
                </div>
                <div className='flex flex-col gap-2 '>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input id='name' placeholder='Como te chaman no game?'/>
                </div>

                <div className='flex flex-row gap-2'>
                  <div>
                    <label htmlFor="yearsplaying">Joga a quanto tempo?</label>
                    <Input 
                      type="number" 
                      id="yearsplaying" placeholder='Tudo bem ser ZERO'
                    />
                  </div>
                  <div>
                    <label htmlFor="discord">Qual teu discord?</label>
                    <Input 
                      id="discord" 
                      placeholder='Usuario#000' 
                    />
                  </div>
                </div>

                <div className='flex gap-2'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor="weekDays">Quando custuma jogar?</label>
                    
                    <div className='grid grid-cols-4 gap-1'>
                      <button 
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >D</button>
                      <button className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >S</button>
                      <button 
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >T</button>
                      <button 
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >Q</button>
                      <button 
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >Q</button>
                      <button 
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >S</button>
                      <button 
                        className='w-8 h-8 rounded bg-zinc-900'
                        title='Domingo'
                      >S</button>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2 flex-1'>
                    <label htmlFor="discord">Qual horario do dia?</label>
                    <div className='flex flex-row gap-2'>
                      <Input type="time" id="hourStart" placeholder='De' />
                      <Input type="time" id="hourEnd" placeholder='ate' />
                    </div>
                  </div>
                </div>

                <div className='mt-2 flex gap-2 text-sm'>
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className='mt-4 flex flex-row gap-4 justify-end'>
                  <Dialog.Close 
                    className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
                    type='button'
                  >Cancelar</Dialog.Close>
                  <button 
                    type='submit' 
                    className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
                    <GameController size={24}/>
                    Encontre teu duo
                  </button>
                </footer>
              </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
