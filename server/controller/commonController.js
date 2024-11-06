const categoryModel = require("../model/categoryModel");
const detailsModel = require("../model/detailsModel");

exports.addDetails = async (req, res, next) => {
  try {
    const request = req.body;
    const detailsData = {
      firstName: request.firstName,
      lastName: request.lastName,
      message: request.message,
      email: request.email,
      phone: request.phone,
    };
    if (isNaN(parseInt(request.phone))) {
      res.status(400).json({ msg: "Invalid phone number" });
    }

    const detailsResponse = await detailsModel.create(detailsData);

    optionData = {
      detialsId: detailsResponse._id,
      options: request.options,
    };
    const optionResponse = await categoryModel.create(optionData);

    if (optionResponse) {
      res.status(203).json({ msg: "Added successfully" });
    } else {
      res.status(500).json({ msg: "Failed to add" });
    }
  } catch (error) {
    console.error(error);
    next({ msg: "something went wrong" });
  }
};
