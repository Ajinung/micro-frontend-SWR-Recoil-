import { atom } from "recoil"

export const readCount = atom(
    {
        key: 'readCount',
        default: 2,

    }
)

export const readText = atom({
    key: 'readText',
    default: ""
})

export interface iData {
    title?: string,
    _id?: string,
}

export const readData = atom({
    key: 'readData',
    default: [] as iData[]
})