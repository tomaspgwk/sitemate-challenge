import { FC } from "react";
import { Box, Flex, Button, Input, Heading } from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { issueIdSchema } from "../lib/common";
import { deleteIssue } from "../lib/issues";

interface Props {
  onIssueDelete: () => void;
}
const DeleteIssue: FC<Props> = ({ onIssueDelete }) => {
  return (
    <>
      <Heading as="h3" fontSize="xl" mb={4}>
        Delete Issue
      </Heading>
      <Box>
        <Formik
          onSubmit={async (values) => {
            await deleteIssue(values.id);
            onIssueDelete();
          }}
          initialValues={{ id: 0 }}
          validationSchema={issueIdSchema}
        >
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Flex columnGap={4}>
                  <Field as={Input} name="id" type="text" />
                  <Button type="submit">Delete Issue</Button>
                </Flex>
              </form>
            );
          }}
        </Formik>
      </Box>
    </>
  );
};

export default DeleteIssue;
