"use client";
import Select from "react-select";
import { useFormContext } from "react-hook-form";

const options = [
  {
    label: "Advertising",
    value: "Advertising",
  },
  {
    label: "Business Services",
    value: "Business Services",
  },
  {
    label: "Blockchain",
    value: "Blockchain",
  },
  {
    label: "Cloud",
    value: "Cloud",
  },
  {
    label: "Consumer Tech",
    value: "Consumer Tech",
  },
  {
    label: "Education",
    value: "Education",
  },
  {
    label: "Fintect",
    value: "Fintech",
  },
  {
    label: "Gaming",
    value: "Gaming",
  },
  {
    label: "Food & Beverage",
    value: "Food & Beverage",
  },
  {
    label: "Healthcare",
    value: "Healthcare",
  },
  {
    label: "Hosting",
    value: "Hosting",
  },
  {
    label: "Media",
    value: "Media",
  },
];

export default function IndustrySelect() {
  const { setValue } = useFormContext();

  return (
    <Select
      options={options}
      isMulti
      instanceId={"industry_type"}
      placeholder="Select Industry"
      className="basic-multi-select text-sm text-gray-dark border-input"
      classNamePrefix="select"
      styles={{
        placeholder: (base): any => ({ ...base, color: "#64748b" }),
        control: (base): any => ({
          ...base,
          borderColor: "hsl(var(--input))",
        }),
      }}
      onChange={(val) =>
        setValue(
          "industry_type",
          val.map((c) => c.value)
        )
      }
    />
  );
}
