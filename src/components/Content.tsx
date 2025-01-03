const Content = ({ title, children }: { title: string; children: any }) => {
    return (
        <div className="flex flex-col p-1 shadow-inner bg-color-lg shadow-color-xl rounded-xl">
            <div className="w-full mb-1 font-mono font-semibold text-center text-color-accent">
                {title}
            </div>
            <hr className="border-color-xl" />
            <div>{children}</div>
        </div>
    );
};

export default Content;
