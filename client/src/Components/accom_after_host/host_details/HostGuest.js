import React from 'react';
import Select from '@material-ui/core/Select';

function HostGuest({ register, counter }) {
	return (
		<>
			<Select
				native
				inputProps={{
					name: 'numberOfGuests',
					ref: register({ required: true }),
				}}
				style={{ width: '100%', padding: '1rem' }}
			>
				<option aria-label="None" value="" />
				{counter.map((guest, i) => (
					<option key={i} value={`${guest}`}>{`For ${guest} guest`}</option>
				))}
			</Select>
		</>
	);
}

export default HostGuest;
