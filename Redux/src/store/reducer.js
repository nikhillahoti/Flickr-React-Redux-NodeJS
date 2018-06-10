
// State contains the list of all the result images from Flickr Search
const initialState = {
    imageList: []
}

const reducer = (state = initialState, action) => {
    // Just have one action for now 
    if(action.type === 'IMAGE_LIST_CHANGED'){
        // Updating the store with the new imageList
        return {
            imageList: action.imageList
        }
    }
    return state;
} 

export default reducer;