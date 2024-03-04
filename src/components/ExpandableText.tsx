import {Button, Text} from "@chakra-ui/react";
import {JSX, useState} from "react";

interface Props {
	children: string;
}

const ExpandableText = ({children}: Props): JSX.Element => {
	const [expanded, setExpanded] = useState(false);
	const limit: number = 300;

	if (!children) return <></>;

	if (children.length <= limit) return <Text>{children}</Text>

	const summary: string = expanded ? children :children.slice(0, limit) + "...";

	return (
		<>
			<Text>
				{summary}
				<Button
					size="xs"
					fontWeight="bold"
					colorScheme="yellow"
					onClick={() => setExpanded(!expanded)}>
					{expanded ? "Show less" : "Read more"}
				</Button>
			</Text>
		</>
	);
};

export default ExpandableText;
