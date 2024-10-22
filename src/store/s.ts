import { create } from 'zustand'
import { devtools, combine, persist } from 'zustand/middleware'

import storeGeneral from './storeGeneral'

const store = create(
  devtools(
    persist(
      combine(
        {
          hackedBy: 'Blade'
        },
        (set) => ({
          ...storeGeneral(set)
        })
      ),
      {
        name: 'yz-nextjs-storage'
        // partialize: (state) => Object.fromEntries(Object.entries(state).filter(([key]) => !['ommitedKey'].includes(key)))
      }
    )
  )
)

export type IStore = ReturnType<typeof store.getState>

export default store
