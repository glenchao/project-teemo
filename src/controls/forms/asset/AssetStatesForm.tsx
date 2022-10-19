import { TextInput } from "@mantine/core";
import { useFormContext } from "./AssetFormContext";

export function AssetStatsForm() {
  const form = useFormContext();
  return (
    <>
      <TextInput
        required
        label="Year built"
        placeholder="e.g. 1998"
        {...form.getInputProps("stats.yearBuilt")}
      />
      <TextInput
        // optional
        label="Year renovated"
        placeholder="e.g. 2022"
        {...form.getInputProps("stats.yearRenovated")}
      />
      <TextInput
        required
        label="Lot size (m^2)"
        placeholder="e.g. 9999"
        {...form.getInputProps("stats.lotSize")}
      />
      <TextInput
        required
        label="Gross area (m^2)"
        placeholder="e.g. 1550"
        {...form.getInputProps("stats.grossArea")}
      />
      <TextInput
        required
        label="Net internal area (m^2)"
        placeholder="e.g. 1337"
        {...form.getInputProps("stats.netInternalArea")}
      />
      <TextInput
        required
        label="Net rentable area (m^2)"
        placeholder="e.g. 999"
        {...form.getInputProps("stats.netRentableArea")}
      />
      <TextInput
        required
        label="Avg number of stories"
        placeholder="e.g. 4"
        {...form.getInputProps("stats.avgNumStories")}
      />
      <TextInput
        required
        label="Number of buildings"
        placeholder="e.g. 3"
        {...form.getInputProps("stats.numBuildings")}
      />
      <TextInput
        required
        label="Parking spots"
        placeholder="e.g. 15"
        {...form.getInputProps("stats.numParkings")}
      />
    </>
  );
}
