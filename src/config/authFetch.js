import axios from "axios";
import { baseUrl } from "./apiUrl";

const instance = axios.create({
	baseURL: baseUrl.mainurl,
});

export const getAuth = () => {
	const token = localStorage.getItem("master_token");
	return {
		token,
	};
};

export const authHeader = () => {
	return {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: `Bearer ${getAuth().token}`,
	};
};

export const clearAuth = () => {
	window.location.href = '/auto-log-out'
};

export default async (url, optionsProps = {}) => {
	const options = {
		method: "GET",
		mode: "cors",
		url,
		...optionsProps,
		headers: new Headers({
			"Content-Type": "application/json",
			Accept: "application/json",
			...optionsProps.headers,
		}),
	};

	try {
		const response = await instance(options);
		if (response.status === 200 || response.status === 201) {
			return {
				status: response.status,
				...response.data,
			};
		} else {
			// const e = new Error(data.message);
			// e.response = data;
			// throw e;
		}
	} catch (e) {
		e.errorData = {
			status: e.response.status,
			...e.response.data,
		};
		throw e;
		// console.log("---AUTH ERROR---", e);
		// return e.response;
	}
};
