import {Box, Heading, Text} from "@chakra-ui/react";
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

const ErrorPage = () => {
	const error = useRouteError();
	const message: string = isRouteErrorResponse(error) ? "This page does not exist." : "An unexpected error occurred."

	return (
		<>
			<NavBar />
			<Box p={5}>
			<Heading>Oops</Heading>
			<Text>{message}</Text>
			</Box>
		</>
	);
};

export default ErrorPage;
