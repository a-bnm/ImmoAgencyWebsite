import axios from "axios";
import { result } from "lodash";

export const getDetails = (id) => async dispatch => {
    try{
          
        const result = await axios.get(`/properties/${id}/getDetails`);
        dispatch({
            type:'PROPERTY_DETAILS',
            payload: result.data
        })
        
    }catch(e){
        console.log('Problem with getting details from the backend!!')
    }
}

export const deleteProperty = (id) => async dispatch => {
    try{
        const result = await axios.delete(`/properties/${id}/deleteProperty`);
        dispatch({
            type:'PROPERTY_DELETE',
            payload: result.data
        })
    }catch(e) {
        console.log('Impossible to delete!!')
    }
}

export const updateProperty = (data) => async dispatch => {
    try{
        let fd =new FormData();
        fd.append('title',data.title);
        fd.append('description',data.description);
        fd.append('property_type',data.property_type);
        fd.append('property_sub_type',data.property_sub_type);
        fd.append('contract_type',data.contract_type);
        fd.append('papers_done',data.papers_done);
        fd.append('number_of_rooms',data.number_of_rooms);
        fd.append('number_of_floors',data.number_of_floors);
        fd.append('number_of_toilets',data.number_of_toilets);
        fd.append('wilaya',data.wilaya);
        fd.append('city',data.city);
        fd.append('surface',data.surface);
        fd.append('price',data.price);
        fd.append('state',data.state);
       
       
        if(data.photos){
            for(let photo of data.photos){
                fd.append("photos[]", photo);
            };
        }
        
        let uri = `/properties/${data.id}/updateProperty`;
        axios.post(uri,fd).then((response)=>{
            console.log('done')
            console.log(response.data)
        })
    }catch(e){
        console.log(e)
        console.log("Impossible to update!!")
    }
}

export const deleteImage = (id) => async dispatch =>{
    try{
        const result = await axios.delete(`/properties/images/${id}/deleteImage`);
        dispatch({
            type:'DELETE_IMAGE',
            payload: result.data
        })
    }catch(e){
        console.log("couldn't delete the image") 
    }
    
    
}

export const addSubscriber = (data) => async dispatch =>{
    try{
        const result = await axios.post('/newsLetter/addSubscriber',data);
        dispatch({
            type:'ADD_SUBSCRIBER',
            payload:result.data
        })
    }catch(e){
        console.log(e)
        console.log("Couldn't add the subscriber");
    }
}

export const getLogo = () => async dispatch =>{
    try{
        const result = await axios.get('/getLogo');
        dispatch({
            type:'GET_LOGO',
            payload:result.data
        }) ; 
    }catch(e){
        console.log(e)
    }
}

export const getPropertiesDashboardData = () => async dispatch =>{
    try {
        const result  = await axios.get('/dashboard/getPropertiesData');
        dispatch({
            type:'PROPERTIES_DASHBOARD_DATA',
            payload : result.data,
        });
    } catch (error) {
        console.log(error);
    }
}

export const getUsersDashboardData = () => async dispatch =>{
    try {
        const result  = await axios.get('/dashboard/getUsersData');
        dispatch({
            type:'USERS_DASHBOARD_DATA',
            payload : result.data,
        });
    } catch (error) {
        console.log(error);
    }
}

export const addEvent = (data) => async dispatch =>{
    try{
        var fd = new FormData;
        fd.append('title',data.title);
        fd.append('start',data.start);
        fd.append('end',data.end);
        const result = await axios.post('/events/addEvent',fd);
        dispatch({
            type:'ADD_EVENT',
            payload:result.data
        })
    }catch(e){
        console.log(e)
        console.log("Couldn't add the event");
    }
}

export const getEvents = () => async dispatch =>{
    try{
        const result = await axios.get('/events/getEvents');
        dispatch({
            type:'GET_EVENTS',
            payload:result.data
        })
    }catch(e){
        console.log(e)
        console.log("Couldn't get the events!");
    }
}

export const dropEvent = (id) => async dispatch =>{
    try{
        const result = await axios.delete(`/events/${id}/dropEvent`);
        dispatch({
            type:'DROP_EVENT',
            payload:result.data
        })
    }catch(e){
        console.log(e)
        console.log("Couldn't delete the event!");
    }
}

export const setSearch = (data) => async dispatch =>{
    try{
        let fd =new FormData();
        
        fd.append('property_type',data.property_type);
        fd.append('property_sub_type',data.property_sub_type);
        fd.append('contract_type',data.contract_type);
        fd.append('papers_done',data.papers_done);
        fd.append('number_of_rooms',data.number_of_rooms);
        fd.append('number_of_floors',data.number_of_floors);
        fd.append('number_of_toilets',data.number_of_toilets);
        fd.append('wilaya',data.wilaya);
        fd.append('city',data.city);
        fd.append('surface',data.surface);
        fd.append('price',data.price);
        fd.append('state',data.state);
        
        let uri = '/properties/searchProperties';
        const result = await axios.post(uri,fd);
        dispatch({
            type:'GET_SEARCHED_PROPERTIES',
            payload:result.data
        })
        
    }catch(e){
        console.log(e)
        console.log("Impossible to do the research!!")
    }
}