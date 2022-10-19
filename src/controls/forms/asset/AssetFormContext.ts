import { createFormContext } from "@mantine/form";
import { IAsset } from "../../../interfaces/IAsset";

export const [FormProvider, useFormContext, useForm] =
  createFormContext<Partial<IAsset>>();
