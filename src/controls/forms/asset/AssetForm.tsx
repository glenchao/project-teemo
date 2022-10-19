import { SimpleGrid, Stack } from "@mantine/core";
import { AssetBasicForm } from "./AssetBasicForm";
import { AssetUnitConfigForm, AssetUnitsForm } from "./AssetUnitsForm";

export function AssetForm() {
  return (
    <SimpleGrid cols={2}>
      <AssetBasicForm />
      <Stack>
        <AssetUnitConfigForm />
        <AssetUnitsForm />
      </Stack>
    </SimpleGrid>
  );
}
