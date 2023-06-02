import axiosInstance from "../helper/axiosInstance";
import {message} from "antd";
import {logOut} from "../helper/sessionStorage";

export const createAssignmentRequest = async (values, id) => {
    try {

        let result;
        if (id){
            const URL = `/assignments/${id}`;
            const {data} = await axiosInstance.patch(URL, values, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    accept: '*/*'
                }
            });
            result = data;
        }else {
            const URL = `/assignments`;
            const {data} = await axiosInstance.post(URL, values, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    accept: '*/*'
                }
            });
            result = data;
        }

        return result;
    } catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
            return false
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
            return false
        }

    }

}

export const getAllAssignmentRequest = async () => {
    try {
        const URL = '/assignments';
        const {data} = await axiosInstance.get(URL);
        return data;
    }catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
        }

    }

}

export const getSingleAssignment = async (id)=>{
    try {
        const URL = `/assignments/${id}`;
        const {data} = await axiosInstance.get(URL);
        return data;
    }catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
        }
    }
}

export const getSubmittedAssignments = async (courseId, moduleId)=>{
    try {
        const URL = `/assignments/submitted/${courseId}/${moduleId}/1/10/0/`;
        const {data} = await axiosInstance.get(URL);
        return data;
    }catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
        }
    }
}

export const getStudentSubmittedAssignments = async (courseId)=>{
    try {
        const URL = `/student/submitted/${courseId}/1/30/0`;
        const {data} = await axiosInstance.get(URL);
        return data;
    }catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
        }
    }
}


export const getSubmittedAssignmentByAssignmentID = async (assignmentId)=>{
    try {
        const URL = `/submitted/${assignmentId}`;
        const {data} = await axiosInstance.get(URL);
        return data;
    }catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
        }
    }
}

export const assignmentReview = async (values,studentId, assignmentId, submittedId )=>{
    try {
        const URL = `/assignments/review/${studentId}/${assignmentId}/${submittedId}`;
        const {data} = await axiosInstance.patch(URL, values);

        if (data.modifiedCount > 0) {
            message.success('review successfully')
        }
        return true

    }catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
            return false
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
            return false
        }
    }
}
export const assignmentSubmitRequest = async (values)=>{
    try {
        const URL = `/assignments/submit`;
        const {data} = await axiosInstance.put(URL, values, {
            headers: {
                'Content-Type': 'multipart/form-data',
                accept: '*/*'
            }
        });

        if (data?.assignment?.modifiedCount > 0) {
            message.success('assignment re-submit successfully')
        }
        if (data?.assignment?.upsertedId){
            message.success('assignment submit successfully')
        }

        return true

    }catch (e) {
        if (e?.response?.status === 500){
            message.error("Server error occurred")
            return false
        }else if(e?.response?.status === 401 ){
            logOut()
        } else if (e?.response?.status === 400 || e?.response?.status === 403) {
            message.error(e?.response?.data?.error)
            return false
        }
    }
}