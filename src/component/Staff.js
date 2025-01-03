import React, { useContext } from "react";
import { staffStyles } from "./styles";
import { LanguageContext } from "../context/Language";
import logo from "../assets/logoHum.png";
function Staff() {
  const { localization } = useContext(LanguageContext);
  const stuff = [
    {
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
    },
    {
      OrganizationDepartmentID: "a1d3c2f9-bd3b-4c7e-8e23-45b9c6e1d1a2",
      MemberTypeID: "f4e2a1c8-7b3f-4b2e-9d8a-98b7f6e5d3c9",
      PersonID: "c3b5e8d4-a6b3-4f7e-9d12-5b2e9f8d3c2b",
      ProfileImage: "https://example.com/images/staff/john_doe.jpg",
      StaffMemberID: "c1a7f7d5-8fbb-4f6d-91c8-7292bcf1b44b",
      FirstName: "John",
      LastName: "Doe",
      Birthdate: "1985-04-23T00:00:00",
      Gender: 1,
      MemberTypeName: "Software Engineer",
      OrganizationDepartmentName: "Engineering",
      OrganizationDepartmentDegree: 5,
    },
    {
      OrganizationDepartmentID: "b2c4e5d6-8f4d-4c7e-9a56-32d9a6f4c5a7",
      MemberTypeID: "e5f3d7a8-9b4e-4c3d-8f4e-6b9c7f8a5d4a",
      PersonID: "d7e4c5b6-9f3d-4e2b-8f6a-45b9e7d6f8c2",
      ProfileImage: "https://example.com/images/staff/jane_smith.jpg",
      StaffMemberID: "d3f8e1b3-bd6a-4d63-bf3c-4fcf98e6c7b2",
      FirstName: "Jane",
      LastName: "Smith",
      Birthdate: "1990-07-15T00:00:00",
      Gender: 2,
      MemberTypeName: "Marketing Specialist",
      OrganizationDepartmentName: "Marketing",
      OrganizationDepartmentDegree: 3,
    },
    {
      OrganizationDepartmentID: "c6f3b8d4-7a4d-4c8e-9d6b-5a9e7c6f5d8a",
      MemberTypeID: "f7d2c3a9-8d6e-4c5f-9e7a-3b5d6c8e9f1b",
      PersonID: "e8d3c5b7-a9e4-4f6d-8f4b-6c8d7f5b3e2a",
      ProfileImage: "https://example.com/images/staff/emily_johnson.jpg",
      StaffMemberID: "e7d4f9b2-5b2d-4f64-bb6f-3c2e8f59a7d4",
      FirstName: "Emily",
      LastName: "Johnson",
      Birthdate: "1978-11-02T00:00:00",
      Gender: 2,
      MemberTypeName: "HR Manager",
      OrganizationDepartmentName: "Human Resources",
      OrganizationDepartmentDegree: 4,
    },
  ];
  return (
    <div className={staffStyles.container}>
      <section className={staffStyles.section}>
        <div className={staffStyles.grid}>
          {stuff.map((person) => (
            <div className={staffStyles.cardContainer} key={person.PersonID}>
              <div
                className={"flex flex-row justify-evenly " + staffStyles.card}
              >
                <div className={"flex justify-center items-center"}>
                  {/* <div className={staffStyles.imageInner}> */}
                  <img
                    src={person.ProfileImage}
                    className={
                      staffStyles.image +
                      " rounded-lg justify-center items-center"
                    }
                    alt={person.FirstName + " " + person.LastName}
                  />
                </div>
                {/* </div> */}
                <div className={staffStyles.content}>
                  <h5 className={staffStyles.name}>
                    {person.FirstName + " " + person.LastName}
                  </h5>
                  <p className={staffStyles.role}>{person.MemberTypeName}</p>
                  <ul className={staffStyles.socialIcons}>
                    <a href="#!" className={staffStyles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={staffStyles.iconSvg}
                      >
                        <path
                          fill="currentColor"
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className={staffStyles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={staffStyles.iconSvgPrimary}
                      >
                        <path
                          fill="currentColor"
                          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                        />
                      </svg>
                    </a>
                    <a href="#!" className={staffStyles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={staffStyles.iconSvgSm}
                      >
                        <path
                          fill="currentColor"
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Staff;
