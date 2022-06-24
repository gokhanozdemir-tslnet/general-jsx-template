import * as axios from "axios"



export default class ServiceClient {
  constructor() {
    this.apiToken = null;
    this.client = null;
    // this.apiUrl = "https://fakestoreapi.com/";
      this.apiUrl = "http://localhost:3004/";
      
    //process.env.REACT_APP_API_ENDPOINT;
  }

  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");

    let headers = {
        Accept: "application/json",
    };

    if (this.api_token) {
      headers.Authorization = `Bearer ${this.api_token}`;
    }

    this.client = axios.create({
      baseURL: this.apiUrl,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

    getProductsAsync = async ( params) => {
      console.log(params)
        return await this.init().get(`todos}`) //), { params: params });
  };
}
