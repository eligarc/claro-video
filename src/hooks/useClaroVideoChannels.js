import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
const currentDate = new Date();
const date = format(currentDate, 'yyyyMMdd');
const time = format(currentDate, 'HHmmss');
const API = `https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=mexico&HKS=web61144bb49d549&user_id=54343080&date_from=${date}${time}&date_to=${date}235959&quantity=200`;

const useClaroVideoChannels = () => {
	const [channels, setChannels] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const response = await axios(API);
			setChannels(response.data.response.channels);
		}
		getProducts();
	}, []);

	return {
		channels,
	};
};

export default useClaroVideoChannels;
