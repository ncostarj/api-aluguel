module.exports = (req, res, next) => {
  // IE8 does not allow domains to be specified, just the *
  // headers["Access-Control-Allow-Origin"] = req.headers.origin;
  var headers = {};
  headers["Access-Control-Allow-Origin"] = "*";
  headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS";
  headers["Access-Control-Allow-Credentials"] = false;
  headers["Access-Control-Allow-Headers"] =
    "Origin, Authorization, Accept, Content-Type, x-access-token";

  console.log(`${new Date().toISOString()} [${req.method}] ${req.url}`);

  if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
  } else {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    // res.header('Access-Control-Allow-Credentials', false);
    // res.header("Access-Control-Allow-Headers", "Origin, Authorization, Accept, Content-Type, x-access-token");
    res.set(headers);
    next();
  }
};
