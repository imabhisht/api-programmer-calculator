module.exports = (req, res) => {
    console.log(req);
    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies,
    });
  };


// const toBinary = (x) => {
//     const result = x.toString(2);
//     console.log(result)
// }


// toBinary(42)