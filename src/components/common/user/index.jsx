import React, { useState } from 'react';
import { TextField, Button, Grid, InputAdornment, IconButton, Avatar, Typography, Box, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const countryData = [
  { label: 'Argentina', code: '+54' },
  { label: 'Australia', code: '+61' },
  { label: 'Brazil', code: '+55' },
  { label: 'Canada', code: '+1' },
  { label: 'China', code: '+86' },
  { label: 'Denmark', code: '+45' },
  { label: 'France', code: '+33' },
  { label: 'Germany', code: '+49' },
  { label: 'India', code: '+91' },
  { label: 'Italy', code: '+39' },
  { label: 'Japan', code: '+81' },
  { label: 'Mexico', code: '+52' },
  { label: 'Netherlands', code: '+31' },
  { label: 'Portugal', code: '+351' },
  { label: 'Russia', code: '+7' },
  { label: 'South Africa', code: '+27' },
  { label: 'Spain', code: '+34' },
  { label: 'United Kingdom', code: '+44' },
  { label: 'United States', code: '+1' },
  { label: 'Uruguay', code: '+598' }
];

export default function UserProfileForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [phoneCode, setPhoneCode] = useState('');

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    const countryObj = countryData.find(c => c.label === country);
    setPhoneCode(countryObj ? countryObj.code : '');
  };

  return (
    <Box sx={{ width: '100%', maxWidth: { xl: '1200px', lg: "1200px", md: '930px', sm: '90%', xs: '400px' }, margin: '0 auto', padding: '20px', borderRadius: '10px' }}>
      <Box sx={{ padding: '20px', backgroundColor: '#0f1624', borderRadius: '10px', marginBottom: '20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src="https://img.freepik.com/fotos-premium/um-modelo-com-um-modelo-de-rosto-de-mulher-e-uma-sombra-nas-costas_1221953-13101.jpg"
              alt="User Image"
              style={{ width: '70%', borderRadius: '10px', marginBottom: '10px' }}
            />
            <Button variant="contained" component="label" sx={{ marginTop: '10px', backgroundColor: 'white', color: 'black' }}>
              Choose File
              <input type="file" hidden />
            </Button>
          </Grid>

          <Grid item xs={12} sm={9} container>
            <Grid item xs={12} sm={8}>
              <Typography variant="h6" sx={{ marginBottom: '10px' }}>Your login Information</Typography>
              <TextField
                fullWidth
                label="Nome"
                defaultValue="Carol Silva"
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />
              <TextField
                fullWidth
                label="Email"
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Senha"
                    type={showPassword ? 'text' : 'password'}
                    margin="dense"
                    InputProps={{
                      style: { backgroundColor: 'white', color: 'black' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Confirme a senha"
                    type={showConfirmPassword ? 'text' : 'password'}
                    margin="dense"
                    InputProps={{
                      style: { backgroundColor: 'white', color: 'black' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowConfirmPassword}>
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
              </Grid>

            </Grid>

            <Grid item xs={12} sm={4} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar
                src="https://img.freepik.com/fotos-premium/um-modelo-com-um-modelo-de-rosto-de-mulher-e-uma-sombra-nas-costas_1221953-13101.jpg"
                alt="User Avatar"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ padding: '20px', backgroundColor: '#3f4758', borderRadius: '10px', color: 'BLACK' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>Your Personal Information</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              margin="dense"
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              margin="dense"
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              margin="dense"
              InputLabelProps={{ shrink: true, style: { color: '#000000' } }}
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              margin="dense"
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Complemento"
              margin="dense"
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="City"
              margin="dense"
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="State / Province"
              margin="dense"
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Postal Code (CEP)"
              margin="dense"
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              margin="dense"
              InputProps={{
                startAdornment: <InputAdornment position="start">{phoneCode}</InputAdornment>,
                style: { backgroundColor: 'white', color: 'black' }
              }}
              InputLabelProps={{ style: { color: '#000000' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="Country"
              margin="dense"
              value={selectedCountry}
              onChange={handleCountryChange}
              InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
              InputLabelProps={{ style: { color: '#000000' } }}
            >
              {countryData.map((country) => (
                <MenuItem key={country.code} value={country.label}>
                  {country.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
  <Button 
    variant="contained" 
    sx={{ 
      marginRight: '10px', 
      backgroundColor: 'black', 
      color: 'white', 
      padding: '10px 20px',
      '&:hover': { 
        backgroundColor: '#333'
      } 
    }}
  >
    Cancelar
  </Button>
  <Button 
    variant="contained" 
    sx={{ 
      backgroundColor: 'black', 
      color: 'white', 
      padding: '12px 35px',
      '&:hover': { 
        backgroundColor: '#333'
      } 
    }}
  >
    Salvar
  </Button>
</Box>
    </Box>
  );
}
