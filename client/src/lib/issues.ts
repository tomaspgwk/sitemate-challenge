import { Issue } from "../types";

const SERVER_URL = "http://localhost:3000";

// Get all issues from the backend
export async function getIssues(): Promise<Issue[]> {
  const res = await fetch(`${SERVER_URL}/issue`);
  const json = await res.json();
  return json as Issue[];
}

// Delete an issue from the backend
export async function deleteIssue(issueId: number) {
  await fetch(`${SERVER_URL}/issue/${issueId}`, { method: "DELETE" });
}

// Update an issue on the backend
export async function updateIssue(issue: Issue) {
  await fetch(`${SERVER_URL}/issue/`, {
    method: "PATCH",
    body: JSON.stringify(issue),
    headers: new Headers({ "content-type": "application/json" }),
  });
}

// Create an issue on the backend
export async function createIssue(issue: Issue) {
  await fetch(`${SERVER_URL}/issue/`, {
    method: "POST",
    body: JSON.stringify(issue),
    headers: new Headers({ "content-type": "application/json" }),
  });
}
