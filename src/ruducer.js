export const initialState = {
    user:null,
    playlists:[],
    discover_weekly: null,
    playing:false,
    item:null,
    //token:"BQC5fNMS1o6SE4pkOOL9f1xKUntER4-Y2NBEpRsMRpcBLsyplHqPuO4rNhaJHEFAySb0l5lRpHQdYGOO_0MVyI2RGOom_RALicGVjx8qZmtXAaEAjwobNFpaREGj1my6h2ciDPQ0YnGk3goCGkITiA0Lquk5sUGgTM4rAEUrDrBGSDLW7oUL",

}

const reducer = (state,action) =>{
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }; 
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists,

            };  
        case "SET_DISCOVER_WEEKLY":
            return {
                  ...state,
                  discover_weekly: action.discover_weekly,
            };     
        default:
            return state;    
    }
}
export default reducer;