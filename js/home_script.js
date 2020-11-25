window.addEventListener("DOMContentLoaded", () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =
        "<th>FullName</th>" +
        "<th>Address</th>" +
        "<th>City</th>" +
        "<th>State</th>" +
        "<th>Zip Code</th>" +
        "<th>Phone Number</th>" +
        "<th>Actions</th>";
    let addressBookContactLocalList = createAddressBookJSON();
    let innerHtml = `${headerHtml}`;
    for (let contactData of addressBookContactLocalList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>${contactData._fullName}</td>
            <td>${contactData._address}</td>
            <td>${contactData._city}</td>
            <td>${contactData._state}</td>
            <td>${contactData._zip}</td>
            <td>${contactData._phoneNumber}</td>
            <td>
                <img name="${contactData._id}" onclick="remove(this)" alt="delete" src="..//assets/icons/delete-black-18dp.svg">
                <img name="${contactData._id}" onclick="update(this)" alt="edit" src="..//assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const createAddressBookJSON = () => {
    let addressBookContactLocalList = [{
            _address: "2/6, Sector-L, L.D.A. Colony, Kanpur Road, Aashiyana, Lucknow, Uttar Pradesh",
            _city: "Lucknow",
            _fullName: "Aditya Verma",
            _id: "1",
            _phoneNumber: "8989036180",
            _state: "Uttar Pradesh",
            _zip: "226022",
        },
        {
            _address: "11/33, Mark Town, Bhopal, Madhya Pradesh",
            _city: "Bhopal",
            _fullName: "Alan Starboy",
            _id: "2",
            _phoneNumber: "9198546428",
            _state: "Madhya Pradesh",
            _zip: "482005",
        }
    ];
    return addressBookContactLocalList;
}