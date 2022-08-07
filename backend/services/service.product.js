class ProductsService {
    constructor() {
        this.products = [];
    }

    async find(query) {
        return await this.products.find(query);
    }
}

module.exports = ProductsService;