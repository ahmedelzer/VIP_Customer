import { useContext } from "react";
import { ContactContext } from "../../context/Contact";
import { LanguageContext } from "../../context/Language";
import CompanySocialMedia from "../../Schemas/CompanySocialMedia.json";
import { GetIconContact } from "../GetIconContact";

function Footer() {
  const { localization } = useContext(LanguageContext);
  const { branches, masterBranch } = useContext(ContactContext);

  return (
    <footer className="mt-7 text-surface/75 !bg-primary">
      <div className="container">
        <div className="flex items-center justify-center border-b-2 border-card py-6">
          <div className="flex justify-center">
            {CompanySocialMedia.map((item) => (
              <a
                href={item.link}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
                className="me-6 [&>svg]:h-6 [&>svg]:w-6"
              >
                {GetIconContact(item.iconType, 20)}
              </a>
            ))}
          </div>
        </div>
        <div className="py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 items-center justify-between">
            {localization.VIP_customer.footer.columns.map((column, index) => (
              <div className="md:text-lef" key={index}>
                <h6 className="mb-4 font-semibold uppercase">{column.title}</h6>
                {column.items.map((item, index) => (
                  <p className="mb-4" key={index}>
                    <a href={item.link}>{item.title}</a>
                  </p>
                ))}
              </div>
            ))}

            <div className="">
              <h6 className="mb-4 font-semibold uppercase">
                {localization.VIP_customer.footer.ContactColumn.title}
              </h6>
              {localization.VIP_customer.footer.ContactColumn.items.map(
                (item, index) => (
                  <p
                    className="mb-4 flex items-center justify-start"
                    key={index}
                  >
                    <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                      {GetIconContact(item.typeIcon, 20)}
                    </span>
                    {item.title}
                  </p>
                )
              )}
            </div>
          </div>
        </div>

        <div className="bg-black/5 p-6 text-center">
          <span>{localization.VIP_customer.footer.copyRight}</span>
          <a className="font-semibold" href="/">
            IHS Logo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
