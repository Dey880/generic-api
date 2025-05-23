const Item = require('../models/Item');

const apiController = {
    status: (req, res) => {
        res.status(200).send({ status: "ok" });
    },
    items: async (req, res) => {
        try {
            const items = await Item.find();
            res.status(200).send({ items });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Internal Server Error" });
        };

    },
    postItems: async (req, res) => {
        try {
            const { name, description } = req.body;
            const item = new Item({
                name,
                description
            });
            await item.save();
            res.status(201).send({ item });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Internal Server Error" });
        };
    },
    deleteItems: async (req, res) => {
        try {
            const id = req.params.id;
            const deletedItem = await Item.findByIdAndDelete(id);
            if(!deletedItem) return res.status(404).send({ error: "Item not found" });
            res.status(204).end();
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Internal Server Error" });
        };
    }
};
module.exports = apiController;