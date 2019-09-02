module.exports = (sequelize, DataTypes) => {
    const Term = sequelize.define('Term', {
      term: DataTypes.STRING,
      description: DataTypes.STRING,
      letter: DataTypes.STRING,
    });
  
  return Term;
}