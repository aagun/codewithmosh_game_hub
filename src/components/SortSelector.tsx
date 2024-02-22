import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaChevronDown} from "react-icons/fa6";
import {ReactNode} from "react";

interface Props {
	selectedSortOrder: SortOrder | null;
	onSelectedSortOrder: (sortOrder: SortOrder) => void;
}

export interface SortOrder {
	value: string;
	label: string;
}
const SortSelector = ({selectedSortOrder, onSelectedSortOrder}: Props) => {
	const sortOrders: SortOrder[] = [
		{value: "", label: "Relevance"},
		{value: "-added", label: "Date added"},
		{value: "name", label: "Name"},
		{value: "-released", label: "Release date"},
		{value: "-metacritic", label: "Popularity"},
		{value: "-rating", label: "Average rating"},
	]

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<FaChevronDown/>}>
				{`Order by: ${selectedSortOrder ? selectedSortOrder.label : "Relevance"}`}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sortOrder: SortOrder): ReactNode =>
					<MenuItem
						key={sortOrder.value}
						onClick={() => onSelectedSortOrder(sortOrder)}>
						{sortOrder.label}
					</MenuItem>
				)}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
