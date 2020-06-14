const { Router } = require('express');

const excelDomain = require('./excel.domain');

const router = Router();

async function downloadExcel (req, res, next) {
  try {
    await excelDomain.downloadExcel();
    res.status(204).send();
    next();
  } catch (error) {
    next(error);
  }
}

router.post(
  '/download',
  downloadExcel
);

module.exports = router;
