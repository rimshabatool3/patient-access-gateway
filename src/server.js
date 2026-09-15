import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "patient-access-gateway"
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "Patient Access Gateway",
    description: "Secure patient data access gateway",
    domain: "Healthcare AI",
    architecture: "Node.js / Express"
  });
});

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log("Patient Access Gateway running on port " + PORT);
  });
}

export default app;
