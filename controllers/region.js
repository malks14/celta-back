const axios = require("axios");

exports.getRegions = async (req, res, next) => {
  try {
    const fetchedRegions = await axios.get(
      "https://api.first.org/data/v1/countries"
    );
    const data = fetchedRegions.data.data
    res
      .status(200)
      .json({data});
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ msg: "Hubo un error al cargar las regiones" });
  }

};
