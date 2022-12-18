import { Country, Currency } from 'shared/consts/common';
import exp from 'constants';

export interface ProfileType{
	first?: string,
	lastname?: string,
	age?: number,
	currency?:Currency,
	country?: Country,
	city?: string,
	avatar?: string
}

export interface ProfileSchema {
	data?:ProfileType
	form?:ProfileType
	isLoading: boolean,
	error?: string
	readonly:boolean
}
