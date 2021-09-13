

import React from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { FormControl, Button, InputLabel, Input } from '@material-ui/core';

export default function Login(){


return(

<ValidatorForm>

<FormControl>

    <InputLabel htmlFor="my-input">First Name</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>

<FormControl>
    <InputLabel htmlFor="my-input">Last Name</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<br></br>
<br></br>

<Button type="submit" variant="contained" color="primary">Login</Button>
</ValidatorForm>

)

}

