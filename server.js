import ip from 'ip';
import app from './app';

const ipAddress = ip.address();

const port = 3000;
app.listen(port, () => {
  console.log();
  console.log('Ouvindo na porta 3000');
  console.log(`CRTL + Clique em http://localhost:${port} ou http://${ipAddress}:${port}`);

});
