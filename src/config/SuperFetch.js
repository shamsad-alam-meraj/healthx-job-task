import { baseUrl } from "./apiUrl";
import { getAuth, clearAuth } from "./authFetch";
import axios from "axios";

/**
 * Maps queries to REST API
 *
 * @param {string} url Request url with query, e.g orders?page=1
 * @param {Object} optionProps fetch options, e.g. { method: 'POST', headers: { 'Authorization': 'token' } }
 * @returns {Promise} the Promise for json
 */
const instance = axios.create({
	baseURL: baseUrl,
});

const { token } = getAuth();
instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

if (token) {
	instance.defaults.headers.common["authorization"] = `${token}`;
}

export function updateToken(response) {
	localStorage.setItem("master_token", response.token);
	instance.defaults.headers.common["authorization"] = `${response.token}`;
}


export default async (url, optionsProps = {}, fileUpload) => {
	const options = {
		method: "GET",
		mode: "cors",
		url: url,
		...optionsProps,
	};

	if (fileUpload) {
		delete options.headers["Content-Type"];
	}

	try {
		const response = await instance(options);
		if (response.status === 401 || response.status === 403) {
			clearAuth();
			throw new Error(response.statusText);
		}
		return {
			status: response.status,
			...response.data,
		};
	} catch (error) {
		if (error.response) {
			if (error.response.status === 500 || error.response.status === 402) {
				clearAuth();
			}
			console.error(error.response.data);
			console.error(error.response.status);
			console.error(error.response.headers);
		} else if (error.request) {
			console.error("Request: " + error.request);
		} else {
			console.error("Error: ", error.message);
		}
		return {
			status: error?.response?.status,
			...error.response.data,
		};
	}
};
