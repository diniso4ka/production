import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
	NO_DATA ='NO_DATA',
	INCORRECT_USER_DATA ='INCORRECT_USER_DATA',
	INCORRECT_CITY ='INCORRECT_CITY',
	INCORRECT_AGE ='INCORRECT_AGE',
	INCORRECT_USERNAME ='INCORRECT_USERNAME',
	SERVER_ERROR= 'SERVER_ERROR'
}

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
	validateErrors?: ValidateProfileError[]
	readonly:boolean
}
