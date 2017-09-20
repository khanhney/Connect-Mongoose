const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// sử dụng Promise cho global


const uri = 'mongodb://localhost/shop';
// đường dẫn mongodb
// tạo port env
const port = process.env.PORT || 3000;

mongoose.connect(uri, {useMongoClient: true});
mongoose.connection.once('open', ()=>{
    app.listen(port, ()=> console.log('Server started at port 3000'));
});