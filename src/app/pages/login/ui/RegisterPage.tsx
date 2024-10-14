import { input } from '@material-tailwind/react'
import { type } from 'os'
import { parse } from 'path'
import { registrationData } from '../model/registration-schema'

function validate(formData: FormData) {
	const data = Object.fromEntries(formData.entries())
	try {
		registrationData.parse(data)
	} catch (error) {
		// TODO: Показать пользователю сообщение об ошибке
	}
}

export function RegisterPage() {
	return (
		<form onSubmit={e => validate(new FormData(e.target))}>
			<label htmlFor='email'>Электронная почта</label>
			<input id='email' name='email' required />

			<label htmlFor='password'>Пароль (мин. 6 символов)</label>
			<input id='password' name='password' type='password' required />

			<label htmlFor='confirmPassword'>Подтвердите пароль</label>
			<input
				id='confirmPassword'
				name='confirmPassword'
				type='password'
				required
			/>
		</form>
	)
}
