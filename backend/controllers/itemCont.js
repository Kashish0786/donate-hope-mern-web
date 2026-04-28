import Item from "../models/item.js";
export const createItem = async (req, res) => {
  try {
    const item = await Item.create({
      ...req.body,
     userId: req.user.id, 
    });

    res.json({ message: "Item request saved", item });
  } catch (err) {
     console.log("🔥 ITEM ERROR:", err);
    res.status(500).json({ message: "Error" , });
  }
};

export const getMyItems = async (req, res) => {
  try {
    const items = await Item.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error fetching items" });
  }
};