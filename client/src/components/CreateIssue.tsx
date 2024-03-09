import { FC } from "react";
import { Flex, Button, Input, Heading } from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { issueSchema } from "../lib/common";
import { createIssue } from "../lib/issues";

/*
 * Component for creating an issue
 * Renders form and sends request
 *
 * Accepts a onIssueCreate prop as a callback when an issue is created
 */

interface Props {
  onIssueCreate: () => void;
}
const CreateIssue: FC<Props> = ({ onIssueCreate }) => {
  return (
    <>
      <Heading as="h3" fontSize="xl" mb={4}>
        Create Issue:
      </Heading>
      <Formik
        onSubmit={async (values) => {
          await createIssue(values);
          onIssueCreate();
        }}
        initialValues={{ id: 0, title: "", description: "" }}
        validationSchema={issueSchema}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Flex columnGap={4} mb={6}>
                <Field as={Input} name="id" placeholder="ID" type="number" />
                <Field
                  as={Input}
                  name="title"
                  placeholder="Title"
                  type="text"
                />
                <Field
                  as={Input}
                  name="description"
                  placeholder="Description"
                  type="text"
                />
              </Flex>
              <Button type="submit" mb={10}>
                Create Issue
              </Button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default CreateIssue;
