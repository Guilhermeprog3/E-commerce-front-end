import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
export const pagamentoSim = () => {
  return (
    <>
      <main>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem',
          }}
          className="icone-checklist">
          <CheckCircleIcon
            sx={{
              color: 'green',
              fontSize: '350px',
              right: '350px',
            }}
          />
        </div>
        <div className="text-main">
          <div style={{ fontFamily: 'Arial', fontWeight: 500, textAlign: 'center' }}>
            <Typography
              variant="h5"
              gutterBottom>
              COMPRA CONCLUIDA COM SUCESSO
            </Typography>
          </div>
        </div>
      </main>
    </>
  );
};
