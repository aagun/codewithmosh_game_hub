import {FormEvent, JSX, RefObject, useRef} from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

interface Props {
	onSearch: (searchText: string) => void;
}
const SearchInput = ({onSearch}: Props): JSX.Element => {
	const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

	const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (ref.current) onSearch(ref.current.value);
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<InputGroup>
				<InputLeftElement children={<BsSearch/>}/>
				<Input ref={ref} variant="filled" placeholder="Search games..." borderRadius={20}/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
