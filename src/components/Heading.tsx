
interface HeadingProps {
    label: string;
}

export const Heading = ({ label } : HeadingProps):JSX.Element => {
    return <h1 className="text-2xl font-bold text-center">{label}</h1>;
};
