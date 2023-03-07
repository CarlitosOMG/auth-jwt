import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

const url = 'mongodb://127.0.0.1:27017/apiTest'
mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then((db) => console.log('bd is connected'))
	.catch((error) => console.log(error))

/*, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}*/
