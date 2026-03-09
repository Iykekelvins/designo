import { useState } from 'react';

type Fields = Record<string, string>;
type Errors = Record<string, boolean>;

export function useFormValidation(fields: Fields) {
	const [errors, setErrors] = useState<Errors>({});

	const validate = (): boolean => {
		const newErrors: Errors = {};

		Object.entries(fields).forEach(([name, value]) => {
			if (!value.trim()) {
				newErrors[name] = true;
			}
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const clearError = (name: string) => {
		setErrors((prev) => {
			const next = { ...prev };
			delete next[name];
			return next;
		});
	};

	return { errors, validate, clearError };
}
