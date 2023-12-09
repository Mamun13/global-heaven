import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import React, {Fragment, useState} from "react";

const ComboProductDescription = ({combo}) => {
	const [key, setKey] = useState("home");

	return combo?.id && (
		<Fragment>
			<Tabs id="controlled" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 border-0">
				<Tab eventKey="home" title="Description" className="pb-5 ps-0 border-0 font-lato">
					<p className="font-16 font-lato border-top pt-2 border_top text-justify">
						{combo?.product_short_desc}
					</p>
				</Tab>
				<Tab eventKey="Specification" title="Specification" className="pb-5 font-lato font-18 rounded-0">
					<div className="detail-table border-top border_top pt-3">
						{combo?.product_long_desc}
					</div>
				</Tab>
			</Tabs>
		</Fragment>
	);
};

export default ComboProductDescription;
