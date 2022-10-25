import { TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IUnit } from "../../../interfaces/IAsset";

export function AssetUnitsForm() {
  const form = useForm<IUnit>();

  return (
    <form onSubmit={form.onSubmit((value: unknown) => console.log(value))}>
      <Title order={3}>Units</Title>
      <TextInput required label="Name" {...form.getInputProps("name")} />
      <TextInput
        required
        label="Configuration"
        {...form.getInputProps("config")}
      />
      <TextInput
        required
        label="Quantity"
        {...form.getInputProps("quantity")}
      />
      <TextInput
        required
        label="Net rentable area"
        {...form.getInputProps("netRentableArea")}
      />
      <TextInput
        required
        label="Rent per month"
        {...form.getInputProps("rentPerMonth")}
      />
    </form>
  );
}
