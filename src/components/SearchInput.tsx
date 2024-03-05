import {FormEvent, JSX, RefObject, useRef} from "react";
import {BsSearch} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import useGameQueryStore, {GameQueryStore} from "../store.ts";

const SearchInput = (): JSX.Element => {
	const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s: GameQueryStore) => s.setSearchText);
	const navigate: NavigateFunction = useNavigate();
	const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		if (ref.current) {
			setSearchText(ref.current.value);
			navigate("/");
		}
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
