import { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid2';

const JobPortal = () => {
  const [jobs] = useState([
    { id: 1, title: 'Software Engineer', description: 'Develop and maintain web applications.', location: 'New York', company: 'Tech Corp', CreatedBy : 'John Doe' },
    { id: 2, title: 'Data Analyst', description: 'Analyze data and create reports.', location: 'San Francisco', company: 'Data Inc',  CreatedBy : 'Svanah Johnson' },
    // Add more jobs here
  ]);

  const handleRegister = (jobId) => {
    alert(`You have successfully registered for Job ID: ${jobId}`);
    // Implement registration logic here
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Job Portal
      </Typography>
      <Grid container spacing={4}>
        {jobs.map((job) => (
          <Grid item key={job.id} xs={12} sm={6} md={4}>
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)', // 3D box shadow effect
                transition: 'transform 0.3s ease-in-out',
                 borderRadius : "10px",
                '&:hover': {
                  transform: 'translateY(-10px)', // Slight lift on hover
                  boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)', // Enhance shadow on hover 
                },
              }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {job.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {job.company}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.location}
                </Typography>
                <Typography variant="body1" paragraph>
                  {job.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Posted By: {job.CreatedBy}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" style={{fontWeight: 600}} onClick={() => handleRegister(job.id)}>
                  Apply
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobPortal;
