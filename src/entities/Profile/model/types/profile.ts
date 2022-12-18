import exp from 'constants';
import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export interface ProfileType{
	first?: string,
	lastname?: string,
	username?: string,
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
