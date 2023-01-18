import axios from "axios";

export const api = axios.create({
	baseURL: 'https://api.thecatapi.com/v1'
});
api.defaults.headers.common['X-API-KEY'] = 'live_XTd3skGaIZ4bJVqKnaa6db01fvPZ2JdPqIoGzLMYq5fsi1IVvbKsg2IIkzwm4IKM';