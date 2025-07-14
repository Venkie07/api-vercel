const getSkillrackData = require("../scrapResume");

module.exports = async (req, res) => {
  const { id, key } = req.query;

  if (!id || !key) {
    return res.status(400).json({ error: "Missing id or key" });
  }

  try {
    const data = await getSkillrackData(id, key);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Failed to fetch SkillRack data" });
  }
};
