import { useEffect, useState } from "react"; 
import supabase from "../config/supabaseClient";
import Header from "../components/Header";

export default function home(){
    const [user, setUser] = useState(null); // State to store the user

  useEffect(() => {
    const session = supabase.auth.getSession();
        setUser(session?.user || null); // Set user state if a session exists

        const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
            setUser(session?.user || null); // Update user state on auth state change
        });

    return () => {
      authListener.subscription.unsubscribe(); 
    };
  }, []);

    const login = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "github",
        });
        if (error) {
          console.error("Error logging in:", error);
        }
      };
      const logout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error("Error logging out:", error);
        }
      };

      return (
        <div>
             <Header user={user} /> 
          {!user ? ( // Render login button if no user is logged in
            <button
              onClick={login}
              style={{
                border: "2px solid white",
                color: "black",    
                backgroundColor: "white", 
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "5px",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Login with Github
            </button>
          ) : ( // Render logout button if a user is logged in
          <>
                   <Header user={user} /> {/* Pass user state to Header */}
                    <button
                        onClick={logout}
                        style={{
                            border: "2px solid white",   // White border
                            color: "black",              // Black text
                            backgroundColor: "white",    // Solid white background
                            padding: "10px 20px",        // Padding for button
                            cursor: "pointer",           // Pointer cursor on hover
                            borderRadius: "5px",         // Optional: rounded corners
                            fontWeight: "bold",          // Bold text
                        }}
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}