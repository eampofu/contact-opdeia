import React from "react";

import Header from "../../Layout/Header/Header";
import RemoveAllContact from "../RemoveAllContact/RemoveAllContact";
import FavouriteContact from "../FavouriteContact/FavouriteContact";
import GeneralContact from "../GeneralContact/GeneralContact";
import Footer from "../../Layout/Footer/Footer";
import AddRandomContact from "../AddRandomContact/AddRandomContact";
import AddContact from "../AddContact/AddContact";
class ContactIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			contactList: [
				{
					id: 1,
					name: "Dexter Ramirez",
					phone: "0800 1111",
					email: "malesuada.vel@hotmail.ca",
					isFavourite: false,
				},
				{
					id: 2,
					name: "Sonya Pruitt",
					phone: "0386 517 2428",
					email: "diam.sed.diam@icloud.org",
					isFavourite: true,
				},
				{
					id: 3,
					name: "Simon Heath",
					phone: "0888 787 4166",
					email: "sem.semper.erat@protonmail.couk",
					isFavourite: true,
				},
				{
					id: 4,
					name: "Chancellor Parker",
					phone: "(016977) 3120",
					email: "orci.lobortis@outlook.org",
					isFavourite: false,
				},
				{
					id: 5,
					name: "Phelan Griffith",
					phone: "07624 121615",
					email: "gravida.praesent.eu@hotmail.com",
					isFavourite: false,
				},
			],
		};
	}
	// to add a new contact
	handleAddContact = (newContact) => {
		if (newContact.name == "") {
			return { status: "failure", msg: "Please Enter a valid Name" };
		} else if (newContact.phone == "") {
			return { status: "failure", msg: "Please Enter a valid Phone Number" };
		}
		const duplicateRecord = this.state.contactList.filter((x) => {
			if (x.name == newContact.name && x.phone == newContact.phone) {
				return true;
			}
		});

		if (duplicateRecord.length > 0) {
			return { status: "failure", msg: "Duplicate" };
		} else {
			const newFinalContact = {
				...newContact,
				id: this.state.contactList[this.state.contactList.length - 1].id + 1,
				isFavourite: false,
			};
			this.setState((prevState) => {
				return { contactList: prevState.contactList.concat([newFinalContact]) };
			});
			return { status: "success", msg: "Contact was added successfully" };
		}
	};
	// to toggle foavourites
	handleToggleFavourite = (contact) => {
		this.setState((prevState) => {
			return {
				contactList: prevState.contactList.map((obj) => {
					if (obj.id == contact.id) {
						return { ...obj, isFavourite: !obj.isFavourite };
					}
					return obj;
				}),
			};
		});
	};

	// delete contact
	handleDeleteContact = (contactId) => {
		this.setState((prevState) => {
			return {
				contactList: prevState.contactList.filter((obj) => {
					return obj.id !== contactId;
				}),
			};
		});
	};

	// add random 
	handleRandomContact=()=>{
		this.setState()
	}
	render() {
		return (
			<div>
				<Header />
				<div className="container " style={{ minHeight: "85vh" }}>
					<div className="row py-3">
						<div className="col-4 offset-2 row">
							<AddRandomContact  handleRandomContact={this.handleRandomContact}/>
						</div>

						<div className="col-4 row">
							<RemoveAllContact />
						</div>
						<div className="row py-2">
							<div className="col-8 offset-2 row">
								<AddContact handleAddContact={this.handleAddContact} />
							</div>
						</div>
						<div className="row py-4">
							<div className="col-8 offset-2 row">
								<FavouriteContact
									contacts={this.state.contactList.filter(
										(u) => u.isFavourite == true
									)}
									favouriteClick={this.handleToggleFavourite}
									deleteContact={this.handleDeleteContact}
								/>
							</div>
						</div>
						<div className="row py-4">
							<div className="col-8 offset-2 row">
								<GeneralContact
									contacts={this.state.contactList.filter(
										(u) => u.isFavourite == false
									)}
									favouriteClick={this.handleToggleFavourite}
									deleteContact={this.handleDeleteContact}
								/>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
export default ContactIndex;
