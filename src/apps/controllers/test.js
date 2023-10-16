const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

const test = (req, res)=>{


    ProductModel.find().populate({path: "cat_id"}).exec((error, docs)=>{
        console.log(docs);
    });
    
     
    
    
    // const category = {
    //     descripsion: "BPhone descripsion",
    //     title: "BPhone title",
    //     slug: "bphone-slug",
    // };
    // new CategoryModel(category).save();


};

const actionForm = (req, res)=>{
    res.send(req.body.email);

};

module.exports = {
    test,
    actionForm,
};