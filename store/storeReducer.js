const types = {
    testMode: 'test - mode',
    normalMode: 'normal - mode',
}

const initialStore = {
    test1 : false,
    normal: true
}

const storeReducer = (state, action) => {
    switch(action.type) {
        case types.testMode:
            return {
                ...state,
                test1: true,
                normal: false
            }

        case types.normalMode:
            return {
                ...state,
                normal: true,
                test1: false
            }

        default:
            return state;
    }
}

export { initialStore, types }
export default storeReducer