import Team from "../models/Team.js";

export const drawGroups = async (req, res) => {
  try {
    const teams = await Team.find();

    if (teams.length !== 32) {
      return res.status(400).json({ error: "Debe haber exactamente 32 equipos" });
    }

    // Mezclar aleatoriamente
    const shuffled = teams.sort(() => Math.random() - 0.5);

    const groups = {
      A: [], B: [], C: [], D: [],
      E: [], F: [], G: [], H: []
    };

    let index = 0;
    for (const g in groups) {
      groups[g] = shuffled.slice(index, index + 4);
      index += 4;
    }

    res.json({ groups });

  } catch (err) {
    res.status(500).json({ error: "Error realizando sorteo" });
  }
};
