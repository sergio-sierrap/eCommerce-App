const express = require ('express');
const productsService = require('./../services/productsService');
const service = new productsService();
const router = express.Router();

router.get('/', (req, res) => {
    const products = service.find();
    res.json(products);
});

router.get('/filter', (req, res)=>{
    res.send('Yo soy un filter');
});

router.get('/:id', (req, res, next)=>{
    try{
        const { id } = req.params;
        const product = service.findOne(id);
        res.json(product);
    } catch(err){
        next(err);
    }
    
});

router.post('/', (req, res)=>{
    const body = req.body;
    const newProduct = service.create(body);
    res.status(201).json(newProduct);
});

router.patch('/:id', (req, res, next)=>{
    try{
        const { id } = req.params;
        const body = req.body;
        const product = service.update(id, body);
        res.json(product);
    } catch (err) {
        next(err);
    }
    
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    const product = service.delete(id);
    res.json(product);
});

module.exports = router;