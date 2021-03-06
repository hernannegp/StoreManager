const { ObjectId } = require('mongodb');
const connection = require('./connection');

const create = async (name, quantity) => {
  const newProduct = await connection()
    .then((db) => db.collection('products').insertOne({ name, quantity }));
  return {
    _id: newProduct.insertedId,
    name,
    quantity,
  };
};

const findByName = async (name) => connection()
  .then((db) => db.collection('products').findOne({ name }));

const getAll = () => connection()
  .then((db) => db.collection('products').find().toArray());

const findById = async (id) => connection()
  .then((db) => db.collection('products').findOne({ _id: ObjectId(id) }));

const editProduct = async (id, name, quantity) => {
  await connection()
  .then((db) => db.collection('products')
  .updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }));
  return {
    id,
    name,
    quantity,
  };
};

const deleteById = async (id) => connection()
  .then((db) => db.collection('products').deleteOne({ _id: ObjectId(id) }));

module.exports = {
  create,
  findByName,
  getAll,
  findById,
  editProduct,
  deleteById,
};
