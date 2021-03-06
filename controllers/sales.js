const salesService = require('../services/sales');

const createSale = async (req, res) => {
  const itensSold = req.body;

  const newSale = await salesService.create(itensSold);
  return res.status(200).json(newSale);
};

const getAllSales = async (_req, res) => {
  const listOfAll = await salesService.listAll();
  return res.status(200).json({ sales: listOfAll });
};

const findBySalesId = async (req, res) => {
  const { id } = req.params;
  const findedId = await salesService.findById(id);
  if (findedId === null) {
    return res.status(404).json({ err: {
      code: 'not_found',
      message: 'Sale not found',
    } });
  }
  return res.status(200).json(findedId);
};

const editSale = async (req, res) => {
  try {
    const { id } = req.params;
    const itensSold = req.body;
    await salesService.editSale(id, itensSold);
    return res.status(200).json({ _id: id, itensSold });
  } catch (e) {
    console.log(e.mesage);
  }
};

const deleteId = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.deleteId(id);
  if (result === null) {
    return req.status(404).json({ err: {
      code: 'not_found',
      message: 'Sale not found',
    } });
  }
  return res.status(200).json(result);
};

module.exports = {
  createSale,
  getAllSales,
  findBySalesId,
  editSale,
  deleteId,
};