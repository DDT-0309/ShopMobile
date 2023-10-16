module.exports = {
    app:{
        port: 3000,
        static_folder: `${__dirname}/../src/public`,
        router: `${__dirname}/../src/routers/web`,
        views_folder: `${__dirname}/../src/apps/views`,
        views_engine: "ejs",
        session_key: "vietpro",
        tmp: `${__dirname}/../src/tmp`,
    }
}