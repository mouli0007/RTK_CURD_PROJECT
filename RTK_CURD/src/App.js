import React from "react";
import {
  useAddContactMutation,
  useFetchContactsQuery,
  useDeleteContactMutation,
  useUpdateContactMutation,
} from "./store";

function App() {
  const { data, error, isLoading } = useFetchContactsQuery();

  console.log(data);

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Error</div>;
  } else {
    content = data.map((user) => {
      return (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      );
    });
  }

  return (
    <div className="app">
      <h1>React Redux Toolkit RTK Query</h1>
      <h2>
        <AddContact />
      </h2>
      {content}
    </div>
  );
}

export const AddContact = () => {
  const [addContact] = useAddContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const { refetch } = useFetchContactsQuery;
  console.log(refetch);
  const contact = {
    id: 5,
    name: "Aww !",
    email: "aww@gmail.com",
  };

  const contactUpdated = {
    id: 1,
    name: "Mouli VJ is the Best in the World !",
    email: "vj@gmail.com",
  };

  const addHandler = async () => {
    await addContact(contact);
  };

  const updateHandler = async () => {
    await updateContact(contactUpdated);
  };

  const deleteHandler = async () => {
    await deleteContact(contact.id);
  };
  return (
    <>
      <button onClick={addHandler}>Add Contact</button>
      <button onClick={updateHandler}>Update Contact</button>
      <button onClick={deleteHandler}>Delete Contact</button>
    </>
  );
};
export default App;
