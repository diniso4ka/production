import { Country, Currency } from 'shared/consts/common';
import exp from 'constants';

export interface ProfileType{
	first: string,
	lastname: string,
	age: 21,
	currency:Currency,
	country: Country,
	city: string,
	avatar: string
}

export interface ProfileSchema {
	data?:ProfileType
	isLoading: boolean,
	error?: string
	readonly:boolean
}
