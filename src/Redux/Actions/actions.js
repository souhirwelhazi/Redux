import {ADD_TASK,DELETE_TASK,UPDATE_DONE_TASK,UPDATE_TASK,SET_FILTER} from "../Constants/actionTypes";
export let add_task = (payload) => {
    return{
        type : ADD_TASK,
        payload
    };};
export let update_task = (payload ) =>{
    return{
        type : UPDATE_TASK ,
        payload,
    };};
export let donne_task= ( payload) => {
    return {
        type : UPDATE_DONE_TASK,
        payload,
    };};
export let delete_task = (payload) => {
    return{
        type : DELETE_TASK,
        payload,
    };};
    export const setFilter = (filter) => ({
        type: SET_FILTER,
        filter
      });