module.exports = (sequelize, DataType) => {
  const HojaBarra = sequelize.define('hoja_barra', {
    hoja_barra_id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    largo: {
      type: DataType.STRING,
    },
    ancho: {
      type: DataType.STRING,
    },
    stock: {
      type: DataType.INTEGER,
    }
  },
    {
      freezeTableName: true,
      modelName: 'singularName'
    }
  )

  return HojaBarra
}
