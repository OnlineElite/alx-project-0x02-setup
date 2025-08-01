export interface CardProps{
    title: string;
    content: string;
}


export interface PostModalProps{
    isOpen : boolean;
    onClose : ()=> void;
    onSubmit : (post : CardProps)=> void;
}

export interface ButtonProps {
    size : 'small' | 'medium' | 'large';
    shape : 'rounded-sm' | 'rounded-md' | 'rounded-full';
    text : string;
}

export interface PostProps{
    title: string;
    content : string;
    userId : number;
}

export interface address{
    city : string;
    street : string;
}

export interface UserProps {
    name : string;
    email : string;
    address : address;
}