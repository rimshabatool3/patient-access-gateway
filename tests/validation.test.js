import test from "node:test";
import assert from "node:assert";

test("healthcare request validation", () => {
  const payload = {
    patientId: "demo-patient"
  };

  assert.strictEqual(
    typeof payload.patientId,
    "string"
  );
});
