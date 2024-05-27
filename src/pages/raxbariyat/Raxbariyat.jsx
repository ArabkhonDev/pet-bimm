import "./raxbariyat.css";

import { getInfoHuman } from "../../data/human";
import { Test } from "../../components/raxbariyat/Test";

export const Raxbariyat = () => {
	const human = getInfoHuman();
	return (
		<>
			<div className="raxbariyat">
				<div className="container">
					<div className="raxbariyat_main">
						<div className="raxbariyat_title">
							<h2>Mamuryat</h2>
							<h1>Items List</h1>
							{human.map((h) => (
								<Test
									h={h}
									key={h.id}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
