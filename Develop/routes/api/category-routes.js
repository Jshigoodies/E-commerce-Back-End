const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [Product]}).then((categoryData) => {
    res.json(categoryData);
  });
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    if(category) {
      res.json(category);
    }
    else {
      res.status(404).json({message: "Category not found"});
    }
  }
  catch(err) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const category = await Category.create(req.body);
    res.status(201).json({ message: 'Category added successfully'});
  }
  catch(error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updatedCategory = await Category.update(
    {
      category_name: req.body.category_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json({ message: 'Category updated successfully'});
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value

  const deleteCategory = await Category.destroy(
    {
      where: {
        id: req.params.id,
      },
    }
  );
  
  res.json({ message: 'Category deleted successfully'});
});

module.exports = router;
