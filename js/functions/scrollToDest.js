const scrollToDest = (desty, destx, behavior) => {
    window.scrollTo({
        top: desty,
        left: destx,
        behavior: behavior
    })

    return new Promise((resolve, reject) => {
        setTimeout(() => reject("limit time"), 2000)
        if (window.scrollY === desty) {
            resolve("scrolled")
        }
    })
}


export default scrollToDest