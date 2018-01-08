import express from 'express';
import config from './config';

let app = express();

app = config(app);
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
	console.log('Server on .....', app.get('port'));
});