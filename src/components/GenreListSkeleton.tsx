import {Box, HStack, List, ListItem, Skeleton, SkeletonText} from "@chakra-ui/react";
import {ReactNode} from "react";

interface Props {
	skeletons: number[]
}

const GenreListSkeleton = ({skeletons}: Props) => {
	return (
		<Box>
			<List>
				{skeletons.map((skeleton: number): ReactNode =>
					<ListItem key={skeleton} py="5px">
						<HStack justifyContent="space-between">
							<Skeleton
								height="32px"
								width="32px"
								borderRadius="8px"/>
							<SkeletonText
								noOfLines={1}
								width="100%"/>
						</HStack>
					</ListItem>)}
			</List>
		</Box>
	);
};

export default GenreListSkeleton;
