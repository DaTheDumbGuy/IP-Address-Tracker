export default interface HeaderProps {
    handleAddress:handleAddress;
    inputRef:React.RefObject<HTMLInputElement>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    error: string | null;
}

export type handleAddress =  (event: eventFormType) => void;
export type eventFormType = React.FormEvent<HTMLFormElement>;