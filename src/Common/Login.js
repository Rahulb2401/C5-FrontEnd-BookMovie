

import React from 'react';
import {  ValidatorForm } from 'react-material-ui-form-validator';
import { FormControl, Button, InputLabel, Input } from '@material-ui/core';

export default function Login(){


return(

<ValidatorForm>

<FormControl>

    <InputLabel required htmlFor="my-input">Username</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>

<FormControl>
    <InputLabel required htmlFor="my-input">Password</InputLabel>
    <Input required type = "password" id="my-input" aria-describedby="my-helper-text"  />
</FormControl>
<br></br>
<br></br>

<Button type="submit" variant="contained" color="primary">Login</Button>
</ValidatorForm>

)

}

