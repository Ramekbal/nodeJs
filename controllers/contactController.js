const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModal");

//@Desc Get all contact
//@Route GET /api/contacts
//@Access Public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  console.log(contacts);
  res.status(200).json(contacts);
});

//@Desc Get one contact
//@Route GET /api/contacts/id
//@Access Public

const getContactById = asyncHandler(async (req, res) => {
  const constById = await Contact.findById(req.params.id);
  if (!constById) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(constById);
});

//@Desc Create a contact
//@Route POST /api/contacts
//@Access Public

const createContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const createContact = await Contact.create({ name, email, phone });
  console.log(createC);
  res.status(200).json(createContact);
});

//@Desc update contact
//@Route GET /api/contacts/id
//@Access Public

const updateContact = asyncHandler(async (req, res) => {
  const constById = await Contact.findById(req.params.id);
  if (!constById) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updateContact);
});

//@Desc Delete  contact
//@Route GET /api/contacts/id
//@Access Public

const deleteContact = asyncHandler(async (req, res) => {
  const constById = await Contact.findById(req.params.id);
  if (!constById) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const deleteContact = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(deleteContact);
});

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
