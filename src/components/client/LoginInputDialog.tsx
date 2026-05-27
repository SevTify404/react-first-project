import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { CircleUserRound } from "lucide-react";
import LoginForm from "../customized/input/LoginForm";

const LoginInputDialog = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
         <CircleUserRound size={"sm"}/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Se connecter</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-3 max-sm:flex-col">
            <LoginForm />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginInputDialog;
