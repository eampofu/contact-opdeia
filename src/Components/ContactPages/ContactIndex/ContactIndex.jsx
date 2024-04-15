import React from "react";

import Header from "../../Layout/Header/Header";
import RemoveAllContact from "../RemoveAllContact/RemoveAllContact";
import FavouriteContact from "../FavouriteContact/FavouriteContact";
import GeneralContact from "../GeneralContact/GeneralContact";
import Footer from "../../Layout/Footer/Footer";
import AddRandomContact from "../AddRandomContact/AddRandomContact";
import AddContact from "../AddContact/AddContact";
const ContactIndex = () => {
	return (
		<div>
			<Header />
			<div className="container " style={{ minHeight: "85vh" }}>
				<div className="row py-3">
					<div className="col-4 offset-2">
						<AddRandomContact />
					</div>

					<div className="col-4">
						<RemoveAllContact />
					</div>
					<div className="row py-2">
						<AddContact />
					</div>
					<div className="row py-4">
						<FavouriteContact />
					</div>
					<div className="row py-4">
						<GeneralContact />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ContactIndex;
