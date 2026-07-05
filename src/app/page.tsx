"use client";

import { useState } from "react";

import { Select } from "@/components/atoms/Select";
import {Button} from "@/componentsv2/atoms/Button";

export default function Home() {

  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const [selectedValues, setSelectedValues] = useState<string | string[]>([]);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  return (
    <div>
      <p className="text-button-14">hej</p>
      <Select
        multiple
        options={options}
        value={selectedValues}
        onChange={(value) => setSelectedValues(value)}
        placeholder="Select an option"
      />
      <Button
        label="Click me"
        size="md"
        intent="primary"
      />
      <Button
        label="Click me"
        size="lg"
        intent="primary"
      />

      Main Page
    </div>
  );
}
