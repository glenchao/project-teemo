import { Table as MantineTable } from "@mantine/core";

export interface ITableHeader<ItemType extends {}> {
  key: keyof ItemType;
  title: string;
}

export interface ITableProps<ItemType extends {}> {
  getItemId: (item: ItemType) => string;
  items: ItemType[];
  headers: ITableHeader<ItemType>[];
}

interface ITableItemProps<ItemType extends {}> extends ITableProps<ItemType> {}

function renderRows<ItemType extends {}>(props: ITableItemProps<ItemType>) {
  const rendered = props.items.map((item: ItemType) => {
    const columns = props.headers.map((header: ITableHeader<ItemType>) => (
      <td>{item[header.key]}</td>
    ));
    return <tr key={props.getItemId(item)}>{columns}</tr>;
  });
  return rendered;
}

function renderHeaders<ItemType extends {}>(headers: ITableHeader<ItemType>[]) {
  return (
    <tr>
      {headers.map((header: ITableHeader<ItemType>) => (
        <th key={header.key as string}>{header.title}</th>
      ))}
    </tr>
  );
}

export function Table<ItemType extends {}>(props: ITableProps<ItemType>) {
  const rows = renderRows(props);
  const headers = renderHeaders(props.headers);
  return (
    <MantineTable>
      <thead>{headers}</thead>
      <tbody>{rows}</tbody>
    </MantineTable>
  );
}
