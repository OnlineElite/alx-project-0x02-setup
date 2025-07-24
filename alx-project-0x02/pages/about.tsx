import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"

const about: React.FC =()=>{

    return(
        <div>
            <Header/>
            <h1>Welcome to the <span className="text-orange-500">about</span> page</h1>
            <Button size="small" shape="rounded-sm" text="Small"/>
            <Button size="medium" shape="rounded-md" text="Medium"/>
            <Button size="large" shape="rounded-full" text="Large"/>
        </div>
    )
}

export default about;
