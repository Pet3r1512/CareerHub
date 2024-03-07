import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export function Signin({
  admin,
  setAdmin,
}: {
  admin: string;
  setAdmin: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    localStorage.setItem("admin", username);
  }, [admin]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Card className="w-[350px] py-4">
      <CardHeader>
        <CardTitle>Admin Log In</CardTitle>
      </CardHeader>
      <form>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
        </CardContent>
        <div className="w-full flex justify-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              console.log(username, password);
              if (username === "careerhub" && password === "20242024") {
                localStorage.setItem("admin", username);
                setLoggedIn(true);
              }
            }}
            className="text-white bg-primary rounded-lg py-1 w-1/2 mx-auto"
          >
            Sign In
          </button>
        </div>
      </form>
    </Card>
  );
}
