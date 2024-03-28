import { toast } from "react-toastify"

const checkLcCart = () => {
    const cart = localStorage.getItem('cart')

    if (cart) {
        return JSON.parse(cart)
    }
    return []
}


const saveCart = id => {
    const storedCart = checkLcCart()
    const exists = storedCart.find(donationId => donationId === id);

    if (!exists) {
        storedCart.push(id);
        localStorage.setItem('cart', JSON.stringify(storedCart))
        toast('Donate Successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    } else{
        toast.warn('You allready donate!', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
       
            });
    } 
}

export { checkLcCart, saveCart }