import { useEffect, useState } from "react"
import { getBookByISBN } from "../api/googleBooks"
import type { GoogleBookResponse } from "../types/book"
import { useBookContext } from "../context/BookContext"

function RawDataPage(){
    // const isbn = '9781501184161'
    const { state } = useBookContext();
    console.log(state.rawBook)
    return (
        <div className="pt-10 whitespace-pre-wrap">
            {JSON.stringify(state.rawBook, null, 2)}
        </div>
    )
}

export { RawDataPage }