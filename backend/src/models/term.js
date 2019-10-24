module.exports = (sequelize, DataTypes) => {
    const Term = sequelize.define('Term', {
      id: {
        type: DataTypes.INTEGER, 
        primaryKey:true,
      },
      term: DataTypes.STRING,
      description: DataTypes.STRING,
      letter: DataTypes.STRING,
      approved: DataTypes.BOOLEAN,
      user: DataTypes.STRING,
      admin: DataTypes.STRING,
      origin: DataTypes.STRING
    });
  
  return Term;
}