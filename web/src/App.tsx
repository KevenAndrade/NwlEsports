import './styles/main.css';
import * as Dialog from '@radix-ui/react-dialog';

import { Game } from './components/game';
import { CreateAd } from './components/CreateAd';
import { useEffect, useState } from 'react';

import logoImg from './assets/Logo.svg';
import { GameController } from 'phosphor-react';

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

          <Dialog.Content className='fixed bg-[#2A2634] py-10 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-x-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
            <Dialog.Title className='text-3xl font-black'>Publique um anúcio</Dialog.Title>

            <Dialog.Content>
              <form action="">
                <div>
                  <label htmlFor="game">Qual o game?</label>
                  <input type='text' id="game" placeholder='Selecione o game que deseja jogar' />
                </div>
                <div>
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <input id="name" placeholder='Como te chaman no game?' />
                </div>

                <div>
                  <div>
                    <label htmlFor="yearsplaying">Joga a quanto tempo?</label>
                    <input type="number" id="yearsplaying" placeholder='Tudo bem ser ZERO'/>
                  </div>
                  <div>
                    <label htmlFor="discord">Qual teu discord?</label>
                    <input id="discord" placeholder='Usuario#000' />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="weekDays">Quando custuma jogar?</label>
                  </div>
                  <div>
                    <label htmlFor="discord">Qual horario do dia?</label>
                    <div>
                      <input type="time" id="hourStart" placeholder='De' />
                      <input type="time" id="hourEnd" placeholder='ate' />
                    </div>
                  </div>
                </div>

                <div>
                  <input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer>
                  <button>Cancelar</button>
                  <button type='submit'>
                    <GameController/>
                    Encontre teu duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
