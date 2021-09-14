
import React from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { FormControl, Button, InputLabel, Input } from '@material-ui/core';

export default function Signup(){

    return(
<ValidatorForm>

<FormControl>

    <InputLabel required htmlFor="my-input">First Name</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>

<FormControl>
    <InputLabel required htmlFor="my-input">Last Name</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>


<FormControl>
    <InputLabel required htmlFor="my-input">Email</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>

<FormControl>
    <InputLabel required htmlFor="my-input">Password</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>

<FormControl>
    <InputLabel required htmlFor="my-input">Contact Phone</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>
<br></br>

<Button type="submit" variant="contained" color="primary">Register</Button>

</ValidatorForm>
    )
}


