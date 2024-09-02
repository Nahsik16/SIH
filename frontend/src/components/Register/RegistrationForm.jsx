import React, { useState } from 'react';
import axios from 'axios';
import {
    TextField,
    Button,
    MenuItem,
    Container,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const roles = [
    { value: 'alumini', label: 'Alumni' },
    { value: 'faculty', label: 'Faculty' },
];


const branches = [
    { value: 'AI&DS', label: 'AI & DS' },
    { value: 'CS', label: 'CSE' },
    { value: 'Chemical', label: 'Chemical' },
    { value: 'EXTC', label: 'EXTC' },
    { value: 'IT', label: 'IT' },

    // Add more branches as required
];

const RegistrationForm = () => {
    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        email: '',
        username: '',
        role: '',
        branch: '',
        year: '',
        currentcompany: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/user/register', formValues);
            console.log('Response:', response.data);
            navigate('/');
            // Optionally, handle success (e.g., show a success message)
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again later.');
            // Optionally, handle error (e.g., show an error message)
        }
    };

    return (
        <Container maxWidth="sm" style={{ paddingTop: '20px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Registration Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            name="fname"
                            value={formValues.fname}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            name="lname"
                            value={formValues.lname}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="email"
                            type="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Username"
                            variant="outlined"
                            fullWidth
                            name="username"
                            value={formValues.username}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            label="Role"
                            variant="outlined"
                            fullWidth
                            name="role"
                            value={formValues.role}
                            onChange={handleInputChange}
                        >
                            {roles.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            label="Branch"
                            variant="outlined"
                            fullWidth
                            name="branch"
                            value={formValues.branch}
                            onChange={handleInputChange}
                        >
                            {branches.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Year of Graduation"
                            variant="outlined"
                            fullWidth
                            name="year"
                            type="number"
                            value={formValues.year}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Current Company"
                            variant="outlined"
                            fullWidth
                            name="currentcompany"
                            value={formValues.currentcompany}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default RegistrationForm;
