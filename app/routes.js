const { Router } = require('express');

const excelRoute = require('./endpoints/excel/excel.route');

const router = Router();

router.use('/api/excel', excelRoute);

module.exports = router;
