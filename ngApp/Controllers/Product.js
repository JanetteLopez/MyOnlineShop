
class Product {
    constructor($stateParams, $productService){
        var id = $stateParams["id"];
        var clothing = $productService.clothing;
        this.item = clothing.filter(i => i.id == id)[0];
    }
}