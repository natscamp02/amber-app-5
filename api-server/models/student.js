const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    cohort: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
