const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({ include: [Product] }).then((tagData) => {
    res.json(tagData);
  });
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const id = req.params.id;
    const tag = await Tag.findByPk(id, {include: [Product]})

    if(tag) {
      res.status(200).json(tag);
    }
    else {
      res.status(404).json({message: "Tag not Found"});
    }
  }
  catch(error) {
    res.status(500).json({message: error.message});
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json({message: 'Tag added successfully'});
  }
  catch(error) {
    res.status(500).json({message: error.message});
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updatedTag = await Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        id: req.params.id,
      }
    }
  );

  res.json({message: "Tag updated Successfully"});
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const deleteTag = await Tag.destroy(
    {
      where: {
        id: req.params.id,
      },
    }
  );

  res.json({message: "Tag deleted Successfully"});
});

module.exports = router;
