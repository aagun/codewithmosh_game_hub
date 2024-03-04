import {create, StoreApi, UseBoundStore} from "zustand";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchText?: string;
}

export interface GameQueryStore {
	gameQuery: GameQuery;
	setGenreId: (id: number) => void;
	setPlatformId: (id: number) => void;
	setSortOrder: (sortOrder: string) => void;
	setSearchText: (text: string) => void;
}

const useGameQueryStore: UseBoundStore<StoreApi<GameQueryStore>> = create<GameQueryStore>((set): GameQueryStore => ({
	gameQuery: {},
	setSearchText: (searchText: string): void => set(() => ({gameQuery: {searchText}})),
	setGenreId: (genreId: number): void => set((store: GameQueryStore) => ({gameQuery: {...store.gameQuery, genreId}})),
	setPlatformId: (platformId: number): void => set((store: GameQueryStore) => ({gameQuery: {...store.gameQuery, platformId}})),
	setSortOrder: (sortOrder: string): void => set((store: GameQueryStore) => ({gameQuery: {...store.gameQuery, sortOrder}}))
}));

export default useGameQueryStore;
