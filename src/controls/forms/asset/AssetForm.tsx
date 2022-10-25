import { SimpleGrid, Stack } from "@mantine/core";
import { mockUnits } from "../../../mock/MockUnits";
import { UnitMix } from "../../lists/UnitMix";
import { AssetBasicForm } from "./AssetBasicForm";
import { AssetUnitsForm } from "./AssetUnitsForm";

export function AssetForm() {
  return (
    <SimpleGrid cols={2}>
      <AssetBasicForm />
      <Stack>
        <UnitMix units={mockUnits} />
        <AssetUnitsForm />
      </Stack>
    </SimpleGrid>
  );
}
