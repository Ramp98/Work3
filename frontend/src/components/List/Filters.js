import {
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
  } from "@chakra-ui/react";
  import SearchIcon from "./icons/SearchIcon";
  import FilterPopover from "./FilterPopover";
  
  const Filters = ({ columnFilters, setColumnFilters }) => {
    const taskName = columnFilters.find((f) => f.id === "task")?.value || "";
  
    const onFilterChange = (id, value) =>
      setColumnFilters((prev) =>
        prev
          .filter((f) => f.id !== id)
          .concat({
            id,
            value,
          })
      );
  
    return (
      <HStack className="text-sm" mb={20} spacing={3}>
        <InputGroup className="mr-24" size="sm" maxW="12rem">
          <InputLeftElement className="pl-[0.55rem] pt-[0.2rem]" pointerEvents="none">
            <Icon as={SearchIcon} />
          </InputLeftElement>
          <Input
            className="pl-8"
            type="text"
            variant="filled"
            placeholder="Task name"
            borderRadius={5}
            value={taskName}
            onChange={(e) => onFilterChange("task", e.target.value)}
          />
        </InputGroup>
        <FilterPopover
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      </HStack>
    );
  };
  export default Filters;