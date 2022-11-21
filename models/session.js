module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define("sessions", {
    jwt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Session;
};
