module.exports = (sequelize, DataTypes) => {
    const Occurrence = sequelize.define('Occurrence', {
      id: {
        type: DataTypes.INTEGER, 
        primaryKey:true,
      },
      nome: DataTypes.STRING,
      local: DataTypes.STRING,
      datahora: DataTypes.STRING,
      tipo: DataTypes.STRING,
      solicitante: DataTypes.STRING,
      tipoexplosivo: DataTypes.STRING,
      tipoobjeto: DataTypes.STRING,
      caracteristicasfisicas: DataTypes.STRING,
      motivacao: DataTypes.STRING,
      iis: DataTypes.STRING,
      metodologia: DataTypes.STRING,
      aprovado: DataTypes.BOOLEAN,
      policial: DataTypes.STRING,
      administrador: DataTypes.STRING
    });
  
  return Occurrence;
}