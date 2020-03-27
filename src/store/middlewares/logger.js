const logger = (store) => (next) => (action) => {
    console.group('%c'+action.type,"color:green; font-size:1.5rem; font-weight: bold")
    console.log("%cThe action: ","color:blue; font-size:1.1rem" ,action)
    const returnValue = next(action)
    console.log('%cThe new state : ', "color:blue; font-size:1.1rem",store.getState());
    console.groupEnd()

    return returnValue;
}

export default logger;