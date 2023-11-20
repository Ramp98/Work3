import { Box, ChakraProvider, Heading, StackDivider } from "@chakra-ui/react";ChakraProvider
import TaskTable from "./TaskTable";
function ListContainer() {
  return (
    <div>
    <Box className="ml-8" px={1} pt={24} fontSize="sm">
      {/* <Heading mb={10}>TanStack Table</Heading> */}
      <TaskTable />
    </Box>
    </div>
  );
}

export default ListContainer;