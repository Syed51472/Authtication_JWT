module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("task", {
    Title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Task;
};
