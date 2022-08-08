import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css';
import affair from "./Affair";
import Affair from "./Affair";

// types
export type AffairPriorityType = 'low'|'middle'|'high' // need to fix any
export type AffairType = {
    _id:number;
    name:string;
    priority:string;
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
let defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]
// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): AffairType[] => { // need to fix any
    if (filter ==='low') return affairs.filter(Affair => Affair.priority == 'low')
    if (filter ==='middle') return affairs.filter(Affair => Affair.priority == 'middle')
    if (filter ==='high') return affairs.filter(Affair => Affair.priority == 'high')
    else return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): AffairType[] => { // need to fix any
    let AffairOnDelete = affairs.filter(affairs => affairs._id !== _id)
    console.log(_id)

    return AffairOnDelete
}

function HW2() {
    let [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={s.HW2}>
            <hr/>
            homeworks 2
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
