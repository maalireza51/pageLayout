import axios from "axios";

export const getComments = async (id="") =>{
    return await axios.get(`comments?post-id=${id}`,"")
}