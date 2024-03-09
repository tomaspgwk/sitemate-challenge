import * as Yup from "yup";

export const issueIdSchema = Yup.object({
  id: Yup.number().required(),
});

export const issueSchema = Yup.object({
  id: Yup.number().required(),
  title: Yup.string().min(1).required(),
  description: Yup.string().required(),
});
