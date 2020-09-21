import React, { useState } from "react";

export const ApplicationContext = React.createContext({});

const ApplicationProvider = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [purchaseList, setPurchaseList] = useState([]);
  const userObject = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    movieData: movieData,
    purchaseList: purchaseList,
    setUser: (firstName, lastName, email) => {
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(email);
    },
    setMovieData: movieData => {
      setMovieData(movieData);
    },
    setPurchaseList: purchaseList => {
      setPurchaseList(purchaseList);
    }
  };

  return (
    <ApplicationContext.Provider value={userObject}>
      {props.children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
