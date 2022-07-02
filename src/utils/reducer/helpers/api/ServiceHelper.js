import * as axios from "axios"
import { ServiceConfig, ServiceTodoType } from "./Service.settings";



export default class ServiceHelper {


  init = () => {
    // this.api_token = getCookie("ACCESS_TOKEN");
    this.client = axios.create(ServiceConfig.TodoApiConfig);
    return this.client;
  };

    getAsync = async () => await this.init().get(ServiceTodoType.GET_TODOS);
    addAsync = async (params) => await this.init().post(ServiceTodoType.ADD_TODO, params) 
    putAsync = async (param) => await this.client.put("todos", param).then((response) => response.data);
    deleteAsync = async (param) => await this.client.delete("todos").then((response) => response.data);
}
