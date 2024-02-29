import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./server_url"

//upload video-store video in http://localhost:3000/video
export const uploadVideoAPI=async(video)=>{
    //send response to add component
   return await commonAPI("POST",`${SERVER_URL}/video`,video)
}

//get video api called by view
export const getAllVideosAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/video`,"")
}

//store watch history by videocard to http://localhost:3000/history
export const saveHistoryAPI = async (videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)
}

//get history to watch component to http://localhost:3000/history
export const getHistoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
  
}

//remove history to watch component
export const removeHistoryApI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${videoId}`,{})
  
}

//remove video by videocard component
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/video/${videoId}`,{})
}

//save category
export const addCategoryAPI=async(categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

//get category to category component
export const getCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
  
}

//remove category api
export const removeCategoryAPI = async (categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
}

//get single video api
export const getAVideosAPI = async (videoId)=>{
    return await commonAPI("GET",`${SERVER_URL}/video/${videoId}`,"")
}

//updateCategory API
export const updateCategoryAPI = async (categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}

//get single category api
export const getSingleCategoryAPI = async (categoryId)=>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${categoryId}`,"")
}
