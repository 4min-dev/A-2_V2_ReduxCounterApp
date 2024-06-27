import React from "react"

type TListProps<T> = {
    listContainerName:string,
    items:T[],
    renderItem:(item:T) => React.ReactNode 
}

export default function List<T>({listContainerName,items,renderItem}:TListProps<T>) {
    return(
        <div className={`listContainer_${listContainerName}`}>
            {items.map(renderItem)}
        </div>
    )
}