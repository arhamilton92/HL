const catchAsync = require('../utils/catchAsync');
const Traits = require('../models/traitsModel.js');

exports.createTraits = catchAsync(async (req, res, next) => {
    console.log(req.body)
    const document = await Traits.create(req.body);
    //
    res.status(201).json({
        status: 'success',
        data: {
            data: document,
        },
    });
});
