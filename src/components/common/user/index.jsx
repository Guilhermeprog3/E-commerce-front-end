import React, { useState, useContext } from 'react';
import {
  TextField,
  Button,
  Grid,
  InputAdornment,
  IconButton,
  Typography,
  Box,
  MenuItem
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { PatchUser, PostPf, PostEnd, GetUser, PatchPf, PatchEnd } from '../../../server/api';
import CircularIndeterminate from '../circularIndeterminate';
import { AuthContext } from '../../../context/authContext';

export default function UserProfileForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { user } = useContext(AuthContext);

  const [formData_user, setFormData_user] = useState({});
  const [formData_user_length, setFormData_user_length] = useState(0);
  const [formData_end_length, setFormData_end_length] = useState(0);
  const [formData_end, setFormData_end] = useState([]);
  const [createFormData_end, setcreateFormData_end] = useState([]);
  const [formData_perfil, setFormData_perfil] = useState([]);

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  React.useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const UserResponse = await GetUser(user.email)

        setFormData_user(UserResponse.data.user);
        setFormData_perfil(UserResponse.data.user.Profiles)
        setFormData_end(UserResponse.data.user.Address)
        setFormData_user_length(UserResponse.data.user.Address.length)
        setFormData_end_length(UserResponse.data.user.Profiles.length)

      } catch (error) {
        setErrorMessage(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularIndeterminate />;
  }

  if (error) {
    return <p>{errorMessage}</p>;
  }

  const handleCancel = () => {
    navigate('/home');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData_user({ ...formData_user, [name]: value });
  };

  const handleInputChangePerfil = (event, index) => {
    const { name, value } = event.target;
    const updatedPerfil = [...formData_perfil];
    updatedPerfil[index] = { ...updatedPerfil[index], [name]: value };
    setFormData_perfil(updatedPerfil);
  };

  const handleInputCreatePerfil = (event) => {
    const { name, value } = event.target;
    const updatedFormData = [...formData_perfil];

    if (updatedFormData.length === 0) {
      updatedFormData.push({
        [name]: value,
        userId: user.id
      });
    } else {
      updatedFormData[0] = {
        ...updatedFormData[0],
        [name]: value
      };
    }

    setFormData_perfil(updatedFormData);
  };

  const handleInputCreateEndereco = (event) => {
    const { name, value } = event.target;

    setcreateFormData_end(prevEndereco => ({
      ...prevEndereco,
      [name]: value,
      userId: user.id
    }));
  };

  const handleInputChangeEndereco = (event, index) => {
    const { name, value } = event.target;
    const updatedEndereco = [...formData_end];
    updatedEndereco[index] = { ...updatedEndereco[index], [name]: value };
    setFormData_end(updatedEndereco);
  };


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const formatDateForDisplay = (date) => {
    if (!date) return '';
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async () => {
    try {
      let formDataEndWithoutIdUser = new FormData();
      formDataEndWithoutIdUser.append("name", formData_user.name);
      formDataEndWithoutIdUser.append("password", formData_user.password);

      if (formData_user.avatar instanceof File) {
        formDataEndWithoutIdUser.append("file", formData_user.avatar);
      }

      const { idUserProfile, ...formDataEndWithoutIdProfile } = formData_perfil[0];
      const { idUserAddress, ...formDataEndWithoutIdAddress } = formData_end[0];

      const responseUser = await PatchUser(formDataEndWithoutIdUser, user.id);
      const responseProfile = await PatchPf(formDataEndWithoutIdProfile, formData_perfil[0].id);
      const responseEndereco = await PatchEnd(formDataEndWithoutIdAddress, formData_end[0].id);
      setSuccessMessage('Dados atualizados com sucesso!');
      setErrorMessage('');

    } catch (error) {
      // Define mensagens de erro específicas
      console.error("Erro ao atualizar dados:", error);
      setErrorMessage('Erro ao atualizar dados. Por favor, tente novamente.');
      setSuccessMessage('');
    }
  };


  const handleSubmitProfile = () => {
    try {
      const response = PostPf(formData_perfil[0]);
      setSuccessMessage('Perfil criado com sucesso!');
    } catch (error) {
      setErrorMessage('Erro ao atualizar dados.');
      setSuccessMessage('');
    }
  };

  const handleSubmitAddress = () => {
    try {
      const response = PostEnd(createFormData_end);
      setcreateFormData_end([])
      setSuccessMessage('Endereço criado com sucesso!');
    } catch (error) {
      setErrorMessage('Erro ao atualizar dados.');
      setSuccessMessage('');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '20px', borderRadius: '10px' }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ padding: '20px', backgroundColor: '#0f1624', borderRadius: '10px', marginBottom: '20px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src={formData_user.avatar instanceof File ? URL.createObjectURL(formData_user.avatar) : formData_user.avatar}
                alt="User"
                style={{ width: '70%', borderRadius: '10px', marginBottom: '10px' }}
              />
              <Button
                variant="contained"
                component="label"
                sx={{ marginTop: '10px', backgroundColor: 'white', color: 'black' }}
              >
                Escolher Foto
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setFormData_user({ ...formData_user, avatar: e.target.files[0] });
                    }
                  }}
                />
              </Button>
            </Grid>

            <Grid item xs={12} sm={9} container>
              <Grid item xs={12} sm={8}>
                <Typography variant="h6" sx={{ marginBottom: '10px' }}>Informações de Login</Typography>
                <TextField fullWidth label="Nome" name="name" value={formData_user.name} onChange={handleInputChange} margin="dense" InputProps={{ style: { backgroundColor: 'white', color: 'black' } }} InputLabelProps={{ style: { color: '#000000' } }} />
                <TextField fullWidth label="Email" name="email" value={formData_user.email} onChange={handleInputChange} margin="dense" InputProps={{ style: { backgroundColor: 'white', color: 'black' } }} InputLabelProps={{ style: { color: '#000000' } }} />

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Senha" name="password" type={showPassword ? 'text' : 'password'} margin="dense" InputProps={{
                      style: { backgroundColor: 'white', color: 'black' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }} InputLabelProps={{ style: { color: '#000000' } }} onChange={handleInputChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Confirme a senha" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} margin="dense" InputProps={{
                      style: { backgroundColor: 'white', color: 'black' },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowConfirmPassword}>
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }} InputLabelProps={{ style: { color: '#000000' } }} onChange={handleInputChange} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ padding: '20px', backgroundColor: '#4B5563', borderRadius: '10px', marginBottom: '20px', color: 'white' }}>
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>Suas Informações Pessoais</Typography>

          {formData_end_length > 0 ? (
            formData_perfil.map((perfis, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Primeiro Nome"
                    name="firstName"
                    value={perfis.firstName}
                    onChange={(e) => handleInputChangePerfil(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Sobrenome"
                    name="lastName"
                    value={perfis.lastName}
                    onChange={(e) => handleInputChangePerfil(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CPF"
                    name="cpf"
                    value={perfis.cpf}
                    onChange={(e) => handleInputChangePerfil(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data de Nascimento"
                    name="birthDate"
                    type="date"
                    value={formatDateForDisplay(perfis.birthDate)}
                    onChange={(e) => handleInputChangePerfil(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="DDD"
                    name="ddd"
                    value={perfis.ddd}
                    onChange={(e) => handleInputChangePerfil(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefone"
                    name="phone"
                    value={perfis.phone}
                    onChange={(e) => handleInputChangePerfil(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Gênero"
                    name="genero"
                    value={perfis.genero}
                    onChange={(e) => handleInputChangePerfil(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  >
                    <MenuItem value="FEMININO">Feminino</MenuItem>
                    <MenuItem value="MASCULINO">Masculino</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
            ))
          ) : (
            <>
              <Grid container spacing={2} key="0">
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Primeiro Nome"
                    name="firstName"
                    value={formData_perfil[0]?.firstName || ''}
                    onChange={(e) => handleInputCreatePerfil(e)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Sobrenome"
                    name="lastName"
                    value={formData_perfil[0]?.lastName || ''}
                    onChange={(e) => handleInputCreatePerfil(e)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CPF"
                    name="cpf"
                    value={formData_perfil[0]?.cpf || ''}
                    onChange={(e) => handleInputCreatePerfil(e)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Data de Nascimento"
                    name="birthDate"
                    type="date"
                    value={formatDateForDisplay(formData_perfil[0]?.birthDate) || ''}
                    onChange={(e) => handleInputCreatePerfil(e)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="DDD"
                    name="ddd"
                    value={formData_perfil[0]?.ddd || ''}
                    onChange={(e) => handleInputCreatePerfil(e)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefone"
                    name="phone"
                    value={formData_perfil[0]?.phone || ''}
                    onChange={(e) => handleInputCreatePerfil(e)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    label="Gênero"
                    name="genero"
                    value={formData_perfil[0]?.genero || ''}
                    onChange={(e) => handleInputCreatePerfil(e)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  >
                    <MenuItem value="FEMININO">Feminino</MenuItem>
                    <MenuItem value="MASCULINO">Masculino</MenuItem>
                  </TextField>
                </Grid>


              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ color: 'white', marginTop: '10px', margin: '5px' }}>
                  Adicione os dados ao perfil.
                </Typography>
                <Button variant="contained" color="secondary" type="submit" onClick={handleSubmitProfile}>Criar</Button>
              </Box>
              {errorMessage && <Typography sx={{ color: 'red', marginTop: '20px' }}>{errorMessage}</Typography>}
              {successMessage && <Typography sx={{ color: 'green', marginTop: '20px' }}>{successMessage}</Typography>}
            </>
          )}
        </Box>


        <Box
          sx={{
            padding: '20px',
            backgroundColor: '#4B5563',
            borderRadius: '10px',
            marginBottom: '20px',
            color: 'white',
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: '10px' }}>
            Adicionar Endereço
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Rua"
                name="street"
                value={createFormData_end.street || ""}
                onChange={(e) => handleInputCreateEndereco(e)}
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Número da Rua"
                name="streetNumber"
                value={createFormData_end.streetNumber || ""}
                onChange={(e) => handleInputCreateEndereco(e)}
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cidade"
                name="city"
                value={createFormData_end.city || ""}
                onChange={(e) => handleInputCreateEndereco(e)}
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Cep"
                name="zipCode"
                value={createFormData_end.zipCode || ""}
                onChange={(e) => handleInputCreateEndereco(e)}
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bairro"
                name="neighbourhood"
                value={createFormData_end.neighbourhood || ""}
                onChange={(e) => handleInputCreateEndereco(e)}
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Lugar público"
                name="publicPlace"
                value={createFormData_end.publicPlace || ""}
                onChange={(e) => handleInputCreateEndereco(e)}
                margin="dense"
                InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                InputLabelProps={{ style: { color: '#000000' } }}
              />
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', margin: '2px', marginLeft: '15px' }}>
              {formData_user_length === 0 && (
                <Typography variant="h6" sx={{ color: 'white' }}>
                  Nenhum endereço criado.
                </Typography>
              )}
              <Button variant="contained" color="secondary" onClick={handleSubmitAddress} sx={{ height: '45px' }}>
                Criar
              </Button>
            </Box>


            {errorMessage && (
              <Grid item xs={12}>
                <Typography sx={{ color: 'red', marginTop: '20px' }}>{errorMessage}</Typography>
              </Grid>
            )}
            {successMessage && (
              <Grid item xs={12}>
                <Typography sx={{ color: 'black', marginTop: '20px' }}>{successMessage}</Typography>
              </Grid>
            )}
          </Grid>
        </Box>


        {
          formData_end.map((endereco, index) => (
            <Box
              key={index}
              sx={{
                padding: '20px',
                backgroundColor: '#4B5563',
                borderRadius: '10px',
                marginBottom: '20px',
                color: 'white',
              }}
            >
              <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                Endereço Existente
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Rua"
                    name="street"
                    value={endereco.street || ""}
                    onChange={(e) => handleInputChangeEndereco(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Número da Rua"
                    name="streetNumber"
                    value={endereco.streetNumber || ""}
                    onChange={(e) => handleInputChangeEndereco(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Cidade"
                    name="city"
                    value={endereco.city || ""}
                    onChange={(e) => handleInputChangeEndereco(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Cep"
                    name="zipCode"
                    value={endereco.zipCode || ""}
                    onChange={(e) => handleInputChangeEndereco(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Bairro"
                    name="neighbourhood"
                    value={endereco.neighbourhood || ""}
                    onChange={(e) => handleInputChangeEndereco(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Lugar público"
                    name="publicPlace"
                    value={endereco.publicPlace || ""}
                    onChange={(e) => handleInputChangeEndereco(e, index)}
                    margin="dense"
                    InputProps={{ style: { backgroundColor: 'white', color: 'black' } }}
                    InputLabelProps={{ style: { color: '#000000' } }}
                  />
                </Grid>
              </Grid>
            </Box>
          ))
        }


        < Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="contained" color="primary" onClick={handleCancel}>Cancelar</Button>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>Salvar</Button>
        </Box>

        {successMessage && <Typography sx={{ color: 'green', marginTop: '20px' }}>{successMessage}</Typography>}
        {errorMessage && <Typography sx={{ color: 'red', marginTop: '20px' }}>{errorMessage}</Typography>}
      </form >
    </Box >
  );
}

