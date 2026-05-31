import { CircleUserRound } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import UserInfo from "./UserInfo";

export default function UserInfoDialog() {
    return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <span className="sr-only sm:not-sr-only">
          Mon Compte
          </span>
          <CircleUserRound />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Mon compte</DialogTitle>
        </DialogHeader>
        <UserInfo/>
      </DialogContent>
    </Dialog>
  );
}