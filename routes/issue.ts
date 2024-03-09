import express from "express";
import {
  IssueSchema,
  deleteIssue,
  getIssue,
  getIssues,
  setIssue,
} from "../services/database";

const router = express.Router();
router.use("/", express.json());

// Route to get all issues as JSON List
router.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const allIssues = getIssues();
  res.end(JSON.stringify(allIssues));
});

// Route to get an specific Issue Object by the ID as route parameter
router.get("/:id", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const issueId = parseInt(req.params.id);
  if (!isNaN(issueId)) {
    const issue = getIssue(issueId);
    if (issue != null) {
      res.end(JSON.stringify(issue));
      return;
    } else {
      res.statusCode = 404;
      res.send("Issue not found");
      res.end();
      return;
    }
  }
  res.statusCode = 400;
  res.send("Bad request. Invalid issue");
  res.end();
});

// Route to create a New Issue
router.post("/", (req, res) => {
  res.set("Content-Type", "text/html");
  try {
    const issue = IssueSchema.validateSync(req.body);
    setIssue(issue);
    console.log(`New issue: ${JSON.stringify(issue)}`);
    res.statusCode = 201;
    res.send("Object created");
    res.end();
    return;
  } catch {
    console.log("Bad request for creating an Issue");
  }
  res.statusCode = 400;
  res.send("Bad request. Invalid issue");
  res.end();
});

// Route to update and Issue
router.patch("/", (req, res) => {
  res.set("Content-Type", "text/html");
  try {
    const issue = IssueSchema.validateSync(req.body);
    setIssue(issue);
    console.log(`Updated issue: ${JSON.stringify(issue)}`);
    res.statusCode = 201;
    res.send("Object updated");
    res.end();
    return;
  } catch {
    console.log("Bad request for creating an Issue");
  }
  res.statusCode = 400;
  res.send("Bad request. Invalid issue");
  res.end();
});

// Route to delete an Issue by the ID as route parameter
router.delete("/:id", (req, res) => {
  res.set("Content-Type", "text/html");
  const issueId = parseInt(req.params.id);
  if (!isNaN(issueId)) {
    deleteIssue(issueId);
    console.log(`Issue deleted: ${issueId}`);
    res.statusCode = 200;
    res.send("Issue deleted");
    res.end();
    return;
  }
  res.statusCode = 400;
  res.send("Bad request. Invalid issue");
  res.end();
});

export default router;
