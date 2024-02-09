'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Logo = dynamic(() => import('../canvas/Examples').then((mod) => mod.Logo), { ssr: false })
const Dog = dynamic(() => import('../canvas/Examples').then((mod) => mod.Dog), { ssr: false })
const Duck = dynamic(() => import('../canvas/Examples').then((mod) => mod.Duck), { ssr: false })
const View = dynamic(() => import('../canvas/View').then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className=''>
      <svg className='' fill='none' viewBox='0 0 24 24'>
        <circle className='' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        />
      </svg>
    </div>
  ),
})
const Common = dynamic(() => import('../canvas/View').then((mod) => mod.Common), { ssr: false })

export default function Page() {
  return (
    <>
      <div className=''>
        <View orbit className='relative  h-90vh '>
          <Suspense fallback={null}>
            <Duck route='/blob' scale={1} position={[0, 0, 0]} />
            {/* <Common color={'lightblue'} /> */}
          </Suspense>
        </View>
      </div>
    </>
  )
}
