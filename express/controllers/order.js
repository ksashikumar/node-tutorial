function listOrders(req, res) {
  const orderId = req.params.id;
  console.log(orderId);
  res.json({ order: 'Test' });  
}

function createOrder(req, res) {
  console.log(req.body);
  res.json({ order: 'Test' });
}

function deleteOrder(req, res) {
  res.sendStatus(204);
}

function updateOrder(req, res) {
  res.sendStatus(204);
}

module.exports = { listOrders, createOrder, updateOrder, deleteOrder };
