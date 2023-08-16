import React, {useState, useEffect} from "react"

const CartContext = React.createContext()

function CartContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    const getFetchedPhotos = async () => {
        let res = await fetch (url)
        let data = await res.json()
        setAllPhotos(data)
    }

    useEffect(() => {
        getFetchedPhotos()
    }, [])
    
    return (
        <CartContext.Provider value={{allPhotos}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}