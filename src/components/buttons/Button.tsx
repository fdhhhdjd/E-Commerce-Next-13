'use client';

//* LIB
import React, { useState } from 'react';
import { FiLoader } from 'react-icons/fi';

//* IMPORT
import cn from '@/src/helpers/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isLoading?: boolean;
	localLoaderOnClick?: boolean; // default to true
	disabled?: boolean;
	children: React.ReactNode;
	color?: 'primary' | 'secondary' | 'red';
}

const Button = ({
	onClick,
	className = '',
	isLoading = false,
	localLoaderOnClick = true,
	disabled = false,
	children,
	color,
	...props
}: ButtonProps) => {
	const [isLocalLoading, setLocalLoading] = useState(false);

	const isLoadStatus = isLoading || (localLoaderOnClick && isLocalLoading);

	const baseClassName = 'rounded-md ease-in duration-100 flex flex-row items-center justify-center text-[14px]';
	const primaryClassName = cn(
		baseClassName,
		'bg-zinc-700 hover:bg-zinc-900 text-gray-100',
		isLoadStatus || (disabled && 'bg-zinc-900 cursor-not-allowed')
	);
	const secondaryClassName = cn(
		baseClassName,
		'border border-zinc-300 hover:bg-zinc-200 text-zinc-600',
		isLoadStatus || (disabled && 'bg-zinc-200 cursor-not-allowed')
	);
	const redClassName = cn(
		baseClassName,
		'bg-red-800 hover:bg-red-900 text-gray-100',
		isLoadStatus || (disabled && 'bg-red-900 cursor-not-allowed')
	);

	const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		if (disabled || isLoadStatus) return;
		setLocalLoading(true);

		if (onClick) onClick(e);
	};

	return (
		<button
			className={cn(
				disabled && 'cursor-not-allowed',
				color === 'primary'
					? primaryClassName
					: color === 'secondary'
					? secondaryClassName
					: color === 'red' && redClassName,
				className
			)}
			disabled={disabled || isLoadStatus}
			onClick={handleClick}
			{...props}
		>
			{isLoadStatus ? <FiLoader className="m-1" /> : <>{children}</>}
		</button>
	);
};

export default Button;
