import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_CONNECTION,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

const Car = sequelize.define("Car", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  plate: {
    type: DataTypes.STRING(10),
    allowNull: false,
    validate: {
      isPlate(value) {
        const plateRegex = /^[A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{0,3}$/;
        if (!plateRegex.test(value)) {
          throw new Error("Invalid car plate format");
        }
      },
    },
  },
  transmision: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manufacture: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  driverService: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: "driver_service",
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rentPerDay: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "rent_per_day",
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: "updated_at",
  },
});

export default Car;
