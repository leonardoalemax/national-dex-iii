import React from "react";
import usePokeDex from "../hooks/usePokeDex";
import Dex from "./Dex";

export default function Dexes() {
	const { list, load } = usePokeDex();

	React.useEffect(() => {
		load();
	}, []);

	return (
		<div>
			<h1>Dexes</h1>
			<ul>
				{list?.map(({ name }) => (
					<Dex name={name} />
				))}
			</ul>
			<hr />
		</div>
	);
}
