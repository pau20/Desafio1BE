class ProductManager{
    constructor (){
        this.products = [];
    }
    //agregará un producto al arreglo de productos inicial.
    // Validar que no se repita el campo “code” y que todos los campos sean obligatorios
    // Al agregarlo, debe crearse con un id autoincrementable
    // debe devolver el arreglo con todos los productos creados hasta ese momento
    getProducts = () =>{
        return this.products
    }

    addProduct = (title= 'producto prueba', description= 'Este es un producto prueba', price= 200, thumbnail= 'Sin imagen', code= 'abc123', stock= 25) =>{
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            objetos:  []
        }

        if (this.products.lenght ==0){
            product.id =1;
        }else{
            const lastProduct = this.products[this.products.length-1] // creo una variable que me guarde el ultimo producot NO el index
            product.id = lastProduct.id + 1; //aca defino al id del producto y se pone el producto final
        }
        //ahora que el product posee un id lo pusheo 
        this.products.push(product);
    } 

    getProductById = (productId) =>{
        //quiero corroborar que el producto exista
        const productIndex = this.products.findIndex(product=>product.id === productId); //me ayuda a buscar si el producto existe
        //en caso de que no exista mi producto el index seria -1
        if (productIndex===-1){
            console.log('Producto no encontrado');
            return null; // ya que no encontro nada entonces devuelve el null
        }
        //si se saltea el if, yo se que mi producto si existe
        //si mi producto ya existe entonces
        const productAlreadyExisted = this.products(productId).objetos.includes(productId);
        if (productAlreadyExisted){
            console.log('El producto ya existia');
            return null; //no lo vuelve a agregar
        }
        this.products[productIndex].objetos.push(productId);
        console.log('Producto correctamente agregado');

    }
    // debe buscar en el arreglo el producto que coincida con el id
    // En caso de no coincidir ningún id, mostrar en consola un error “Not found”
    
}

const productManager = new ProductManager;

const testProduct = {

}

productManager.addProduct(testProduct);

console.log(productManager.getProducts())
console.log(productManager.getProductsById())