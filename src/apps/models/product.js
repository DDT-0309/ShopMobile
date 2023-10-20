const CategoryModel = require("./category");

const mongoose = require("../../common/database")();
const productSchema = mongoose.Schema({
    thumbnail:{
        type: String,
        default: null,
    },
    description:{
        type: String,
        default: null,
    },
    price:{
        type: Number,
        required: true,
    },
    cat_id:{
        type: mongoose.Types.ObjectId,
        ref: "Category",
        default: 0,
    },
    status:{
        type: String,
        required: true,
    },
    featured:{
        type: Boolean,
        required: true,
    },
    promotion:{
        type: String,
        required: true,
    },
    warranty:{
        type: String,
        required: true,
    },
    accessories:{
        type: String,
        required: true,
    },
    is_stock:{
        type: Boolean,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    slug:{
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const ProductModel = mongoose.model("Product",productSchema,"products");
module.exports = ProductModel;
