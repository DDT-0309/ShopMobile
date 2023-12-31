const express = require("express");
const router = express.Router();

// Import controller
const TestControllers = require("../apps/controllers/test");
const AuthControllers = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");
const CategoryController = require("../apps/controllers/category");
const UserController = require("../apps/controllers/user");
const SiteController = require("../apps/controllers/site");


// Import Middleware

const AuthMiddleware = require("../apps/middlewares/auth");
const UploadMiddleware = require("../apps/middlewares/upload");


// Router Admin
router.get("/test", TestControllers.test);
router.post("/testForm", TestControllers.actionForm);

router.get("/admin/login", AuthMiddleware.checkLogin, AuthControllers.getLogin);
router.post("/admin/login", AuthMiddleware.checkLogin, AuthControllers.postLogin);

router.get("/admin/logout", AuthMiddleware.CheckAdmin, AuthControllers.logout);

router.get("/admin/dashboard", AuthMiddleware.CheckAdmin, AdminController.index);

router.get("/admin/products", AuthMiddleware.CheckAdmin, ProductController.index);
router.get("/admin/products/create", AuthMiddleware.CheckAdmin, ProductController.create);
router.post("/admin/products/store", AuthMiddleware.CheckAdmin, UploadMiddleware.single("thumbnail"), ProductController.store);
router.get("/admin/products/edit/:id", AuthMiddleware.CheckAdmin, ProductController.edit);
router.post("/admin/products/update/:id", AuthMiddleware.CheckAdmin, UploadMiddleware.single("thumbnail"), ProductController.update);
router.get("/admin/products/delete/:id", AuthMiddleware.CheckAdmin, ProductController.del);

router.get("/admin/categories", AuthMiddleware.CheckAdmin, CategoryController.index);
router.get("/admin/categories/create", AuthMiddleware.CheckAdmin, CategoryController.create);
router.post("/admin/categories/store", AuthMiddleware.CheckAdmin, CategoryController.store);
router.get("/admin/categories/edit/:id", AuthMiddleware.CheckAdmin, CategoryController.edit);
router.get("/admin/categories/delete/:id", AuthMiddleware.CheckAdmin, CategoryController.del);

router.get("/admin/users", AuthMiddleware.CheckAdmin, UserController.index);
router.get("/admin/users/create", AuthMiddleware.CheckAdmin, UserController.create);
router.post("/admin/users/store", AuthMiddleware.CheckAdmin, UserController.store);
router.get("/admin/users/edit/:id", AuthMiddleware.CheckAdmin, UserController.edit);
router.get("/admin/users/delete/:id", AuthMiddleware.CheckAdmin, UserController.del);


// Router Site

router.get("/", SiteController.home);
router.get("/category-:slug.:id", SiteController.category);
router.get("/category-:id", SiteController.category);
router.get("/product-:slug.:id", SiteController.product);
router.post("/product-:slug.:id", SiteController.comment);
router.get("/search", SiteController.search);
router.post("/add-to-cart", SiteController.addToCart);
router.get("/cart", SiteController.cart);
router.post("/update-cart", SiteController.updateCart);
router.get("/del-cart-:id", SiteController.delCart);
router.post("/order", SiteController.order);
router.get("/success", SiteController.success);





module.exports = router;