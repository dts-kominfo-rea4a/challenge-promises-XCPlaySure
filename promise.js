const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
  const array1 = await promiseTheaterIXX();
  const array2 = await promiseTheaterVGC();
  
  return new Promise((resolve) => {
    let total = 0;
    array1.forEach(data => {
      if(data.hasil === emosi)
        total += 1;
    });
    array2.forEach(data => {
      if(data.hasil === emosi)
        total += 1;
    });

    return resolve(total);
  });
};

module.exports = {
  promiseOutput,
};
