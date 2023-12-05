import React, {useState} from 'react';
import axios, {AxiosResponse} from 'axios';

axios.defaults.baseURL = 'https://kami-backend-5rs0.onrender.com/';
const [token, setToken] = useState('');

export const Authen = () =>{
    return (
        axios.post('auth', 
        {
            Phone: '0373007856', password: '123'
        }         
        ).then(res => {
            setToken(res.token).
            console.log(res.data);
        })
        

    );
}

export const List = async () => {
    return (        
        await axios.get('services', {headers:{'Authoriztion':`Bearer ${token} `}}).
            then(res => {
                console.log(res.data)
            })
    );
}
export const Detail = async (id) => {
    return(
        await axios.get(`service/${id}`, {headers:{'Authoriztion':`Bearer ${token} `}})
        .then(res =>{
            console.log(res.data);
        })
    );
}
export const Add = async (nameS, priceS) =>{
    return (
        await axios.post('services', {
        headers:{'Authoriztion':`Bearer ${token} `},
        data:{
            name: nameS,
            price: priceS
        }
        })
        .then(res => {
            console.log(res.data)
        })
    );
}

export const Update = async (id,nameS, priceS ) =>{
    return(
        await axios.put(`service/${id}`,{
            headers:{'Authoriztion':`Bearer ${token} `},
            data:{
                name: nameS,
                price: priceS
            }
            }
        ).then(res =>{
            console.log(res.data)
        })
    );
}

export const Delete = async (id) => {
    return (
        await axios.delete(`service/${id}`,{ headers:{'Authoriztion':`Bearer ${token} `}}
        
        ).then(res => {
            console.log(res.data)
        })
    );
}

