import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTRIES } from '../../helpers/constants/countries';
import { updateBlackList } from '../../store/reducers/settings/actionCreators';
import { selectBLackListCountries } from '../../store/reducers/settings/selectors';
import { ChipList } from '../chipList/ChipList';
import { TranslatedText } from '../translatedText/TranslatedText';
import { Autocomplete, Box, Divider, Stack, TextField } from '@mui/material';

type T_Props = {};

const Countries: FC<T_Props> = () => {
	const [inputValue, setInputValue] = useState<{ code: string; label: string } | null>({
		code: '',
		label: ''
	});
	const blockedCountries = useSelector(selectBLackListCountries);
	const dispatch = useDispatch();

	const unblockCountry = useCallback(
		(country: string) => {
			dispatch(
				updateBlackList({
					countries: blockedCountries.filter((c) => c !== country)
				})
			);
		},
		[blockedCountries]
	);

	const filteredCountries = useMemo(() => {
		return COUNTRIES.filter((c) => !blockedCountries.includes(c.label));
	}, [blockedCountries]);

	return (
		<Stack spacing={2}>
			<Autocomplete
				options={filteredCountries}
				autoHighlight
				getOptionLabel={(option) => option.label}
				openOnFocus
				clearIcon={null}
				blurOnSelect
				value={inputValue}
				onChange={(_, option) => {
					setInputValue(option);
					const selectedCountry = String(option?.label);
					if (!blockedCountries.includes(selectedCountry)) {
						dispatch(
							updateBlackList({
								countries: [...blockedCountries, selectedCountry]
							})
						);
					}
					setInputValue({ code: '', label: '' });
				}}
				onInput={(e: any) => setInputValue({ code: '', label: e.target.value })}
				renderOption={(props, option) => (
					<Box
						component='li'
						sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
						{...props}
					>
						<img
							loading='lazy'
							width='20'
							src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
							srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
							alt={option.label}
						/>
						{option.label} ({option.code})
					</Box>
				)}
				renderInput={(params) => (
					<TextField
						{...params}
						label={<TranslatedText>Choose a country to Block</TranslatedText>}
						inputProps={{
							...params.inputProps,
							autoComplete: 'new-password',
							name: Math.random().toString()
						}}
					/>
				)}
			/>
			{!!blockedCountries.length && (
				<>
					<Divider />
					<ChipList
						list={blockedCountries}
						onRemoveClick={unblockCountry}
						label='Blocked Countries'
					/>
				</>
			)}
		</Stack>
	);
};

export { Countries };
