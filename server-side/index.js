const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const Phones = [
    {
        id: 1,
        phoneName: 'Samsung',
        price: 10000
    },
    {
        id: 2,
        phoneName: 'Xaomi',
        price: 20000
    },
    {
        id: 3,
        phoneName: 'Iphone',
        price: 30000
    }
];

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.get('/phones', (req, res) => {
    res.send(Phones);
});
app.get('/phones/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const searchedPhone = Phones.find(phone => phone.id === parseInt(id))
    console.log(searchedPhone)
    // res.send(searchedPhone);
    res.json(searchedPhone)
});


app.post('/phones', (req, res) => {
    console.log('Post API hitting');
    const newPhone = req.body;
    console.log(newPhone);
    newPhone.id = Phones.length + 1;
    Phones.push(newPhone);
    // res.status(201).json(newPhone);
    res.send(true);

});
app.delete('/phones/:id', (req, res) => {
    console.log('Delete API is hitting')

    const id = req.params.id; // take the desire id

    const index = Phones.findIndex(phone => phone.id === parseInt(id)); // find the index which one is to remove

    Phones.splice(index, 1); // remove the object from the main array

    res.send(true);

})

app.put('/phones/:id', (req, res) => {
    console.log('PUT API is Hitting')
    const id = parseInt(req.params.id);
    const updatedPhone = req.body;
    console.log(typeof(id),id);

    const phone = Phones.find(phone => phone.id === id);
    phone.phoneName = updatedPhone.phoneName;
    phone.price = updatedPhone.phoneName;
    console.log(phone)
    res.send(phone);

})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
