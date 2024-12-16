import BranchesByLocationMap from "../component/BranchesByLocationMap";
import logo from "../assets/logoHum.png";
import Header from "../component/Header/Header";
import PartnerSection from "../component/PartnerSection";
function Home() {
  const branches = [
    {
      CompanyID: 12345,
      CompanyName: "Tech Innovations Ltd.",
      AddressLocationID: 67890,
      CompanyBranchID: 54321,
      Address: "123 Business St., Silicon Valley, CA",
      LocationLatitudePoint: "37.7749",
      LocationLongitudePoint: "-122.4194",
      OrganizationDepartmentID: "a1d3c2f9-bd3b-4c7e-8e23-45b9c6e1d1a2",
      MemberTypeID: "f4e2a1c8-7b3f-4b2e-9d8a-98b7f6e5d3c9",
      PersonID: "c3b5e8d4-a6b3-4f7e-9d12-5b2e9f8d3c2b",
      ProfileImage: logo,
      StaffMemberID: "c1a7f7d5-8fbb-4f6d-91c8-7292bcf1b44b",
      FirstName: "John",
      LastName: "Doe",
      Birthdate: "1985-04-23T00:00:00",
      Gender: 1,
      MemberTypeName: "Software Engineer",
      OrganizationDepartmentName: "Engineering",
      OrganizationDepartmentDegree: 5,
      CompanyBranchContacts: [
        {
          CompanyBranchContactID: "b8d6c3a4-e92f-4b73-b1b2-c4f4b07805a0",
          CodeNumber: 1,
          CompanyBranchID: "54321",
          ContactTypeID: "3e23a83e-83d3-4d62-b462-bc41614f4f27",
          Contact: "john.doe@example.com",
          IsActive: true,
        },
        {
          CompanyBranchContactID: "d2595f9f-47b7-43a1-a2ff-4732ff321b7e",
          CodeNumber: 0,
          CompanyBranchID: "54321",
          ContactTypeID: "67b87d6d-6780-4b4b-b02d-b17b8dcd83e3",
          Contact: "+1234567890",
          IsActive: false,
        },
      ],
    },
    {
      CompanyID: 12346,
      AddressLocationID: 67891,
      CompanyBranchID: 54322,
      CompanyName: "Creative Solutions Inc.",
      Address: "456 Innovation Ave., San Francisco, CA",
      LocationLatitudePoint: "37.7749",
      LocationLongitudePoint: "-12.4195",
      OrganizationDepartmentID: "a1d3c2f9-bd3b-4c7e-8e23-45b9c6e1d1a2",
      MemberTypeID: "f4e2a1c8-7b3f-4b2e-9d8a-98b7f6e5d3c9",
      PersonID: "c3b5e8d4-a6b3-4f7e-9d12-5b2e9f8d3c2b",
      ProfileImage: logo,
      StaffMemberID: "c1a7f7d5-8fbb-4f6d-91c8-7292bcf1b44b",
      FirstName: "John",
      LastName: "Doe",
      Birthdate: "1985-04-23T00:00:00",
      Gender: 1,
      MemberTypeName: "Software Engineer",
      OrganizationDepartmentName: "Engineering",
      OrganizationDepartmentDegree: 5,
      CompanyBranchContacts: [
        {
          CompanyBranchContactID: "b8d6c3a4-e92f-4b73-b1b2-c4f4b07805a0",
          CodeNumber: 1,
          CompanyBranchID: "54321",
          ContactTypeID: "3e23a83e-83d3-4d62-b462-bc41614f4f27",
          Contact: "john.doe@example.com",
          IsActive: true,
        },
        {
          CompanyBranchContactID: "d2595f9f-47b7-43a1-a2ff-4732ff321b7e",
          CodeNumber: 0,
          CompanyBranchID: "54321",
          ContactTypeID: "67b87d6d-6780-4b4b-b02d-b17b8dcd83e3",
          Contact: "+1234567890",
          IsActive: false,
        },
      ],
    },
    // Add more branches as needed
  ];
  const person = {
    OrganizationDepartmentID: "a1d3c2f9-bd3b-4c7e-8e23-45b9c6e1d1a2",
    MemberTypeID: "f4e2a1c8-7b3f-4b2e-9d8a-98b7f6e5d3c9",
    PersonID: "c3b5e8d4-a6b3-4f7e-9d12-5b2e9f8d3c2b",
    ProfileImage: logo,
    StaffMemberID: "c1a7f7d5-8fbb-4f6d-91c8-7292bcf1b44b",
    FirstName: "John",
    LastName: "Doe",
    Birthdate: "1985-04-23T00:00:00",
    Gender: 1,
    MemberTypeName: "Software Engineer",
    OrganizationDepartmentName: "Engineering",
    OrganizationDepartmentDegree: 5,
  };
  //todo i merge the person with branches to make each branch have  a different prosonality
  return (
    // <div>
    <div className="card w-full md:w-1/2 p-1 !bg-body z-0 text-center mx-auto">
      <Header />
      <PartnerSection partners={branches} />
      <BranchesByLocationMap branches={branches} person={person} />
    </div>
    // </div>
  );
}

export default Home;
// {
//   "postWithDisplayFiles": {
//       "post": {
//           "postID": "1a6dca80-4216-429b-a0a0-75047a1f3588",
//           "creationDate": "2024-08-14T20:20:35.007",
//           "postTitle": "string7",
//           "postDescription": "string"
//       },
//       "displayFiles": [
//           {
//               "displayFileForPostID": "e089a7f8-1eeb-4655-9aeb-9ed2d5066366",
//               "displayFile": "ArchivingFiles\\b9494689-2c52-4e0b-8f4e-1a7077e8ce74.png",
//               "fileCodeNumber": 0
//           },
//           {
//               "displayFileForPostID": "0ca5e0d8-90e4-4557-af8e-ccbb6d224a28",
//               "displayFile": "ArchivingFiles\\8b217bff-047f-4a7e-9105-b8f2eb441635.png",
//               "fileCodeNumber": 0
//           },
//           {
//               "displayFileForPostID": "682fbc97-7343-4c62-9485-ce989267505d",
//               "displayFile": "ArchivingFiles\\8b217bff-047f-4a7e-9105-b8f2eb441635.png",
//               "fileCodeNumber": 0
//           },
//           {
//               "displayFileForPostID": "c7260a8e-3f9e-4542-8701-f0ac8aa07ba6",
//               "displayFile": "ArchivingFiles\\8b217bff-047f-4a7e-9105-b8f2eb441635.png",
//               "fileCodeNumber": 0
//           }
//       ]
//   },
//   "postID": "1a6dca80-4216-429b-a0a0-75047a1f3588",
//   "showTime": "2024-09-24T10:13:15.8",
//   "duration": 10000
// }
