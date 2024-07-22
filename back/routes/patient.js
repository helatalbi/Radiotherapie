//routes/patient.js
const express = require("express");
const router = express.Router();
const patientControllers = require("../controllers/patient");

router.get("/all", patientControllers.getAllPatients);
router.post("/add", patientControllers.addPatient);
router.get("/search/:letters", patientControllers.searchPatientsByName);
router.get("/searchDMI/:letters", patientControllers.searchPatientsByDMI);
router.get(
  "/searchDDT/:startDate",
  patientControllers.searchPatientsByStartDate
);
router.get(
  "/searchCT/:letters",
  patientControllers.searchPatientsByTreatmentCenterName
);
router.get(
  "/searchMachine/:letters",
  patientControllers.searchPatientsByScannerMachineName
);
router.post(
  "/assign-users/:patientId",
  patientControllers.assignUsersToPatient
);
router.get(
  "/assigned-users/:patientId",
  patientControllers.getAssignedUsersForPatient
);
router.get("/total", patientControllers.getTotalPatients);
router.get(
  "/prescription-status-count",
  patientControllers.countPatientsByPrescriptionStatus
);
router.get(
  "/scanner-status-count",
  patientControllers.countPatientsByScannerStatus
);
router.get(
  "/importation-status-count",
  patientControllers.countPatientsByImportationStatus
);
router.get(
  "/contourage-status-count",
  patientControllers.countPatientsByContourageStatus
);
router.get(
  "/dosimetrie-status-count",
  patientControllers.countPatientsByDosimetrieStatus
);

router.get("/:patientId", patientControllers.getPatientById);

module.exports = router;
