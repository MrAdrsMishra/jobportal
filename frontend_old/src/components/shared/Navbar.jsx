import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = false;

  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Job<span className="text-[#f83002]">Portal</span>
        </h1>

        {/* Right section */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-5 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Jobs</li>
            <li className="cursor-pointer">Browse</li>
          </ul>

          {
            !user ? (
              <div>
               <Link to ='/Login'><Button variant="outline">Login</Button></Link> 
               <Link to ='/Signup'><Button className = "bg-[#6A38C2] hover:bg-[#5b30a6]">SignUp</Button></Link> 
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" alt="profile" />
                  </Avatar>
                </PopoverTrigger>

                <PopoverContent>
                  <div className="flex">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>

                    <div className="flex flex-col">
                      <h4 className="font-medium">Priyanshi</h4>
                      <p className="text-sm text-gray-500">
                        MERN Stack Developer
                      </p>

                      <div>
                        <Button variant="link">
                          <User2 className="mr-2 h-4 w-4" />
                          View Profile
                        </Button>
                      </div>

                      <div>
                        <Button variant="link">
                          <LogOut className="mr-2 h-4 w-4" />
                          Logout
                        </Button>
                      </div>

                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
