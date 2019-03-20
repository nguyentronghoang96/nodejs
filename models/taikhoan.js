const Sequelize = require("sequelize");
const db = require("../database/db");

module.exports = db.sequelize.define(
  "taikhoan",
  {
    tk_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    nd_id: {
      type: Sequelize.BIGINT,

      references: {
        // This is a reference to another model
        model: ttnguoidung,

        // This is the column name of the referenced model
        key: "nd_id"
      }
    },
    dn_id: {
      type: Sequelize.BIGINT,

      references: {
        // This is a reference to another model
        model: doanhnghiep,

        // This is the column name of the referenced model
        key: "dn_id"
      }
    },
    tk_username: {
      type: Sequelize.STRING
    },
    tk_password: {
      type: Sequelize.STRING
    },
    tk_email: {
      type: Sequelize.STRING
    },
    tk_phone: {
      type: Sequelize.STRING
    },
    tk_ngaydangki: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    tk_loaitk: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
