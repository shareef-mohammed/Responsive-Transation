import React from 'react'

const TransactionList = ({ data }) => {
    return (
        <div className='bg-white w-full rounded-2xl p-8 hover:scale-105 hover:duration-500 hover:shadow-xl'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='flex flex-col md:flex-row items-center gap-6'>

                    < div className='md:w-28 md:h-28 w-20 h-20 bg-black rounded-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${data.image})` }}></div>
                    <div>
                        <h1 className='md:text-3xl text-xl font-medium'>{data.name}</h1>
                        <p className='-mt-3 md:text-2xl text-lg font-medium text-[#a4a4a4] '>{data.date} <span className='text-6xl'>.</span> {data.time}</p>
                    </div>
                </div>
                <div className='flex flex-col items-end gap-4'>
                    <h1 className={`${data.status === "Received" ? "text-green-500" : "text-red-600"} text-3xl font-bold self-end`} > <span className='text-4xl font-bold'>{data.status === "Received" ? "+" : "-"}</span>${data?.amount}</h1>
                    <p className='text-2xl font-medium'>{data.status}</p>
                </div>
            </div>
        </div >
    )
}

export default TransactionList
