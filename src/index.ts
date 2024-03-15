import { userController } from './infrastructure/ioc/dependency-injection';
import express from 'express'
const app = express()

app.use(express.json())

app.get('/users', userController.getAll.bind(userController));
app.post('/users', userController.create.bind(userController));
app.put('/users', userController.update.bind(userController));
app.delete('/users', userController.delete.bind(userController));
app.post('/sign-in', userController.signIn.bind(userController));

app.listen(3333, () => {
    console.log('Server is running on port 3333')
})