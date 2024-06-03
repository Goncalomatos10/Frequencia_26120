{
    "products"[
      {"id": 1, "nome": "Produto 1", "preço": 100},
      {"id": 2, "nome": "Produto 2", "preço": 200}
    ]
  }
  

  javascript
  const products = [
    {id: 1, name: 'Produto 1', price: 100},
    {id: 2, name: 'Produto 2', price: 200}
  ];

  exports.listAllProducts

= (req, res) => {
    res.json(products);
  };

  exports.getProductById = (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    res.json(product);
  };

  exports.createProduct = (req, res) => {
    const newProduct = {
      id: products.length + 1,
      name: req.body.name,
      price: req.body.price
    };
    products.push(newProduct);
    res.json(newProduct);
  };

  exports.updateProduct = (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    product.name = req.body.name;
    product.price = req.body.price;
    res.json(product);
  };

  exports.deleteProduct = (req, res) => {
    const index = products.findIndex(p => p.id == req.params.id);
    products.splice(index, 1);
    res.json({message: 'produto eliminado'});
  };
