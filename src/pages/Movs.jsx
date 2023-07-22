import React from 'react'
import Lists from '../components/Lists'


function Movs({ movs }) {
    return (
        <>
        <div className='flex flex-col gap-5 items-center'>
            <p>Moves:</p>
            <div className='flex flex-col overflow-auto max-h-[400px] bg-gray-200 p-4 rounded-lg'>
                {
                    movs?.map((movs, i) => {
                        return < Lists
                            key={i}
                            abilities={movs.move.name}
                        />
                    })
                }
            </div>
            </div>
        </>
    )
}

export default Movs