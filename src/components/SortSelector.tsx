import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaChevronDown} from "react-icons/fa6";
import {ReactNode} from "react";
import useGameQueryStore, {GameQueryStore} from "../store.ts";


export interface SortOrder {
	value: string;
	label: string;
}

const SortSelector = () => {
	const sortOrders: SortOrder[] = [
		{value: "", label: "Relevance"},
		{value: "-added", label: "Date added"},
		{value: "name", label: "Name"},
		{value: "-released", label: "Release date"},
		{value: "-metacritic", label: "Popularity"},
		{value: "-rating", label: "Average rating"},
	]

	const selectedSortOrder: string | undefined = useGameQueryStore((s: GameQueryStore) => s.gameQuery.sortOrder);
	const setSelectedSortOrder = useGameQueryStore((s: GameQueryStore) => s.setSortOrder);

	const nameSelectedSortOrder: string = sortOrders.find((s: SortOrder): boolean => s.label === selectedSortOrder)?.label || "Relevance";

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<FaChevronDown/>}>
				{`Order by: ${nameSelectedSortOrder}`}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sortOrder: SortOrder): ReactNode =>
					<MenuItem
						key={sortOrder.value}
						onClick={() => setSelectedSortOrder(sortOrder.value)}>
						{sortOrder.label}
					</MenuItem>
				)}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
