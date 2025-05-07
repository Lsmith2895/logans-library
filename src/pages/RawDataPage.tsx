import { useEffect, useState } from "react"
import { getBookByISBN } from "../api/googleBooks"

function RawDataPage(){
    //TODO pass this in later
    const isbn = '9781501184161'
    const [book, setBook] = useState(null)

    useEffect( () => {
        const fetchData = async () => {
            const response = await getBookByISBN(isbn)
            setBook(response)
        }
        fetchData();
        
    }, [isbn])
    return (
        <div className="pt-10">{JSON.stringify(book)}</div>
    )
}

export { RawDataPage }