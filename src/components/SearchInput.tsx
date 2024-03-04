import {FormEvent, JSX, RefObject, useRef} from "react";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import useGameQueryStore, {GameQueryStore} from "../store.ts";

const SearchInput = (): JSX.Element => {
	const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s: GameQueryStore) => s.setSearchText);
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (ref.current) setSearchText(ref.current.value);
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
