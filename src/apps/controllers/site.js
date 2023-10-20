const home = (req, res)=>{
    res.render("site");
};
const category = (req, res)=>{
    res.render("site/category");
};
const product = (req, res)=>{
    res.render("site/product");
};
const search = (req, res)=>{
    res.render("site/search");
};
const cart = (req, res)=>{
    res.render("site/cart");
};
const success = (req, res)=>{
    res.render("site/success");
};
module.exports = {
    home,
    category,
    product,
    search,
    cart,
    success,
};