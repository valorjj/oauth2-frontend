/** @format */
'use client';

import React from 'react';
import axios from 'axios';

export default function LoginPage() {
	const googleLoginApiCall = () => {
		window.location.href = 'http://localhost:8081/oauth2/google';
	};
	const kakaoLoginApiCall = () => {
		window.location.href = 'http://localhost:8081/oauth2/kakao';
	};

	return (
		<div>
			<div className='flex p-2 gap-4'>
				<Button name={'google'} event={googleLoginApiCall} />
				<Button name={'kakao'} event={kakaoLoginApiCall} />
			</div>
		</div>
	);
}

function Button({name, event}) {
	return (
		<button className='p-2 bg-slate-600 text-white' onClick={event}>
			{name} 로그인
		</button>
	);
}
