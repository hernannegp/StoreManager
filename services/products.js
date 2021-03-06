const createModel = require('../models/products');

const create = async (name, qty) => {
  const product = await createModel.create(name, qty);
  return product;
};

const listAll = async () => {
  const listsProducts = await createModel.getAll();
  return listsProducts;
};

const findById = async (id) => {
  const findId = await createModel.findById(id);
  return findId;
};

const editProduct = async (id, name, qty) => {
  const edited = await createModel.editProduct(id, name, qty);
  return edited;
};

const deleteById = async (id) => {
  const delId = await createModel.deleteById(id);
  return delId;
};

module.exports = {
  create,
  listAll,
  findById,
  editProduct,
  deleteById,
};