import { Button, List, Stack, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { IUnit } from "../../interfaces/IAsset";
import { ITableHeader, Table } from "../../library/controls/Table/Table";

export interface IUnitMixProps {
  units: IUnit[];
}

const headers: ITableHeader<IUnit>[] = [
  { key: "type", title: "Type" },
  { key: "configuration", title: "Configuration" },
  { key: "netRentableArea", title: "Net rentable area" },
  { key: "rentPerMonth", title: "Rnet per month" },
  { key: "quantity", title: "Quantity" },
];

export function UnitMix(props: IUnitMixProps) {
  return (
    <Stack>
      <Title order={3}>Unit mix</Title>
      <div>
        <Button leftIcon={<IconPlus size={14} />}>New unit type</Button>
      </div>
      <Table
        getItemId={(unit: IUnit) => unit.id}
        items={props.units}
        headers={headers}
      />
    </Stack>
  );
}
