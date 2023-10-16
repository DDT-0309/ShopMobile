const paginate = require("../../common/paginate");
const CategoryModel = require("../models/category");
const slug = require("slug");


const index = async (req, res)=>{
    const limit = 3;
    const page = parseInt(req.query.page) || 1;
    const skip = page*limit - limit;
    const totalRow = await CategoryModel.find().countDocuments();
    const totalPage = Math.ceil(totalRow/limit);

    const categories = await CategoryModel
    .find()
    .skip(skip)
    .sort({_id: -1})
    .limit(limit);
    res.render("admin/categories/category", {
        categories,
        page,
        totalPage,
        pages: paginate(page, totalPage),
    });
};
const create = (req, res)=>{
    res.render("admin/categories/add_category");
};

const store = (req, res)=>{
    const {body} = req;
    const category = {
        description: body.description,
        title: body.title,
        slug: slug(body.title),

    }
    new CategoryModel(category).save();
    res.redirect("/admin/categories");
};
const edit = (req, res)=>{
    res.render("admin/categories/edit_category");
};
const del = async (req, res)=>{
    const id = req.params.id;
    await CategoryModel.deleteOne({_id: id});
    res.redirect("/admin/categories");
};

module.exports = {
    index,
    create,
    store,
    edit,
    del,
};