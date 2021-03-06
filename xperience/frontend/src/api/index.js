import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001' });

//const API = axios.create({ baseURL: 'https://xperince-project.herokuapp.com/' });


API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const addAttendee = (id, updatedPost) => API.patch(`/posts/${id}/addAttendee`, updatedPost);
export const cancelAttendee = (id, updatedPost) => API.patch(`/posts/${id}/cancelAttendee`, updatedPost);
export const addComment = (id, updatedPost) => API.patch(`/posts/${id}/addComment`, updatedPost);
export const toggleEvent = (id, updatedPost) => API.patch(`/posts/${id}/toggleEvent`, updatedPost);
export const updatePhoto = (id, updatePhoto) => API.patch(`/posts/${id}/updatePhoto`, updatePhoto);
export const updateCount = (id, updateCount) => API.patch(`/posts/${id}/updateCount`, updateCount);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const addPhoto = (id, updatePhoto) => API.patch(`/user/${id}/addPhoto`, updatePhoto);
export const updatePassword = (id, updatePass) => API.patch(`/user/${id}/updatePassword`, updatePass);