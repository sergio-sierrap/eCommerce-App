const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.isRequired(),
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
});

const getProductSchema = Joi.object({
    id: id.isRequired(),
});

module.exports= { createProductSchema, updateProductSchema, getProductSchema }
