import { produce } from 'immer'
import type { IStore } from './s'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const storeGeneral = (set: any) => {
  return {
    zustand: 'yz',
    setZustand: (zustand: string) =>
      set(
        produce((state: IStore) => {
          state.zustand = zustand
        }),
        false,
        'general/setZustand'
      ),
    count: 0,
    setCount: (count: number) =>
      set(
        produce((state: IStore) => {
          state.count = count
        }),
        false,
        'general/setCount'
      )
  }
}
export default storeGeneral
