const initialState = {details:{}, images:[], message:'', data:'', events:[], searchedProperties:[] };

function mainReducer(state = initialState, action){
   
    switch(action.type){
        
        case 'PROPERTY_DETAILS':
            
            return{
                ...state,
                details: action.payload.details,
                images: action.payload.images,
            };

        case 'PROPERTY_DELETE':
            return{
                ...state,
                message: action.payload,
            };
        
        case 'DELETE_IMAGE':
            //console.log(action.payload)
            return{
                ...state,
                message: action.payload,
            };
            
        case 'ADD_SUBSCRIBER':
           // console.log(action.payload)
            return{
                ...state,
                message: action.payload,
            };
            
        case 'GET_LOGO':
            //console.log(action.payload)
            return{
                ...state,
                logo:action.payload,
            }

        case 'PROPERTIES_DASHBOARD_DATA':
            //console.log(action.payload)
            return{
                ...state,
                data:action.payload,
            }

        case 'USERS_DASHBOARD_DATA':
            //console.log(action.payload)
            return{
                ...state,
                data: action.payload,
            };
            
        case 'ADD_EVENT':
            console.log(action.payload)
            return{
                ...state,
                message : action.payload,
            };
        
        case 'GET_EVENTS':
            //console.log(action.payload)
            
            return{
                ...state,
                events : action.payload,
            };
             
        case 'DROP_EVENT':
            console.log(action.payload)
            return{
                ...state,
                message : action.payload,
            };
        
        case 'GET_SEARCHED_PROPERTIES':
            console.log(action.payload)
                
            return{
                ...state,
                searchedProperties : action.payload,
            };
                  
        default:
            return state;
    }
}


export default mainReducer;