const initialState = {
    mustang: "1967 Mustang Boss 302",
    fordGT: "2021 Ford GT",
    bugatti: "2021 Bugatti Chiron",
    kawasaki: "zrx1200"
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){

        case "GET_BUGATTI":
            return state.bugatti
        case "GET_FORDGT":
            return state.fordGT
        case "GET_KAWASAKI":
            return state.kawasaki
        case "GET_MUSTANG":
            return state.mustang
        default:
            return state
    }
}
export default rootReducer;