export class AppConstants{

    static Routes = class {
        static readonly stock = "almacen";
        static readonly productList = "productos";
        static readonly dishList = "recetas";
    }

    routes = [
        {id: "stock", title: "Almacén"},
        {id: "productList", title: "Productos"},
        {id: "dishList", title: "Recetas"}
    ]
}