import RSSParser from 'rss-parser';

export const ADD_URL = "ADD_URL";
export const ADD_URL_BODY = "ADD_URL_BODY"
export const ADD_URL_LIST = "ADD_URL_LIST"
export const DELETE_URL = "DELETE_URL"
export const addUrl = (feed) => ({
    type: ADD_URL,
    feed: feed,
})

export const addUrlBody = (value) => ({
    type: ADD_URL_BODY,
    feedBody:value,
})
export const addUrlList = (feedList) => ({
    type: ADD_URL_LIST,
    feedList:feedList,
})
export const deleteFeed = (idx) => ({
    type: DELETE_URL,
    idx:idx,
})
export function addUrlFeed(feed){
    return function(dispatch){
        dispatch(addUrl(feed))
    }
}
export function addUrlFeedList(feedList, history){
    return function(dispatch){
        dispatch(addUrlList(feedList))
        addUrlBodyList(feedList);
        history.push('/0')
    }
}

export function deleteUrlFeed(idx){
    return function(dispatch){
        dispatch(deleteFeed(idx))
    }
}

export function addUrlBodyList(urlFeed){
    return function(dispatch){
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/" 
        let parser = new RSSParser();
        var output = [];
        parser.parseURL(CORS_PROXY + urlFeed, function(err, feed) {          
            if(feed !== undefined){      
                feed.items.forEach(function(entry) {        
                var value ={};
                value.url = feed.link;
                value.title = entry.title;
                let pubDate = new Date(entry.pubDate)
                value.pubDate = pubDate.getDate() + '/' + pubDate.getMonth() + 1 + '/' +
                                pubDate.getFullYear();
                value.content = entry.content;
                output.push(value);    
            })
         } 
    })
    dispatch(addUrlBody(output))    
}
}