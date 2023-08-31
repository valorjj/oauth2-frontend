/** @format */
'use client';

import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Page({ params }) {
	const router = useRouter();

	const provider = params.provider;
	const searchParams = useSearchParams();
	const code = searchParams.get('code');

	const handleOAuth2LoginRequest = async () => {
		try {
			console.log('trying to get access and refresh token');
			const response = await axios.get(`http://localhost:8081/oauth2/login/${provider}?code=${code}`);
			const data = response.data;
			console.log('data', data);
			router.push('/');
		} catch (error) {
			console.error(error);
			router.push('/');
		}
	};

	useEffect(() => {
		handleOAuth2LoginRequest();
	}, [code]);

	return (
		<div>
			<h4>processing login request...</h4>
		</div>
	);
}
