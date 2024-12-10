import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const App = () => {
  return (
    <div className="flex flex-col items-center h-100% justify-center gap-2">
      <h1 className="">SignUP</h1>
      <Input placeholder="Enter Your Name"/>
      <Input placeholder="Enter Your Email"/>
      <Input placeholder="Enter Your Password"/>
      <Input placeholder="Enter Your Password Again"/>

      <Button type="submit" variant="destructive" className= "mt-5" size={"sm"}>Submit</Button>
      
    </div>
  )
}

export default App;
