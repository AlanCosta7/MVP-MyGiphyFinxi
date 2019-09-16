import axios from 'axios'

export default {

    listar:(query) => {
        let url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=LM9cU9ZVtjMgkhL3nc73jZnStzD55yCJ&offset=0&lang=pt`
        return axios.get(url)
    },

    getId: (id) => {
        let url = `https://api.giphy.com/v1/gifs/${id}?api_key=LM9cU9ZVtjMgkhL3nc73jZnStzD55yCJ`
        return axios.get(url)
    }
}