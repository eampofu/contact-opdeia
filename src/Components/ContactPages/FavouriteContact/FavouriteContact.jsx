import React from "react";
import Contact from "../Contact/Contact";

const FavouriteContact = (props) => {
	return (
		<div>
			{props.contacts.map((contact, index) => (
				<Contact contact={contact} key={index}></Contact>
			))}
		</div>
	);
};

export default FavouriteContact;
