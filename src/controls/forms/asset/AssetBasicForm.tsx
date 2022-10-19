import { Select, TextInput, Title } from "@mantine/core";
import { assetTypes } from "../../../interfaces/IAsset";
import { FormProvider, useForm } from "./AssetFormContext";
import { AssetGeoForm } from "./AssetGeoForm";
import { AssetStatsForm } from "./AssetStatesForm";

const assetTypeSelections = assetTypes.map((value: string) => ({
  value,
  label: value,
}));

export function AssetBasicForm() {
  const form = useForm({
    initialValues: {},
    validateInputOnBlur: true,
  });

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Title order={3}>Basic info</Title>
        <TextInput
          required
          label="Name"
          placeholder="e.g. Chao Estate"
          {...form.getInputProps("name")}
        />
        <Select
          label="Type"
          placeholder="Pick one"
          data={assetTypeSelections}
          {...form.getInputProps("type")}
        />
        <AssetGeoForm />
        <AssetStatsForm />
      </form>
    </FormProvider>
  );
}
