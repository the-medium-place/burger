const orm = require("../config/orm");

const burger = {

    all: (callback) => {
        orm.all("burgers", (res) => {
            callback(res);
        });
    },

    create: (cols, vals, callback) => {
        orm.create("burgers", cols, vals, (res) => {
            callback(res);
        });
    },
    update: (objColVals, condition, callback) => {
        console.table(condition)
        orm.update("burgers", objColVals, condition, (res) => {
            callback(res);
        });
    }
};


// export for controller (burgercontroller!)
module.exports = burger;