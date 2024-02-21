import {Badge} from "@chakra-ui/react";

interface Props {
	score: number;
}

type Color = "green" | "yellow" | "";
const CriticScore = ({score}: Props) => {
	const color: Color = score > 75 ? "green" : score > 65 ? "yellow" : "";
	return (
		<Badge
			fontSize="14px"
			paddingX="8px"
			borderRadius="8px"
			colorScheme={color}>
			{score}
		</Badge>
	);
};

export default CriticScore;
