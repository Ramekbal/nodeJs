//@Desc Get all contact
//@Route GET /api/contacts
//@Access Public

const getContact = (req, res) => {
  res.status(200).json({ message: "get all..." });
};

//@Desc Get one contact
//@Route GET /api/contacts/id
//@Access Public

const getContactById = (req, res) => {
  res.status(200).json({ message: "get by id" });
};

//@Desc Create a contact
//@Route POST /api/contacts
//@Access Public

const createContact = (req, res) => {
  res.status(200).json({ message: "created" });
};

//@Desc update contact
//@Route GET /api/contacts/id
//@Access Public

const updateContact = (req, res) => {
  res.status(200).json({ message: "updatedd" });
};

//@Desc Delete  contact
//@Route GET /api/contacts/id
//@Access Public

const deleteContact = (req, res) => {
  res.status(200).json({ message: "Deleted..." });
};

module.exports = {
  getContact,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
