import {UserProps} from "@/interfaces"
import UserCard from "@/components/common/UserCard"
import Header from "@/components/layout/Header"
const Users: React.FC<UserProps> =({users})=>{

    return(
        <div>
            <Header/>
            <div className="list grid grid-cols-4 gap-2 m-3">
                {users.map(({name, email, address} : UserProps , key : number) =>
                    <UserCard key={key} name = {name} email= {email} address={address}/>
                )}
            </div>
        </div>
    )
}

export async function getStaticProps()  {
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: UserProps[] = await res.json()
        return {
            props : {users : data.slice(0,20)} //only the first 20 users
        }
    }catch(error){
        return {
            props : {users : []}
        }
    }
}

export default Users;
