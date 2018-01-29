import axios from "axios";
axios.defaults.baseURL="http://localhost:9000";
axios.interceptors.response.use((res)=>res.data);
export let getSliders = ()=>{
  return axios.get("/sliders");
};
export let getHomeHot = ()=>{
  return axios.get("/homeHot");
};
export let updateHomeHot=()=>{
  return axios.get("/updateHomeHot");
};


export let getProducts=(type)=>{
  return axios.get(`/products/${type}`);
};


export let getOneProduct=(id)=>{
  return axios.get(`/product/${id}`);
};
// export let getProducts=(offset,limit,type)=>{
//   return axios.get(`/products/${offset}/${limit}/${type}`);
// };
export let getHotProducts=(offset,limit,type)=>{
  return axios.get();
};
export let getCheapProducts=(offset,limit)=>{
  return axios.get();
};
export let login=()=>{

};
export let reg=()=>{

};