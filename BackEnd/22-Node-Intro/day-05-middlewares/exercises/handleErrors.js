const regDate = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
// https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check

const handleErrors = (req, res, next) => {
  const { productName, infos } = req.body;
  const { saleDate, warrantyPeriod } = infos;

  if (!productName || productName.length < 5)
    return res
      .status(400)
      .json({
        message: "O campo productName deve ter pelo menos 4 caracteres",
      });

  if (!infos)
    return res.status(400).json({ message: "O campo infos é obrigatório" });

  if (!saleDate)
    return res.status(400).json({ message: "O campo saleDate é obrigatório" });

  if (!saleDate.match(regDate))
    return res
      .status(400)
      .json({ message: "O campo saleDate não é uma data válida" });

  if (!warrantyPeriod)
    return res
      .status(400)
      .json({ message: "O campo warrantyPeriod é obrigatório" });

  if (Number(warrantyPeriod) < 1 || Number(warrantyPeriod) > 3)
    return res
      .status(400)
      .json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3" });

  next();
};

module.exports = handleErrors;