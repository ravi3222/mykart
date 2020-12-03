import { useEffect, useState } from "react";
import { auth, handleUserProfile } from "../firebase/utils";

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );

  console.log("Initial User", user);
  useEffect(() => {
    const listener = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
        // Update user in Firestore
        const userRef = await handleUserProfile(authUser);
        userRef.onSnapshot((snapshot) => {
          setUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    return () => listener();
  }, []);
  console.log("Current User", user);
  return { user };
}
