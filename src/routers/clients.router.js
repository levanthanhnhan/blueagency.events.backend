require("dotenv").config();

var express = require("express");
var router = express.Router();
var cloudinary = require("../common/cloudinary");

/* GET Clients Images */
router.get("/clients", (req, res, next) => {
  const images = [];

  cloudinary.search
    .expression("folder: clients")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      result.resources.forEach((item) => {
        var object = {
          src: item.url,
          srcImg: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_320,h_320/${item.public_id}.${item.format}`,
          width: item.width,
          height: item.height,
        };
        images.push(object);
      });

      res.status(200).send(images);
    });
});

module.exports = router;
