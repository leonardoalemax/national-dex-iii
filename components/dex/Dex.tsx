import React from "react";
import { findByLang } from "../helpers/findByLang";
import usePokeDex from "../hooks/usePokeDex";

export default function Dex({ name }: { name: string }) {
	const { dex, fetchPokeDex } = usePokeDex();

	React.useEffect(() => {
		fetchPokeDex(name);
	}, []);

	return dex.is_main_series ? (
		<li title={findByLang(dex?.descriptions).description}>
			{findByLang(dex?.names).name} <small>{dex.pokemon_entries.length}</small>
		</li>
	) : (
		<span />
	);
}
