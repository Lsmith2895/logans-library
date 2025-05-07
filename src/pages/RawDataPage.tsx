import { useEffect, useState } from "react"
import { getBookByISBN } from "../api/googleBooks"
import type { GoogleBookResponse } from "../types/book"

function RawDataPage(){
    //TODO pass this in later
    const isbn = '9781501184161'
    const [book, setBook] = useState<GoogleBookResponse | null>(null)

    useEffect( () => {
        const fetchData = async () => {
            const response = await getBookByISBN(isbn)
            setBook(response)
        }
        fetchData();
        
    }, [isbn])
    return (
        <div className="pt-10 whitespace-pre-wrap">{JSON.stringify(book, null, 2)}</div>
    )
}

export { RawDataPage }