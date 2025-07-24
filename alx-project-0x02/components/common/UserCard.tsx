import {UserProps} from "@/interfaces"

const UserCard: React.FC<UserProps>=({name, email, address})=>{

    return(
        <div id="userCard" className=" bg-gray-300 rounded shadow-md hover:shadow-xl p-3 flex justify-btween items-center flex-col">
            <h2 className=" text-black font-bold w-full"> {name} </h2>
            <p className="w-full text-gray-500"> {email} </p>
            <p className="w-full text-gray-500">{address.city}</p>
        </div>
    )
}


export default UserCard;
