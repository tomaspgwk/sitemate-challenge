import * as Yup from "yup";

// Schema for Issue ID form validation
export const issueIdSchema = Yup.object({
  id: Yup.number().required(),
});

// Schema for Issue object form validation
export const issueSchema = Yup.object({
  id: Yup.number().required(),
  title: Yup.string().min(1).required(),
  description: Yup.string().required(),
});
