
type valFunc = (value: string) => boolean;

type valFuncObj = {
	[key in string] : {
		isInvalid: valFunc;
		message: string;
	}[]
}

const validationFunctions : valFuncObj = {
	speciesName: 
		[
			{
				isInvalid: (value: string) => (value.length < 3 || value.length > 23),
				message: 'Species Name must be between 3 and 23 characters'
			},
			{
				isInvalid: (value: string) => (!(/^[a-zA-Z ]+$/).test(value)),
				message: 'Species Name must not contain numbers or special characters'
			}
		],

	planetName: 
		[
			{
				isInvalid: (value: string) => (value.length < 2 || value.length > 49),
				message: 'Planet Name must be between 2 and 49 characters'
			},
			{
				isInvalid: (value: string) => (!(/^[a-zA-Z\d ]+$/).test(value)),
				message: 'Planet Name must not contain special characters'
			}
		],

	beings:
		[
			{
				isInvalid: (value: string) => (!(/^\d+$/).test(value)),
				message: 'Must be a number'
			},
			{
				isInvalid: (value: string) => (parseInt(value) < 1e9),
				message: 'There must be at least 1,000,000,000 members of a species'
			}
		],

	sum:
		[
			{
				isInvalid: (value: string) => (value === 'Not 4'),
				message: 'This is not correct'
			},
		],
	
	spare:
		[
			{
				isInvalid: (value: string) => (value.length < 17 || value.length > 153),
				message: 'Reason must be between 17 and 153 characters'
			},
		],
}

export const validate = (newInput: string, id: string) => {
	return validationFunctions[id].reduce((response: string | undefined, validation) => {
		if (response === undefined && validation.isInvalid(newInput))
			return validation.message;

		return response;
	}, undefined);
} 
