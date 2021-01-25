module.exports.Helper =  class Helper {

  static debug(param) {
    console.log(param);
  }

  static dd(param) {
    this.debug(param);
    process.exit(0);
  }

}