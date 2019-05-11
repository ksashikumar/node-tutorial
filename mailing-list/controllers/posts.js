async function list(req, res, next) {
  try {
        res.json({ status: true });
  } catch (error) {
    next(error);

  }
}

async function show(req, res, next) {
  try {
    res.json({ status: true });
  } catch (error) {
    next(error);

  }
}

async function create(req, res, next) {
  try {
    res.json({ status: true });
  } catch (error) {
    next(error);

  }
}

async function update(req, res, next) {
  try {
    res.json({ status: true });
  } catch (error) {
    next(error);

  }
}

async function destroy(req, res, next) {
  try {
    res.json({ status: true });
  } catch (error) {
    next(error);
  }
}

module.exports = { list, show, create, update, destroy };
