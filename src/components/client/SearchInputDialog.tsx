import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search } from "lucide-react";

const products = [
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
    fallback: "CP",
    name: "Cristofer Press",
    price: 40,
  },
  // je vais custome après en fonction des shémas de validation qu'on va créer
  // ou soit on passe carrément la lste des produits en props
];

const SearchInputDialog = () => {

  const isMobile = useIsMobile();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Search size={isMobile ? "sm" : "default"} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">Rechercher un produit </DialogTitle>
        </DialogHeader>
        <form className="flex gap-4 max-sm:flex-col">
          <div className="grid gap-3">
            <Input
              type="text"
              id="search-prod"
              name="product"
              placeholder="patek phillipe"
              required
            />
          </div>
          <Button type="submit" className="sm:self-end">
            Rechercher
          </Button>
        </form>
        <p className="mt-2">Résultats de recherche</p>
        {/* je vais customizer après l'affichage des résultats */}
        {/* <ul className='space-y-4'>
          {products.map((item, index) => (
            <li key={index} className='flex items-center justify-between gap-3'>
              <div className='flex items-center gap-3 max-[420px]:w-50'>
                <Avatar className='size-10'>
                  <AvatarImage src={item.src} alt={item.name} />
                  <AvatarFallback className='text-xs'>{item.fallback}</AvatarFallback>
                </Avatar>
                <div className='flex flex-1 flex-col overflow-hidden'>
                  <span>{item.name}</span>
                  <span className='text-muted-foreground truncate text-sm'>{item.price}</span>
                </div>
              </div>
              <Button
                size='sm'
                className='bg-sky-600 text-white hover:bg-sky-600 focus-visible:ring-sky-600 dark:bg-sky-400 dark:hover:bg-sky-400 dark:focus-visible:ring-sky-400'
              >
                <UserPlusIcon className='size-4' />
                Invite
              </Button>
            </li>
          ))}
        </ul> */}
      </DialogContent>
    </Dialog>
  );
};

export default SearchInputDialog;
