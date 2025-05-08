import { useBookContext } from "../context/BookContext"

function RawDataPage(){
    const { state } = useBookContext();
    return (
        <div className="pt-10 whitespace-pre-wrap">
            {JSON.stringify(state.rawBook, null, 2)}
        </div>
    )
}

export { RawDataPage }