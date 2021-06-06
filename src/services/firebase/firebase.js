var admin = require("firebase-admin");
var serviceAccount = require("../../config/firebase-key.json");

const BUCKET = "invest-1cb72.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadAvatar = (req, res, next) => {
  if (!req.file) return next();

  const avatar = req.file;

  const fileName = Date.now() + avatar.originalname;

  const file = bucket.file(fileName);

  const stream = file.createWriteStream({
    metadata: {
      contentType: avatar.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    await file.makePublic();
    req.file.url = `https://storage.googleapis.com/${BUCKET}/${fileName}`;

    next();
  });

  stream.end(avatar.buffer);
};

module.exports = uploadAvatar;
