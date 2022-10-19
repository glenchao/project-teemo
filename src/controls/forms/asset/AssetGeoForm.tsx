import { TextInput } from "@mantine/core";
import { useFormContext } from "./AssetFormContext";

export function AssetGeoForm() {
  const form = useFormContext();
  return (
    <>
      <TextInput
        required
        label="Address"
        placeholder="e.g. 123 Main St."
        {...form.getInputProps("geo.address")}
      />
      <TextInput
        required
        label="City"
        placeholder="e.g. Seattle"
        {...form.getInputProps("geo.city")}
      />
      <TextInput
        required
        label="County"
        placeholder="e.g. King"
        {...form.getInputProps("geo.county")}
      />
      <TextInput
        required
        label="State"
        placeholder="e.g. Washington"
        {...form.getInputProps("geo.state")}
      />
      <TextInput
        required
        label="Metropolitan statistic area"
        placeholder="e.g. ???"
        {...form.getInputProps("geo.msa")}
      />
    </>
  );
}
