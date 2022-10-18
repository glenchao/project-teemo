import { Box, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IAsset } from "../../interfaces/IAsset";

export function AssetForm() {
  const form = useForm<Partial<IAsset>>({
    initialValues: {},
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Address"
          placeholder="123 Main St."
          {...form.getInputProps("address")}
        />
      </form>
    </Box>
  );
}
