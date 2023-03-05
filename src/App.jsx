import { useState } from 'react'
import TransactionList from './components/TransactionList'
import Data from './assets/Data.json'

function App() {

  return (
    <div className="w-screen h-screen p-4 md:p-12">
      <div className='max-w-[1000px] mx-auto bg-slate-100 p-4 md:p-14'>
        <div className='flex flex-row justify-between mb-10'>
          <h1 className='text-2xl md:text-4xl font-medium'>Last Transactions</h1>
          <a className='text-xl md:text-3xl text-gray-600 font-medium' href="#">See All</a>
        </div>
        <div className='flex flex-col gap-6'>
          {Data && Data.map((element) => (

            <TransactionList key={element.name} data={element} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
