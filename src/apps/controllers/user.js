const paginate = require("../../common/paginate");
const UserModel = require("../models/user");
const slug = require("slug");


const index = async (req, res)=>{
    const limit = 3;
    const page = parseInt(req.query.page) || 1;
    const skip = page*limit - limit;
    const totalRow = await UserModel.find().countDocuments();
    const totalPage = Math.ceil(totalRow/limit);

    const users = await UserModel
    .find()
    .skip(skip)
    .sort({_id: -1})
    .limit(limit);
    res.render("admin/users/user", {
        users,
        page,
        totalPage,
        pages: paginate(page, totalPage),
    });
};
const create = (req, res)=>{
    res.render("admin/users/add_user",{data:{}});
};
const store = async (req, res) => {
    const { email, password, retype_password, full_name, role } = req.body;
    const users = await UserModel.findOne({ email });
    let error = null;

    const user = {
        email,
        password,
        retype_password,
        full_name,
        role: role === '1' ? 'Admin' : 'Member',
        slug: slug(full_name),
    };

    if (users) {
        error = 'Email đã tồn tại!';
    } else if (password === retype_password) {
        new UserModel(user).save();
        res.redirect('/admin/users');
    } else {
        error = 'Xác nhận mật khẩu không khớp!';
    }
    
    res.render('admin/users/add_user', { data: { error } });
};

const edit = (req, res)=>{
    res.render("admin/users/edit_user");
};
const del = async (req, res)=>{
    const id = req.params.id;
    await UserModel.deleteOne({_id: id});
    res.redirect("/admin/users");
};

module.exports = {
    index,
    create,
    store,
    edit,
    del,
};