import Donation from "../models/donation.js";

export const createDonation = async (req, res) => {
  try {
    const { amount } = req.body;

    const donation = await Donation.create({
      userId: req.user.id,
      amount,
    });

    res.json({ message: "Donation saved", donation });
  } catch (err) {
    res.status(500).json({ message: "Error saving donation" });
  }
};

// export const getMyDonations = async (req, res) => {
//   const donations = await Donation.find({ userId: req.user.id }).sort({ createdAt: -1 });
//   res.json(donations);
// };

export const getMyDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ userId: req.user.id })
      .sort({ createdAt: -1 });

    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: "Error fetching donations" });
  }
};