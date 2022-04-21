const credit_data = require("../Data/new.json");

const getAll = ({ full_name, city, credit, country }={}) =>
  new Promise((resolve) => {
    let result = Array.from(credit_data);
    if (full_name) {
      result = result.filter((item) => item.full_name === full_name);
    }

    if (city) {
      result = result.filter((item) => item.city === city);
    }

    if (country) {
      result = result.filter((item) => item.country === country);
    }

    if (credit) {
      result = result.filter((item) => item.credit == credit);
    }
    resolve({ code: 200, data: result });
  });

const getById = (credit) =>
  new Promise((resolve) => {
    const card = card_data.find((card) => card.credit == credit);

    if (product) {
      resolve({ code: 200, data: card });
    } else {
      resolve({
        code: 404,
        data: { message: `No information found for card ${card}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};