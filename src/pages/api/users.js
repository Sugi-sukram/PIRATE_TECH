export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json({ users: ["Alice", "Bob", "Charlie"] });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  }
  