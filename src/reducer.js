export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQDQECNewPxirArfwSywNl6PKoj5w0w1zVneKAUwaAhERnA2mpmEyw40NiMoBP41diqAi8RML2xbJDYN3No5GsDquM8xb6vSV37FjTrCVdrQdIAB42W3QQoRUVtJ0UKYrB5TvIw6LcXUaki8GqakEW84smimZ3IYEGN1gB_wqSEitlI_',
}


const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;