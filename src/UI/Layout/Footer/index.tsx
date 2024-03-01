export const Footer = () => {
    const today = new Date().getFullYear();

    return (
        <>
            <span>{today} &copy;</span>
            <span>Top companies</span>
        </>
    );
};
