import { ChangeEvent, useState } from 'react';

interface LoginFormEntries {
	email: string;
	password: string;
}

function Login() {
	const [formEntries, setFormEntries] = useState<LoginFormEntries>({
		email: '',
		password: '',
	});

	const isValidForm = Boolean(
		formEntries.email.length && formEntries.password.length > 6
	);

	const createHandleInputChange =
		(entryKey: keyof LoginFormEntries) =>
		(event: ChangeEvent<HTMLInputElement>) => {
			const newValue = event.target.value;
			setFormEntries((prevEntries) => ({
				...prevEntries,
				[entryKey]: newValue,
			}));
		};

	return (
		<div className="w-full h-full flex items-center justify-center bg-gray-200/20">
			<div className="px-10 py-14 border shadow rounded items-center w-72 bg-white">
				<form className="flex flex-col gap-y-8">
					<h1 className="m-0">Shopping List Login</h1>
					<div className="flex flex-col">
						<span>Email</span>
						<input
							value={formEntries.email}
							onChange={createHandleInputChange('email')}
						/>
					</div>
					<div className="flex flex-col">
						<span>Password</span>
						<input
							value={formEntries.password}
							onChange={createHandleInputChange('password')}
						/>
					</div>
					<div className="w-full flex flex-col">
						<button disabled={!isValidForm}>Login</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
