interface InputProps {
	value: string;
	name: string;
	placeholder: string;
	textArea?: boolean;
	error?: boolean;
	onChange: (
		e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
}

export default function Input({
	value,
	name,
	placeholder,
	textArea,
	onChange,
	error,
}: InputProps) {
	return (
		<div
			className={`relative border-b border-b-white transition-all
      duration-300 ease-in-out focus-within:border-b-3
      ${value.trim() ? 'border-b-3' : ''}
    `}>
			{!textArea ? (
				<input
					type={name !== 'email' ? 'text' : 'email'}
					name={name}
					id={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					className='border-0 outline-0 w-full px-[max(1rem,16px)] 
        pb-[max(0.6875rem,11px)] text-white text-15 font-medium 
        placeholder:opacity-50'
				/>
			) : (
				<textarea
					name={name}
					id={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					className='border-0 outline-0 w-full px-[max(1rem,16px)] 
          pb-[max(0.6875rem,11px)] text-white text-15 font-medium 
          placeholder:opacity-50 h-[max(6.375rem,102px)] resize-none'
				/>
			)}
			{error && (
				<p
					className='absolute right-0 top-0
        flex items-center gap-[max(0.625rem,9px)]
        pointer-events-none
        '>
					<span className='text-[max(0.75rem,12px)] italic text-white'>
						Can’t be empty
					</span>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g id='Group 8'>
							<circle id='Oval' cx='10' cy='10' r='10' fill='white' />
							<g id='Group 7'>
								<path
									id='Combined Shape'
									fillRule='evenodd'
									clipRule='evenodd'
									d='M11 5H9V12H11V5ZM11 14H9V16H11V14Z'
									fill='#E7816B'
								/>
							</g>
						</g>
					</svg>
				</p>
			)}
		</div>
	);
}
