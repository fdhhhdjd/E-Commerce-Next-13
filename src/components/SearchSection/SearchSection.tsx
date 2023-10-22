'use client';

//* LIB
import { Dialog, DialogBody } from '@material-tailwind/react';
import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';

//* IMPORT
import SearchProductSection from './SearchProductSection';
import { LIMIT_SEARCH_INPUT } from '../../utils/constants';
import Button from '../buttons/Button';
import NotFoundText from '../NotFoundText';

const SearchSection = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [search, setSearch] = useState('');
	const handleOpen = () => setIsOpen(!isOpen);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounced = useCallback(
		debounce((val: string) => {
			setSearch(val);
		}, 500),
		[]
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);

		const trimmedValue = e.target.value.slice(0, LIMIT_SEARCH_INPUT).trim();
		if (trimmedValue !== search) {
			debounced(e.target.value.slice(0, LIMIT_SEARCH_INPUT).trim());
		}
	};

	return (
		<>
			<Button className="sm:px-3 px-2 py-[8px]" onClick={handleOpen} color="secondary" localLoaderOnClick={false}>
				<AiOutlineSearch className="mr-1 sm:text-lg text-sm" />
				Search <span className="ml-1 sm:block hidden">something...</span>
			</Button>
			<Dialog
				dismiss={{
					enabled: false,
				}}
				className="w-full mx-auto max-w-[77rem] xl:px-0 px-2 pt-6 bg-gray-100 mt-20 shadow-md border border-zinc-300 rounded-md"
				open={isOpen}
				handler={handleOpen}
			>
				<DialogBody className="block">
					<div className="mx-auto max-w-6xl flex flex-row items-center justify-between pb-4 border-b border-zinc-300">
						<input
							value={inputValue}
							onChange={handleInputChange}
							placeholder="Search something..."
							className="sm:py-3 py-[10px] px-6 border border-zinc-300 focus:outline-none rounded-md sm:w-[40%] w-full sm:mr-0 mr-1"
						/>
						<Button color="secondary" localLoaderOnClick={false} onClick={handleOpen} className="py-3 px-6">
							Close
							<AiOutlineClose className="ml-1" />
						</Button>
					</div>
					<div className="pt-4 max-h-[70vh] overflow-y-auto">
						{search ? (
							<SearchProductSection search={search} onClose={() => setIsOpen(false)} />
						) : (
							<NotFoundText>Start Typing...</NotFoundText>
						)}
					</div>
				</DialogBody>
			</Dialog>
		</>
	);
};

export default SearchSection;
