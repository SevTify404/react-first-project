import {Button} from "@/components/ui/button.tsx";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";
import toast from "react-hot-toast";
import {CheckmarkCircle02Icon} from "@hugeicons/core-free-icons";
import {HugeiconsIcon} from "@hugeicons/react";

function App() {
    return (
        <div className="min-h-screen flex gap-3 items-center justify-center bg-gray-100">
            <Button variant="default" onClick={() => {
                toast('Hello World', {
                    duration: 700,
                    position: 'top-right',

                    icon: <HugeiconsIcon icon={CheckmarkCircle02Icon} />,
                });
            }}>
                Ok Ok Okkkkkkkkkk
            </Button>
            <Select>
                <SelectTrigger className="w-45">
                    <SelectValue placeholder="Theme"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>

                    </SelectGroup>
                </SelectContent>
            </Select>
            {/*<Toaster />*/}
        </div>
    )

}

export default App
