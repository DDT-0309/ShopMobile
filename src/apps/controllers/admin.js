const UserModel = require("../models/user");
const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");

const index = async (req, res)=>{

    const users = (await UserModel.find()).length;
    const products = (await ProductModel.find()).length;
    const categories = (await CategoryModel.find()).length;
    res.render("admin/dashboard", {users, products, categories});
};

module.exports = {
    index,
};