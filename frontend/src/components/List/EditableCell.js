import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  // When the input is blurred, we'll call our table meta's updateData function
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      className="m-1 p-1 bg-transparent max-w-full"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      variant="filled"
      size="sm"
      w="95%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      border="none"
     focusBorderColor="none"
     style={{ border: 'none', outline: 'none' }}
    />
  );
};
export default EditableCell;