const express = require("express");
const router = express.Router();
const commonController = require("../controller/commonController");
const { contactFormScheam } = require("../validator/contactFormScheam");

const { validateMiddleware } = require("../middleware/validateMiddleware");

router
  .route("/contactForm")
  .post(validateMiddleware(contactFormScheam), commonController.addDetails);

module.exports = router;
