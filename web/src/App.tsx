import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImg from './assets/Logo.svg';
import { Game } from './components/game';
import { useEffect, useState } from 'react';

function App() {
  const [] = useState([]);

  useEffect(()=>{
    fetch('')
      .then(res => res.json())
      .then()
  },[])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg}/>

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-gradiente bg-clip-text text-transparent'> duo </span>  está aqui.
      </h1>

      <div className=' grid grid-cols-6 gap-6 mt-16'>
        <Game bannerUrl='/image 1.png' title='League of legends' adsCount={1}/>
        <Game bannerUrl='/image 2.png' title='League of legends' adsCount={2}/>
        <Game bannerUrl='/image 3.png' title='League of legends' adsCount={3}/>
      </div> 

      <div className='pt-1 bg-gradiente mt-8 self-stretch overflow-hidden rounded-lg'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu Duo?</strong>
            <span className='text-zinc-400 block'>Publique um anucio para encontrar novos players.</span>
          </div>

          <button className='py-3 px-4 bg-violet-400 rounded hover:bg-violet-600 text-white flex items-center gap-3'>
            <MagnifyingGlassPlus size={24}/>
            Publicar anucio
          </button>
        </div>
      </div>
      

    </div>
  )
}

export default App
