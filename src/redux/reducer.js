const INITIAL_STATE={
    name:null,
    date:null,
    number:null,
    email:null,
}


const Reducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'UPDATE':
            return {
                ...state,
                name:action.payload.name,
                date:action.payload.date,
                number:action.payload.number,
                email:action.payload.email
            }
            default:
                return state
    }
}

export default Reducer