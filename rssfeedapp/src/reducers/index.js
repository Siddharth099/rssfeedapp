import {ADD_URL,ADD_URL_LIST, ADD_URL_BODY, DELETE_URL} from '../actions/index';

const reducer = (state = { feedList: [], feedBody:[]}, action) =>{
    switch(action.type){
        case ADD_URL:
            return {...state, feed:action.feed};
        case ADD_URL_LIST:
             return {...state, feedList:[(action.feedList), ...state.feedList]};    
        case ADD_URL_BODY:
            return {...state, feedBody:action.feedBody};
       case DELETE_URL:
            return {...state, feedList:state.feedList.filter((feed, sidx) => sidx !== action.idx)};              
        default:
            return state;
    }
}

export default reducer;