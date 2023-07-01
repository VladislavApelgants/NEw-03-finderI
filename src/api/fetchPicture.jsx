
import axios from 'axios';
// import { Component } from 'react';
axios.defaults.baseURL = 'https://pixabay.com/api'
const KEY = '23530022-92f1b2e37220c2d922c4e208a'


export async function fetchImage(value, page) {
     try {
      const response = await axios.get(`/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
         console.log(response);
         return response.data
    } catch (error) {
      console.log(error);
    }
}