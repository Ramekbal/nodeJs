const express = require("express");
const {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const router = express.Router();

// router.route("/").get(getContact);

// router.route("/:id").get(getContactById);

// router.route("/").post(createContact);

// router.route("/:id").put(updateContact);

// router.route("/:id").delete(deleteContact);

//This is short hand way of writing the above code
router.route("/").get(getContact).post(createContact);
router
  .route("/:id")
  .get(getContactById)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
