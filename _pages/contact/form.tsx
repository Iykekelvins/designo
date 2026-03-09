'use client';

import { useState } from 'react';
import { useFormValidation } from '@/hooks/useFormValidation';

import Input from '@/components/input';
import Button from '@/components/button';

const initialState = {
	name: '',
	email: '',
	phone: '',
	message: '',
};

export default function Form() {
	const [payload, setPayload] = useState(initialState);
	const { errors, validate, clearError } = useFormValidation(payload);

	const handlePayload = (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;

		setPayload({
			...payload,
			[name]: value,
		});

		clearError(name);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!validate()) return;

		alert('Form Submitted!');
		setPayload(initialState);
	};

	return (
		<form
			className='des:max-w-95 w-full space-y-[max(1.5625rem,25px)] relative z-2'
			onSubmit={handleSubmit}>
			<Input
				value={payload.name}
				name='name'
				placeholder='Name'
				onChange={handlePayload}
				error={errors.name}
			/>
			<Input
				value={payload.email}
				name='email'
				placeholder='Email Address'
				onChange={handlePayload}
				error={errors.email}
			/>
			<Input
				value={payload.phone}
				name='phone'
				placeholder='Phone'
				onChange={handlePayload}
				error={errors.phone}
			/>
			<Input
				value={payload.message}
				name='message'
				placeholder='Your Message'
				onChange={handlePayload}
				textArea
				error={errors.message}
			/>
			<div className='flex justify-center sm:justify-end'>
				<Button variant='secondary' className='px-[max(3rem,48px)]!'>
					Submit
				</Button>
			</div>
		</form>
	);
}
