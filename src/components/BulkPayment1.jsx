import React from "react";
import TailModal from "./TailModal";
import { Group, Select, Input, Button, Icon } from "elementz";
import emailjs from "emailjs-com";

const BulkPayment1 = () => {
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [agent, setAgent] = React.useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    IMSSBN: "",
  });
  const formRef = React.useRef();
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();
      // State
      if (agent.firstName === "") {
        console.log("First Name is required");
        return;
      }
      if (agent.lastName === "") {
        console.log("Last Name is required");
        return;
      }
      if (agent.phone === "") {
        console.log("Phone is required");
        return;
      }
      if (agent.email === "") {
        console.log("Email is required");
        return;
      }
      if (agent.IMSSBN === "") {
        console.log("Address is required");
        return;
      }
      setLoading(true);
      console.log(agent);
    },
    [agent]
  );

  React.useEffect(() => {
    if (loading === false) {
      return;
    }

    /**
         * Email Envs Start
         * 
         *
        const templateParams = {
            service_id: process.env.REACT_APP_SERVICE_ID,
            template_id: process.env.REACT_APP_TEMPLATE_ID,
            user_id: process.env.REACT_APP_USER_ID,
        }
         *
         * Email Envs End
         * */

    emailjs
      .sendForm(
        "service_6ugtvrc",
        "template_wp8e9oz",
        formRef.current,
        "user_EEy9xHcbi6czUaobwjVRE"
      )
      .then((res) => {
        setLoading(false);
        console.log(res.text);
        if (res.text === "OK") {
          setStatus(res.text);
          setSubmitted(true);
          setTitle("Thank You");
          setMessage("We will get back to you as soon as possible.");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus(err.text);
        setLoading(false);
        setSubmitted(true);
        setTitle("Oops! Failure");
        setMessage("Something went wrong. Please try again later.");
      });
  }, [loading]);

  return (
    <main className="">
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-0 xl:py-0 my-7">
        <div className="flex justify-center w-full mb-24 -mt-10 relative">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6 my-5">
              BULK PAYMENT 
            </h2>
                <div className="absolute right-0 text-blue-500 underline"><a href="http">download CSV Template for bulk payment</a></div>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is where Bulk payment will take place
            </p>
          </div>
        </div>
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          {/* Name of Service Begins */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <Group space>
              <div className="lg:px-24 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name of Service
                </label>
                <Select.Nice
                  md
                  secondary
                  active
                  full
                  className="min-w-full max-w-350 w-350"
                >
                  <option selected value={1}>
                    -Select-
                  </option>
                  <option value={2}>One</option>
                  <option value={3}>Two</option>
                </Select.Nice>
              </div>
            </Group>
          </div>

          {/* Name of Service ends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 justify-center items-center lg:w-auto lg:px-24">
            <Input
              lg
              full
              placeholder="eg. John"
              type="text"
              name="firstName"
              label="First Name"
              before={<Icon name="text" />}
              onChange={(e) =>
                setAgent({ ...agent, firstName: e.target.value })
              }
            />
            <Input
              lg
              full
              placeholder="eg. Okonkwah"
              type="text"
              name="lastName"
              label="Last Name"
              before={<Icon name="text" />}
              onChange={(e) => setAgent({ ...agent, lastName: e.target.value })}
            />
            <Input
              lg
              full
              placeholder="eg. 0803 1234567"
              type="text"
              name="phone"
              label="Phone"
              before={<Icon name="phone" />}
              onChange={(e) => setAgent({ ...agent, phone: e.target.value })}
            />
            <Input
              lg
              full
              placeholder="eg. mail@mail.com"
              type="text"
              name="email"
              label="Email"
              before={<Icon name="mail" />}
              onChange={(e) => setAgent({ ...agent, email: e.target.value })}
            />
            <Input
              lg
              full
              placeholder="12345678"
              type="text"
              name="IMSSBN"
              label="IMSSBN"
              before={<Icon name="pin" />}
              onChange={(e) => setAgent({ ...agent, address: e.target.value })}
            />
            <div class="flex flex-col gap-1">
              <label for="myFile">Select File</label>
              <div className="border border-gray-200 bg-white p-4 rounded-md">
                <input
                  type="file"
                  id="myFile"
                  name="filename"
                  className="form-control opacity-0"
                />
              </div>
            </div>

            <Button.Group space>
              <button
                type="submit"
                className="py-4 px-20 mt-20 rounded-md bg-green-500 text-white font-normal shadow-sm hover:bg-green-600"
              >
                Submit <Icon name="chevron-double-right" />
              </button>
            </Button.Group>
          </div>
          {submitted && (
            <TailModal
              title={title}
              message={message}
              setSubmitted={setSubmitted}
              status={status}
              setStatus={setStatus}
              setTitle={setTitle}
              setMessage={setMessage}
            />
          )}
        </form>
        <div className="mt-24">{/* <Footer /> */}</div>
      </section>
    </main>
  );
};

export default BulkPayment1;
