require("dotenv").config();
var express = require("express");
var router = express.Router();
var cloudinary = require("../common/cloudinary");

/* GET Adversiting Images */
router.get("/services/adversiting", (req, res, next) => {
  cloudinary.search
    .expression("folder: service/adversiting")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      var response = {
        items: result.resources,
        scaleURL: process.env.CLOUDINARY_URL_SCALE,
        smallURL: process.env.CLOUDINARY_URL_SMALL,
        key: "adversiting",
      };

      res.status(200).send(response);
    });
});

/* GET Activation Images */
router.get("/services/activation", (req, res, next) => {
  cloudinary.search
    .expression("folder: service/activation")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      var response = {
        items: result.resources,
        scaleURL: process.env.CLOUDINARY_URL_SCALE,
        smallURL: process.env.CLOUDINARY_URL_SMALL,
        key: "activation",
      };

      res.status(200).send(response);
    });
});

/* GET Entertainment Images */
router.get("/services/entertainment", (req, res, next) => {
  cloudinary.search
    .expression("folder: service/entertainment")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      var response = {
        items: result.resources,
        scaleURL: process.env.CLOUDINARY_URL_SCALE,
        smallURL: process.env.CLOUDINARY_URL_SMALL,
        key: "entertainment",
      };

      res.status(200).send(response);
    });
});

/* GET Media Images */
router.get("/services/media", (req, res, next) => {
  cloudinary.search
    .expression("folder: service/media")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      var response = {
        items: result.resources,
        scaleURL: process.env.CLOUDINARY_URL_SCALE,
        smallURL: process.env.CLOUDINARY_URL_SMALL,
        key: "media",
      };

      res.status(200).send(response);
    });
});

/* GET Opening Images */
router.get("/services/opening", (req, res, next) => {
  cloudinary.search
    .expression("folder: service/media")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      var response = {
        items: result.resources,
        scaleURL: process.env.CLOUDINARY_URL_SCALE,
        smallURL: process.env.CLOUDINARY_URL_SMALL,
        key: "opening",
      };

      res.status(200).send(response);
    });
});

/* GET RoadShow Images */
router.get("/services/roadshow", (req, res, next) => {
  cloudinary.search
    .expression("folder: service/roadshow")
    .sort_by("public_id", "desc")
    .max_results(999)
    .execute()
    .then((result) => {
      var response = {
        items: result.resources,
        scaleURL: process.env.CLOUDINARY_URL_SCALE,
        smallURL: process.env.CLOUDINARY_URL_SMALL,
        key: "roadshow",
      };

      res.status(200).send(response);
    });
});

module.exports = router;
