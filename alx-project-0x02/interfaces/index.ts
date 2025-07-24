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
    size : string;
    shape : string;
    text : string;
}