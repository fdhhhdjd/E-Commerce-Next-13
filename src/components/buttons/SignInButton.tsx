'use client';

import { Menu, MenuHandler, MenuList } from '@material-tailwind/react';
import toast from 'react-hot-toast';

import Button from './Button';

export const SignInButton = () => {
	const handleSignIn = async (provider: 'github' | 'twitch') => {
		toast.success('Login ' + provider);
	};

	return (
		<Menu placement="bottom-end">
			<MenuHandler>
				<div className="py-2 px-6 rounded-md cursor-pointer bg-zinc-700 hover:bg-zinc-800 text-white text-sm">
					Login
				</div>
			</MenuHandler>
			<MenuList className="rounded-md bg-zinc-100 p-3 shadow-md mb-2 z-[2] min-w-[200px]">
				<p className="text-[14px]">Select provider:</p>
				<Button
					className="w-full py-2 mb-1 bg-gray-800 hover:bg-gray-900 text-white rounded-md flex flex-row items-center justify-center"
					onClick={() => handleSignIn('github')}
				>
					GitHub
				</Button>

				<Button
					className="w-full py-2 mb-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md flex flex-row items-center justify-center"
					onClick={() => handleSignIn('twitch')}
				>
					Twitch
				</Button>
			</MenuList>
		</Menu>
	);
};
