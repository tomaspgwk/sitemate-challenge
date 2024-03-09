import { useEffect, useState } from "react";
import "./App.css";
import { Issue } from "./types";
import {
  Box,
  ListItem,
  Flex,
  UnorderedList,
  Text,
  useToast,
  Heading,
} from "@chakra-ui/react";
import { getIssues } from "./lib/issues";
import DeleteIssue from "./components/DeleteIssue";
import UpdateIssue from "./components/UpdateIssue";
import CreateIssue from "./components/CreateIssue";

function App() {
  const [issues, setIssues] = useState<Issue[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      setIssues(await getIssues());
    };
    fetchData();
  }, []);
  const toast = useToast();

  return (
    <Box h="100vh">
      <Heading as="h1">Issue Management</Heading>
      <Box mt={5} mb={10}>
        <Heading as="h3" fontSize="xl" mb={4}>
          Issue List:
        </Heading>
        <UnorderedList>
          {issues.map((issue) => {
            return (
              <ListItem>
                <Flex columnGap={5}>
                  <Text as="span">ID: {issue.id}</Text>
                  <h5>Title: {issue.title}</h5>
                  <Text>Description: {issue.description}</Text>
                </Flex>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>

      <CreateIssue
        onIssueCreate={async () => {
          toast({
            title: "Issue created!",
            status: "success",
          });
          setIssues(await getIssues());
        }}
      />
      <UpdateIssue
        onIssueUpdate={async () => {
          toast({
            title: "Issue updated!",
            status: "success",
          });
          setIssues(await getIssues());
        }}
      />
      <DeleteIssue
        onIssueDelete={async () => {
          toast({
            title: "Issue Deleted!",
            status: "info",
          });
          setIssues(await getIssues());
        }}
      />
    </Box>
  );
}

export default App;
