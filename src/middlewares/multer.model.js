import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // cb => call back
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // have 
  },
});

export const upload = multer({
 /// storage:storage
  storage,
});
