function listOrders(req, res, next) {
  try {
    const orderId = req.params.id;
    console.log(req.request_id + ': Inside listOrders');
    res.json({ order: 'Test' });  
  } catch (error) {
    next(error);
  }
}

function createOrder(req, res, next) {
  console.log(req.body);
  res.json({ order: 'Test' });
  next();
}

function deleteOrder(req, res) {
  res.sendStatus(204);
}

function updateOrder(req, res) {
  res.sendStatus(204);
}

module.exports = { listOrders, createOrder, updateOrder, deleteOrder };
