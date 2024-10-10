import CancelIcon from '@mui/icons-material/Cancel';
import { Typography } from '@mui/material';
export const pagamentoRec = () => {
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
          <CancelIcon
            sx={{
              color: 'red',
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
              COMPRA RECUSADA
            </Typography>
          </div>
        </div>
      </main>
    </>
  );
};
