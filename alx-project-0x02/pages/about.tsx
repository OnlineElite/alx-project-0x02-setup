import Button from "@/components/common/Button"

const about: React.FC =()=>{

    return(
        <div>
            <h1>Welcome to the <span className="text-orange-500">about</span> page</h1>
            <Button size="sm" shape="rounded-sm" text="Small"/>
            <Button size="md" shape="rounded-md" text="Medium"/>
            <Button size="lg" shape="rounded-lg" text="Large"/>
        </div>
    )
}

export default about;
