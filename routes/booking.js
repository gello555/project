import { Router } from "express";
import fs from "fs";

const router = Router();

router.get("/", async function (req, res, next) {
  const elementId = req.body.elementId;
  console.log(elementId + " a7a");
  res.render("map",{ user: (req.session.user === undefined ? "" : req.session.user) });
});

// router.get("/country", function (req, res, next) {
  //   fs.readFile('../travinature/routes/ao.svg', 'utf8', (err, data) => {
    //     if (err) throw err;
    //     console.log(data); // Log the SVG file contents to the console
    //     res.render("country",{data});
    //   });
    // });
    
    router.post('/', (req, res) => {
      const elementId = req.body.elementId;
      console.log(elementId + " m4 4a8al");
  // Do something with the elementId variable here
  res.send({ message: `Received element ID: ${elementId}` });
});

router.get("/argentina", function (req, res, next) {
    res.render("argentina",{ user: (req.session.user === undefined ? "" : req.session.user) });
  });


export default router;
