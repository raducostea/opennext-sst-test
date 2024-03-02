type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function TestPage({ searchParams }: Props) {
    return <div>
        {JSON.stringify(searchParams)}
    </div>
}
