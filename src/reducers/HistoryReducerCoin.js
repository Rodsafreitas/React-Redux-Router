
const HistoryReducerCoin = (state = [], action) => {

    switch(action.type){
        case "HISTORY_COIN":
            return [...state,
                action.informations]
        break;

        default:
            return state;        
        break;
    }
};

export default HistoryReducerCoin;
