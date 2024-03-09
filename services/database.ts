import * as Yup from "yup";

type Issue = {
  id: number;
  title: string;
  description: string;
};

export const IssueSchema = Yup.object({
  id: Yup.number().required(),
  title: Yup.string().min(1).required(),
  description: Yup.string().required(),
});

let database: Issue[] = [
  {
    id: 1,
    title: "First issue",
    description: "Some description",
  },
];

export function getIssues() {
  return database;
}

export function getIssue(issueId: number): Issue | undefined {
  return database.find((dbIssue) => dbIssue.id == issueId);
}

export function setIssue(issue: Issue) {
  const index = database.findIndex((dbIssue) => dbIssue.id == issue.id);
  if (index == -1) database.push(issue);
  else database[index] = issue;
}

export function deleteIssue(id: number) {
  database = database.filter((dbIssue) => dbIssue.id != id);
}
