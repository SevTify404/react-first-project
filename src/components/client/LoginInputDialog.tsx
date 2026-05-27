import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleUserRound } from "lucide-react";
import LoginForm from "../customized/input/LoginForm";
import { Button } from "../ui/button";

const LoginInputDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <CircleUserRound size={"sm"} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Se connecter</DialogTitle>
        </DialogHeader>
        <LoginForm />
      </DialogContent>
    </Dialog>
  );
};

export default LoginInputDialog;
