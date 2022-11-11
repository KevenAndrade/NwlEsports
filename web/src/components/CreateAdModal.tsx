import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-Checkbox";
import { GameController } from "phosphor-react";
import { Input } from "./Inputs";

export function CreateAdModal(){
    return (
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

                <div className='grid grid-cols-2 gap-2 '>
                  <div className="flex flex-col gap-2">
                    <label  htmlFor="yearsplaying">Joga a quanto tempo?</label>
                    <Input 
                      type="number" 
                      id="yearsplaying" placeholder='Tudo bem ser ZERO'
                    />
                  </div>
                  <div className="flex flex-col gap-2">
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
    );
}